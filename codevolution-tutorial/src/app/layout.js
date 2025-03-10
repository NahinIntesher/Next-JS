import "./globals.css";

export const metadata = {
  title: "Codevolution Tutorial - Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
