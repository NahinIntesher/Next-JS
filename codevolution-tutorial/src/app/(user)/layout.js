import "../globals.css";

export const metadata = {
  title: "Codevolution Tutorial - Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl">Codevolution Tutorial - Next.js</h1>
        </header>
        {children}
        <footer className="bg-gray-800 text-white p-4">
          <p>&copy; 2021 Codevolution</p>
        </footer>
      </body>
    </html>
  );
}
