// Shared Supabase client — same project as ritel-community-id
const SUPABASE_URL = "https://qsbpiijaxxjtnhejcepb.supabase.co";
const SUPABASE_SERVICE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SERVICE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzYnBpaWpheHhqdG5oZWpjZXBiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDE0OTY3OSwiZXhwIjoyMDk1NzI1Njc5fQ.LDetNNQw9MKScITpyxQumPrM1kSCRhLBQ_5h8k-pVwM";

export async function sb(
  method: "GET" | "POST" | "PATCH" | "DELETE",
  path: string,
  body?: any,
  extraHeaders?: Record<string, string>
): Promise<any[]> {
  const url = `${SUPABASE_URL}/rest/v1${path}`;
  const res = await fetch(url, {
    method,
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      ...extraHeaders,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  if (!res.ok) {
    const err = await res.text().catch(() => "unknown");
    console.error(`Supabase ${method} ${path} error ${res.status}:`, err);
    return [];
  }
  const text = await res.text();
  if (!text) return [];
  try { return JSON.parse(text); } catch { return []; }
}
