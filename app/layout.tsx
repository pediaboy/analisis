import "./globals.css";

export const metadata = {
  title: "RITEL COMMUNITY.ID",
  description: "Fundamental Scanner & Bandarmologi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
