const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, jidNormalizedUser, downloadContentFromMessage } = require('@whiskeysockets/baileys');
const pino = require('pino');
const qrcode = require('qrcode-terminal');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const fs = require('fs');
const axios = require('axios');
const moment = require('moment-timezone');

// === DATABASE HANDLER ===
if (!fs.existsSync('./list-jualan-group.json')) fs.writeFileSync('./list-jualan-group.json', JSON.stringify({}));
let listGroup = JSON.parse(fs.readFileSync('./list-jualan-group.json'));
const saveDB = () => fs.writeFileSync('./list-jualan-group.json', JSON.stringify(listGroup, null, 2));

if (!fs.existsSync('./blacklist-group.json')) fs.writeFileSync('./blacklist-group.json', JSON.stringify([]));
let blacklistGroup = JSON.parse(fs.readFileSync('./blacklist-group.json'));
const saveBlacklist = () => fs.writeFileSync('./blacklist-group.json', JSON.stringify(blacklistGroup, null, 2));

if (!fs.existsSync('./banned-users.json')) fs.writeFileSync('./banned-users.json', JSON.stringify([]));
let bannedUsers = JSON.parse(fs.readFileSync('./banned-users.json'));
const saveBanned = () => fs.writeFileSync('./banned-users.json', JSON.stringify(bannedUsers, null, 2));

if (!fs.existsSync('./antilink-group.json')) fs.writeFileSync('./antilink-group.json', JSON.stringify([]));
let antilinkGroup = JSON.parse(fs.readFileSync('./antilink-group.json'));
const saveAntilink = () => fs.writeFileSync('./antilink-group.json', JSON.stringify(antilinkGroup, null, 2));

// DATABASE PENYEDOT LINK
if (!fs.existsSync('./saved-links.json')) fs.writeFileSync('./saved-links.json', JSON.stringify([]));
let savedLinks = JSON.parse(fs.readFileSync('./saved-links.json'));
const saveLinksDB = () => fs.writeFileSync('./saved-links.json', JSON.stringify(savedLinks, null, 2));

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const owners = ['6282172222494', '6282218723401', '37869381009524', '15037116772464'];
const timezone = 'Asia/Jakarta';
let modePublic = true;
let isJpmRunning = false;
let jpmSukses = 0;
let jpmTotal = 0;

const getMessageBody = (m) => {
    try {
        if (!m || !m.message) return '';
        const msg = m.message;
        if (msg.conversation) return msg.conversation;
        if (msg.extendedTextMessage) return msg.extendedTextMessage.text;
        if (msg.imageMessage) return msg.imageMessage.caption;
        if (msg.videoMessage) return msg.videoMessage.caption;
        return '';
    } catch { return ''; }
};

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('sesi_bot');
    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
        version,
        auth: state,
        logger: pino({ level: 'silent' }), 
        printQRInTerminal: false,
        browser: ['pediaaboyy', 'Safari', '3.0.0']
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('messages.upsert', async ({ messages }) => {
        try {
            const m = messages[0];
            if (!m.message || m.key.remoteJid === 'status@broadcast') return;

            const from = m.key.remoteJid;
            const isGroup = from.endsWith('@g.us');
            const isMe = m.key.fromMe;

            let senderJid = isMe ? sock.user.id : (m.key.participant || m.key.remoteJid);
            senderJid = jidNormalizedUser(senderJid || '');
            let senderNumber = senderJid.split('@')[0].split(':')[0]; 
            const isOwner = owners.includes(senderNumber) || isMe;

            if (bannedUsers.includes(senderNumber) && !isOwner) return; 

            const bodyString = getMessageBody(m);
            if (!bodyString) return;

            const bodyTrim = bodyString.trim();
            const kataPertama = bodyTrim.split(/\s+/)[0].toLowerCase();
            const isPakeTitik = kataPertama.startsWith('.');
            const command = isPakeTitik ? kataPertama.slice(1) : kataPertama;
            const textArg = bodyTrim.substring(kataPertama.length).trim();
            const bodyLower = bodyString.toLowerCase();

            const reply = async (teks) => {
                await sock.sendMessage(from, { text: teks }, { quoted: m });
            };

            // === PENYEDOT LINK OTOMATIS (AUTO SCRAPER) ===
            const waLinkRegex = /(?:chat\.whatsapp\.com\/(?:invite\/)?)([a-zA-Z0-9_-]{20,24})/g;
            let matchLink;
            let linkFound = false;
            
            while ((matchLink = waLinkRegex.exec(bodyString)) !== null) {
                const fullLink = `https://chat.whatsapp.com/${matchLink[1]}`;
                if (!savedLinks.includes(fullLink)) {
                    savedLinks.push(fullLink);
                    linkFound = true;
                }
            }
            if (linkFound) saveLinksDB();

            // === PENGECEKAN PINTAR (LAZY LOAD) ===
            let metadataFetched = false;
            let isUserAdmin = false;
            let groupName = "Grup WhatsApp";

            const getMetadata = async () => {
                if (metadataFetched || !isGroup) return;
                try {
                    const metadata = await sock.groupMetadata(from);
                    groupName = metadata.subject;
                    const groupAdmins = metadata.participants.filter(p => p.admin !== null).map(p => jidNormalizedUser(p.id));
                    isUserAdmin = groupAdmins.includes(senderJid) || isOwner; 
                } catch (e) {}
                metadataFetched = true;
            };

            const adHeader = `*───［ pediaaboyy ］───*
*Chat :* Online

`;
            const adFooter = `

*Powered by pediaboy*`;

            // ==========================================
            // FITUR ANTILINK (AUTO DELETE LINK)
            // ==========================================
            if (isGroup && antilinkGroup.includes(from) && !isOwner && !isMe) {
                const isWaLink = /(https?:\/\/)?(www\.)?(chat\.whatsapp\.com\/invite\/)?([0-9A-Za-z]{20,24})/ig.test(bodyString);
                const isUrlLink = /(https?:\/\/)?[\da-z\.-]+\.[a-z\.]{2,6}(\/([^\s]*))?/ig.test(bodyString);
                
                if (isWaLink || isUrlLink) {
                    await getMetadata(); 
                    if (!isUserAdmin) {
                        await sock.sendMessage(from, { delete: m.key });
                        return await sock.sendMessage(from, { 
                            text: `⚠️ *ANTI-LINK AKTIF*

Mengirim link tidak diperbolehkan, pesan telah dihapus otomatis!`, 
                            mentions: [senderJid] 
                        });
                    }
                }
            }

            // ==========================================
            // FITUR PUBLIC / SELF
            // ==========================================
            if (command === 'public') {
                if (!isOwner) return;
                modePublic = true;
                return await reply(adHeader + `✅ Bot sekarang berada di mode *PUBLIC*` + adFooter);
            }

            if (command === 'self') {
                if (!isOwner) return;
                modePublic = false;
                return await reply(adHeader + `✅ Bot sekarang berada di mode *SELF*` + adFooter);
            }

            if (!modePublic && !isOwner) return;

            // ==========================================
            // FITUR OWNER ONLY (STRICT)
            // ==========================================
            
            // 1. Melihat Sedotan Link (listgc & getlink)
            if (command === 'listgc' || command === 'getlink') {
                if (!isOwner) return;
                if (savedLinks.length === 0) return reply(`Belum ada link grup yang tersimpan.`);
                
                let txt = `*DAFTAR LINK GRUP HASIL SEDOTAN*

`;
                savedLinks.forEach((link, i) => { txt += `${i + 1}. ${link}
`; });
                
                txt += `
_Total: ${savedLinks.length} Link_

*Note:* Kamu bisa memblok semua teks ini lalu ketik *.join <paste semua link>* untuk masuk secara masal.
Untuk mereset daftar ini ketik: *.clearlistgc*`;
                
                return reply(adHeader + txt + adFooter);
            }

            if (command === 'clearlistgc') {
                if (!isOwner) return;
                savedLinks = [];
                saveLinksDB();
                return reply(`✅ Semua link grup yang tersimpan berhasil dihapus/direset!`);
            }

            // 2. Auto Join Grup Masal (Auto Request & Auto Archive)
            if (command === 'join' && isOwner) {
                if (!textArg) return reply(`❌ Masukkan link grupnya (bisa banyak sekaligus)!
Contoh: .join link1 link2...`);
                
                const regex = /(?:chat\.whatsapp\.com\/(?:invite\/)?)([a-zA-Z0-9_-]{20,24})/g;
                let links = [];
                let match;
                
                while ((match = regex.exec(textArg)) !== null) {
                    links.push(match[1]);
                }

                if (links.length === 0) return reply(`❌ Tidak ada link grup WhatsApp yang valid ditemukan.`);
                
                await reply(`⏳ Menemukan ${links.length} link grup. 
Bot memproses dengan sistem pintar:
- Link mati / Di-Kick = Skip (0s)
- Sudah Gabung = Skip (0s)
- Perlu Persetujuan = Minta Bergabung (Jeda 4s)
- Terbuka = Masuk & Auto Arsip (Jeda 4s)`);
                
                let sukses = 0;
                let pending = 0;
                let gagal = 0;
                let sudahJoin = 0;

                const getGroups = await sock.groupFetchAllParticipating();
                const joinedGroups = Object.keys(getGroups);

                for (let code of links) {
                    try {
                        const inviteInfo = await sock.groupGetInviteInfo(code);
                        
                        if (joinedGroups.includes(inviteInfo.id)) {
                            sudahJoin++;
                            continue; 
                        }

                        await delay(4000); 
                        
                        // Cek apakah grup butuh persetujuan admin
                        if (inviteInfo.joinApprovalMode) {
                            await sock.groupRequestParticipate(code);
                            pending++;
                        } else {
                            const resJoin = await sock.groupAcceptInvite(code);
                            sukses++;

                            await delay(2000);
                            try {
                                await sock.chatModify({ archive: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, resJoin || inviteInfo.id);
                            } catch (err) {}
                        }
                    } catch (e) {
                        gagal++; // Dikeluarkan dari grup atau Link tidak valid/mati
                    }
                }

                return reply(`✅ Proses Auto Join selesai!

Berhasil masuk & diarsip: ${sukses} grup
Menunggu persetujuan admin: ${pending} grup
Sudah gabung sebelumnya (Skip): ${sudahJoin} grup
Gagal (Link Mati / Di-Kick): ${gagal} grup`);
            }

            // 3. Cek Total Grup & Keluar Grup
            if (command === 'listgrup' || command === 'cekgrup') {
                if (!isOwner) return;
                try {
                    const getGroups = await sock.groupFetchAllParticipating();
                    const groups = Object.values(getGroups);
                    if (groups.length === 0) return reply(`Bot belum bergabung di grup manapun.`);
                    
                    let txt = `*DAFTAR GRUP BOT PEDIABOY*

*Total Grup:* ${groups.length}

`;
                    groups.forEach((g, i) => {
                        txt += `${i + 1}. ${g.subject}\n   ID: ${g.id}\n\n`;
                    });
                    return reply(adHeader + txt + adFooter);
                } catch (e) {
                    return reply(`❌ Gagal mengambil daftar grup.`);
                }
            }

            if (command === 'outgc' || command === 'out') {
                if (!isOwner) return;
                if (isGroup) {
                    await reply('Bot akan keluar dari grup ini. Selamat tinggal! 👋');
                    await delay(2000);
                    return await sock.groupLeave(from);
                } else if (textArg) {
                    try {
                        await sock.groupLeave(textArg);
                        return await reply(`✅ Berhasil keluar dari grup dengan ID: ${textArg}`);
                    } catch (e) {
                        return await reply(`❌ Gagal keluar. Pastikan ID grup valid.`);
                    }
                } else {
                    return reply(`❌ Gunakan perintah ini di dalam grup, atau sertakan ID grup.`);
                }
            }

            if (command === 'outallgc' || command === 'outall') {
                if (!isOwner) return;
                await reply(`⏳ Sedang memproses keluar dari semua grup dengan jeda 3 detik per grup...`);
                try {
                    const getGroups = await sock.groupFetchAllParticipating();
                    const groups = Object.keys(getGroups);
                    let suksesOut = 0;
                    
                    for (let jid of groups) {
                        try {
                            await sock.groupLeave(jid);
                            suksesOut++;
                            await delay(3000); 
                        } catch (err) {}
                    }
                    
                    return await sock.sendMessage(senderJid, { text: `✅ Proses *Out All GC* Selesai!\nBerhasil keluar dari ${suksesOut} grup.` });
                } catch (e) {
                    return await reply(`❌ Terjadi kesalahan saat mencoba keluar dari grup.`);
                }
            }

            // ==========================================
            // FITUR BAN & UNBAN
            // ==========================================
            if (command === 'ban' && isOwner) {
                let target = m.message.extendedTextMessage?.contextInfo?.participant || (textArg ? textArg.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);
                if (!target) return reply(`❌ Reply pesan target atau ketik nomornya.`);
                
                let num = target.split('@')[0];
                if (!bannedUsers.includes(num)) {
                    bannedUsers.push(num);
                    saveBanned();
                    return reply(`✅ Sukses! Nomor ${num} telah diblokir dari bot.`);
                } else {
                    return reply(`⚠️ Nomor ${num} sudah ada di dalam daftar ban.`);
                }
            }

            if (command === 'delban' && isOwner) {
                let target = m.message.extendedTextMessage?.contextInfo?.participant || (textArg ? textArg.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);
                if (!target) return reply(`❌ Reply target untuk lepas ban.`);
                
                let num = target.split('@')[0];
                let idx = bannedUsers.indexOf(num);
                if (idx !== -1) {
                    bannedUsers.splice(idx, 1);
                    saveBanned();
                    return reply(`✅ Ban untuk ${num} berhasil dicabut.`);
                } else {
                    return reply(`⚠️ Nomor ${num} tidak ditemukan di daftar ban.`);
                }
            }

            if (command === 'cekban' && isOwner) {
                if (bannedUsers.length === 0) return await reply(`Tidak ada user yang di-ban.`);
                let txt = `*DAFTAR BANNED USER*

`;
                bannedUsers.forEach((num, i) => { txt += `${i + 1}. ${num}
`; });
                return await reply(txt);
            }

            // ==========================================
            // FITUR OWNER: JPM, BLACKLIST & CLEAR GC
            // ==========================================
            if (command === 'addbl' && isOwner && isGroup) {
                if (!blacklistGroup.includes(from)) {
                    blacklistGroup.push(from);
                    saveBlacklist();
                    return await reply(`✅ Grup ini berhasil dimasukkan ke daftar Blacklist JPM.`);
                }
            }

            if (command === 'delbl' && isOwner && isGroup) {
                const index = blacklistGroup.indexOf(from);
                if (index !== -1) {
                    blacklistGroup.splice(index, 1);
                    saveBlacklist();
                    return await reply(`✅ Grup ini dihapus dari daftar Blacklist JPM.`);
                }
            }

            if (command === 'cekbl' && isOwner) {
                if (blacklistGroup.length === 0) return await reply(`Tidak ada grup dalam daftar blacklist.`);
                let txt = `*DAFTAR BLACKLIST JPM*

`;
                blacklistGroup.forEach((id, i) => { txt += `${i + 1}. ID: ${id}
`; });
                return await reply(adHeader + txt + adFooter);
            }

            if (command === 'cleargc' && isOwner) {
                await reply(`⏳ Sedang membersihkan semua chat grup...
_Proses ini memakan waktu beberapa saat._`);
                try {
                    const getGroups = await sock.groupFetchAllParticipating();
                    const groups = Object.keys(getGroups);
                    let suksesClear = 0;
                    
                    for (let jid of groups) {
                        try {
                            await sock.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, jid);
                            suksesClear++;
                            await delay(1000); 
                        } catch (err) {}
                    }
                    return await reply(`✅ Selesai! Berhasil membersihkan riwayat pesan di ${suksesClear} grup.`);
                } catch (e) {
                    return await reply(`❌ Terjadi kesalahan saat mencoba membersihkan chat grup.`);
                }
            }

            if (command === 'stats' && isOwner) {
                if (!isJpmRunning) return await reply(`⚠️ Tidak ada JPM berjalan.`);
                let estimasi = (jpmTotal - jpmSukses) * 4; 
                return await reply(`📊 *STATISTIK JPM*

• Sedang Berjalan ⏳
• Terkirim: ${jpmSukses} / ${jpmTotal}
• Estimasi Selesai: ~${estimasi} Detik
_Ketik *.stopjpm* untuk membatalkan._`);
            }

            if (command === 'stopjpm' && isOwner) {
                if (!isJpmRunning) return await reply(`⚠️ Tidak ada JPM berjalan.`);
                isJpmRunning = false; 
                return await reply(`✅ JPM dihentikan...`);
            }

            if (command === 'jpm' && isOwner) {
                if (!textArg) return await reply(`❌ Teks JPM nya mana?`);
                if (isJpmRunning) return await reply(`⚠️ JPM sedang berjalan. Ketik *.stats*`);

                try {
                    const getGroups = await sock.groupFetchAllParticipating();
                    let groups = Object.keys(getGroups).filter(jid => !blacklistGroup.includes(jid));

                    jpmTotal = groups.length;
                    jpmSukses = 0;
                    isJpmRunning = true;

                    await reply(`⏳ Memulai JPM ke ${jpmTotal} grup...
_Ketik *.stats* mengecek progress._`);
                    
                    (async () => {
                        for (let jid of groups) {
                            if (!isJpmRunning) {
                                await sock.sendMessage(from, { text: `🛑 JPM dihentikan! Terkirim ke ${jpmSukses} grup.` });
                                return; 
                            }
                            try {
                                await sock.sendMessage(jid, { text: textArg });
                                jpmSukses++;
                                await delay(4000); 
                            } catch (err) {}
                        }
                        if (isJpmRunning) {
                            isJpmRunning = false;
                            await reply(`✅ JPM Selesai!
Terkirim ke ${jpmSukses} grup.`);
                        }
                    })();
                } catch (e) {
                    isJpmRunning = false;
                }
            }

            // ==========================================
            // FITUR MAKER
            // ==========================================
            if (command === 'brat') {
                if (!textArg) return reply(`❌ Teksnya mana Bos?`);
                try {
                    let apiLink = `https://api.botcahx.eu.org/api/maker/brat?text=${encodeURIComponent(textArg)}&apikey=pediaboy`;
                    let res = await axios.get(apiLink, { responseType: 'arraybuffer' });
                    const sticker = new Sticker(res.data, { pack: 'pediaaboyy', author: '@elthoriqqqq_', type: StickerTypes.FULL, quality: 50 });
                    await sock.sendMessage(from, { sticker: await sticker.toBuffer() }, { quoted: m });
                } catch (e) { await reply(`❌ Gagal membuat brat.`); }
            }

            if (command === 'bratvideo' || command === 'bratvid') {
                if (!textArg) return reply(`❌ Teksnya mana Bos?`);
                try {
                    await reply(`⏳ Sedang merender stiker animasi brat...
Mohon tunggu, proses ini butuh FFmpeg.`);
                    
                    let apiLink = `https://api.sawit.biz.id/api/maker/brat?text=${encodeURIComponent(textArg)}&type=video`;
                    let res = await axios.get(apiLink);
                    
                    if (res.data && res.data.result) {
                        let videoBuffer = await axios.get(res.data.result.url, { responseType: 'arraybuffer' });
                        const sticker = new Sticker(videoBuffer.data, { 
                            pack: 'pediaaboyy', 
                            author: '@elthoriqqqq_', 
                            type: StickerTypes.FULL, 
                            quality: 40 
                        });
                        return await sock.sendMessage(from, { sticker: await sticker.toBuffer() }, { quoted: m });
                    }
                } catch (e) {
                    return reply(`❌ Gagal merender stiker animasi.
Pastikan panel kamu benar-benar mendukung FFmpeg.`);
                }
            }

            if (command === 's' || command === 'sticker' || command === 'svid') {
                let msgToDownload = m.message;
                let type = Object.keys(msgToDownload)[0];
                if (type === 'extendedTextMessage') {
                    const quoted = msgToDownload.extendedTextMessage.contextInfo?.quotedMessage;
                    if (quoted) { msgToDownload = quoted; type = Object.keys(msgToDownload)[0]; }
                }
                
                if (type !== 'imageMessage' && type !== 'videoMessage') return reply(`❌ Reply gambar/video dengan .s`);

                try {
                    const stream = await downloadContentFromMessage(msgToDownload[type], type.replace('Message', ''));
                    let buffer = Buffer.from([]);
                    for await(const chunk of stream) buffer = Buffer.concat([buffer, chunk]);

                    await reply(`⏳ Sedang memproses stiker...`);
                    
                    const sticker = new Sticker(buffer, { 
                        pack: 'pediaaboyy', 
                        author: '@elthoriqqqq_', 
                        type: StickerTypes.FULL, 
                        quality: type === 'videoMessage' ? 20 : 50 
                    });
                    
                    return await sock.sendMessage(from, { sticker: await sticker.toBuffer() }, { quoted: m });
                } catch (e) {
                    return reply(`❌ Gagal merender stiker. Pastikan ukuran media tidak terlalu besar.`);
                }
            }

            // ==========================================
            // STATUS PROSES & DONE
            // ==========================================
            if (command === 'p' || command === 'proses' || command === 'done' || command === 'd') {
                await getMetadata(); 
                if (!isUserAdmin) return;

                const target = m.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || m.message.extendedTextMessage?.contextInfo?.participant;
                let targetTag = target ? `@${target.split('@')[0]}` : '';
                
                let catatan = textArg || (m.message.extendedTextMessage?.contextInfo?.quotedMessage?.conversation || '-');
                
                const d = new Date();
                const jam = d.toLocaleTimeString('id-ID', { timeZone: timezone, hour: '2-digit', minute: '2-digit' }) + ' WIB';
                const tanggal = d.toLocaleDateString('id-ID', { timeZone: timezone, day: '2-digit', month: 'long', year: 'numeric' });

                if (command === 'p' || command === 'proses') {
                    const textP = `_*TRANSAKSI DIPROSES「 ⏳ 」*_

⏰ Jam      : ${jam}
📅 Tanggal  : ${tanggal}
📂 Grup     : ${groupName}
📝 Catatan  : ${catatan}

${targetTag ? targetTag + ' _Pesanan sedang diproses, mohon ditunggu!_' : '_Pesanan sedang diproses, mohon ditunggu!_'}`;
                    return await sock.sendMessage(from, { text: textP, mentions: target ? [target] : [] }, { quoted: m });
                }

                if (command === 'done' || command === 'd') {
                    const textD = `_*TRANSAKSI BERHASIL「 ✅ 」*_

⏰ Jam      : ${jam}
📅 Tanggal  : ${tanggal}
📂 Grup     : ${groupName}
📝 Catatan  : ${catatan}

${targetTag ? targetTag + ' _Terima kasih sudah order!_' : '_Terima kasih sudah order!_'}`;
                    return await sock.sendMessage(from, { text: textD, mentions: target ? [target] : [] }, { quoted: m });
                }
            }

            // ==========================================
            // ADMIN GRUP & STORE LIST
            // ==========================================
            const adminCommands = ['add', 'kick', 'k', 'addlist', 'dellist', 'open', 'close', 'h', 'hidetag', 'addadmin', 'promote', 'deladmin', 'demote', 'del', 'delete', 'antilink'];
            if (isGroup && adminCommands.includes(command)) {
                await getMetadata(); 
                if (!isUserAdmin) return; 

                if (command === 'antilink') {
                    if (textArg === 'on') {
                        if (!antilinkGroup.includes(from)) {
                            antilinkGroup.push(from);
                            saveAntilink();
                            return await reply(adHeader + `✅ Sistem *Anti-Link* berhasil diaktifkan di grup ini!` + adFooter);
                        } else return await reply(`⚠️ Anti-Link sudah aktif di grup ini.`);
                    } else if (textArg === 'off') {
                        let idx = antilinkGroup.indexOf(from);
                        if (idx !== -1) {
                            antilinkGroup.splice(idx, 1);
                            saveAntilink();
                            return await reply(adHeader + `✅ Sistem *Anti-Link* berhasil dimatikan!` + adFooter);
                        } else return await reply(`⚠️ Anti-Link memang belum aktif.`);
                    } else {
                        return await reply(`❌ Format salah!
Gunakan: *.antilink on* atau *.antilink off*`);
                    }
                }

                if (command === 'add') {
                    if (!textArg) return;
                    let num = textArg.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                    await sock.groupParticipantsUpdate(from, [num], "add");
                    return await reply(adHeader + `✅ Berhasil ditambahkan!` + adFooter);
                }
                if (command === 'kick' || command === 'k') {
                    let users = m.message.extendedTextMessage?.contextInfo?.mentionedJid || [];
                    if (m.message.extendedTextMessage?.contextInfo?.quotedMessage) { users.push(m.message.extendedTextMessage.contextInfo.participant); }
                    if (users.length === 0 && textArg) { users.push(textArg.replace(/[^0-9]/g, '') + '@s.whatsapp.net'); }
                    if (users.length === 0) return;
                    for (let u of users) { await sock.groupParticipantsUpdate(from, [u], "remove"); }
                    return await reply(adHeader + `✅ Berhasil mengeluarkan member!` + adFooter);
                }
                if (command === 'addlist') {
                    const [kunci, ...isi] = textArg.split('|');
                    if (kunci && isi.length > 0) {
                        if (!listGroup[from]) listGroup[from] = {}; 
                        listGroup[from][kunci.toLowerCase().trim()] = isi.join('|').trim(); 
                        saveDB();
                        return await reply(adHeader + `✅ Produk disimpan!` + adFooter);
                    } else {
                        return await reply(`❌ Format salah! Contoh: .addlist netflix | harga 30k`);
                    }
                }
                if (command === 'dellist') {
                    if (listGroup[from] && listGroup[from][textArg.toLowerCase().trim()]) {
                        delete listGroup[from][textArg.toLowerCase().trim()]; saveDB();
                        return await reply(adHeader + `✅ Produk dihapus!` + adFooter);
                    }
                }
                if (command === 'open') return await sock.groupSettingUpdate(from, 'not_announcement');
                if (command === 'close') return await sock.groupSettingUpdate(from, 'announcement');
                
                if (command === 'h' || command === 'hidetag') {
                    const metadata = await sock.groupMetadata(from).catch(() => null);
                    if (metadata) {
                        let teksTag = textArg || (m.message.extendedTextMessage?.contextInfo?.quotedMessage?.conversation || 'ㅤ');
                        return await sock.sendMessage(from, { text: teksTag, mentions: metadata.participants.map(p => p.id) });
                    }
                }
                
                if (command === 'addadmin' || command === 'promote') {
                    const target = m.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || m.message.extendedTextMessage?.contextInfo?.participant;
                    if (target) {
                        await sock.groupParticipantsUpdate(from, [target], "promote");
                        return await sock.sendMessage(from, { text: `🎉 Selamat @${target.split('@')[0]}, kamu jadi Admin!`, mentions: [target] }, { quoted: m });
                    }
                }
                if (command === 'deladmin' || command === 'demote') {
                    const target = m.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || m.message.extendedTextMessage?.contextInfo?.participant;
                    if (target) {
                        await sock.groupParticipantsUpdate(from, [target], "demote");
                        return await sock.sendMessage(from, { text: `⚠️ @${target.split('@')[0]}, kamu turun jadi Member.`, mentions: [target] }, { quoted: m });
                    }
                }
                if (command === 'del' || command === 'delete') {
                    const ctx = m.message.extendedTextMessage?.contextInfo;
                    if (ctx?.stanzaId) {
                        return await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: ctx.participant === jidNormalizedUser(sock.user.id), id: ctx.stanzaId, participant: ctx.participant } });
                    }
                }
            }

            if (command === 'list') {
                const keys = Object.keys(listGroup[from] || {});
                if (keys.length === 0) return reply(`Belum ada produk terdaftar di grup ini.`);
                let txt = `*DAFTAR PRODUK*

`;
                keys.forEach((k, i) => { txt += `${i + 1}. ${k.toUpperCase()}
`; });
                return reply(adHeader + txt + adFooter);
            }

            // AUTO REPLY LIST JUALAN
            if (isGroup && listGroup[from] && listGroup[from][bodyLower]) {
                return reply(adHeader + listGroup[from][bodyLower] + adFooter);
            }

            if (command === 'sewabot') {
                const sewaText = `╭━━〔 ʜᴀʀɢᴀ ꜱᴇᴡᴀ 〕━━╮
│
│➤ 🌤️ ꜱᴇᴡᴀ ʜᴀʀɪᴀɴ
│ • 1 ʜᴀʀɪ — ʀᴘ 1.000
│ • 3 ʜᴀʀɪ — ʀᴘ 3.500
│ • 7 ʜᴀʀɪ — ʀᴘ 6.000
│
│➤ 📆 ꜱᴇᴡᴀ ᴍɪɴɢɢᴜᴀɴ
│ • 14 ʜᴀʀɪ — ʀᴘ 10.500
│ • 21 ʜᴀʀɪ — ʀᴘ 16.000
│
│➤ 🗓️ ꜱᴇᴡᴀ ʙᴜʟᴀɴᴀɴ
│ • 1 ʙᴜʟᴀɴ — ʀᴘ 15.000
│ • 2 ʙᴜʟᴀɴ — ʀᴘ 25.000
│ • 3 ʙᴜʟᴀɴ — ʀᴘ 35.000
│
│≈ ᴛɪᴅᴀᴋ ᴍᴇɴʏᴇᴅɪᴀᴋᴀɴ ꜱᴇᴡᴀ ᴘᴇʀᴍᴀɴᴇɴ
╰━━━━━━━━━━━━━━━━╯

✦ ───〔 ɴᴏᴛᴇ 〕─── ✦
• ʙᴏᴛ ᴀᴋᴛɪꜰ 24 ᴊᴀᴍ`;

                const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:Owner Pediaaboyy\nTEL;type=CELL;type=VOICE;waid=6282172222494:+6282172222494\nEND:VCARD`;
                await reply(adHeader + sewaText + adFooter);
                return await sock.sendMessage(from, { contacts: { displayName: 'Owner Pediaaboyy', contacts: [{ vcard }] } }, { quoted: m });
            }

            if (command === 'menu' || command === 'help') {
                const help = `*LIST COMMAND*

*👨‍💻 ADMIN GRUP:*
- *antilink* on/off
- *addadmin* / *deladmin*
- *p* (Proses) / *d* (Done)
- *h* <teks> (Hidetag)
- *del* (Hapus Pesan)
- *open* / *close* (Grup)
- *k* <tag> (Kick)
- *add* (Add Member)

*🛒 JUALAN:*
- *addlist* <kunci|isi>
- *dellist* <kunci>
- *list*
- *sewabot*

*🎨 MAKER:*
- *brat* <teks>
- *bratvid* <teks>
- *s* / *svid* (Reply Media)

*👑 OWNER ONLY:*
- *public* / *self*
- *listgrup* (Cek Total Grup)
- *outgc* / *outallgc* (Keluar)
- *listgc* (Sedot Link)
- *clearlistgc*
- *join* <link> (Bisa Massal)
- *ban* / *delban* / *cekban*
- *cleargc*
- *jpm* <teks>
- *stopjpm* / *stats*
- *addbl* / *delbl* / *cekbl*

*IG: @elthoriqqqq_*`;
                return reply(adHeader + help + adFooter);
            }

        } catch (err) { /* Silent Error */ }
    });

    sock.ev.on('connection.update', async (u) => {
        if (u.qr) qrcode.generate(u.qr, { small: true });
        if (u.connection === 'open') console.log('✅ BOT PEDIABOY JALAN (SUPER SMART JOIN AKTIF)');
        if (u.connection === 'close') setTimeout(startBot, 5000);
    });
}
startBot();
