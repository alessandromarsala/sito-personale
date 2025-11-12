import Link from "next/link";

export const metadata = {
  title: "Alessandro Marsala",
  description: "Portfolio e progetti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <header className="fixed top-0 w-full bg-white shadow z-50">
          <nav className="max-w-5xl mx-auto flex justify-center gap-8 py-4">
            <Link href="/">Home</Link>
            <Link href="/projects">Progetti</Link>
            <Link href="/about">Chi sono</Link>
            <Link href="/contact">Contatti</Link>
            {/* Per ancore nella stessa pagina puoi lasciare <a href="#about">... </a> */}
          </nav>
        </header>

        <div className="pt-20">{children}</div>

        <footer className="text-center border-t mt-16 py-4">
          © {new Date().getFullYear()} Alessandro Marsala
        </footer>
      </body>
    </html>
  );
}


