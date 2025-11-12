import Link from "next/link";

export const metadata = {
  title: "Alessandro Marsala",
  description: "Portfolio e progetti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <header style={{borderBottom:"1px solid #e5e7eb"}}>
          <nav style={{maxWidth:900, margin:"0 auto", padding:"12px", display:"flex", gap:16}}>
            <Link href="/">Home</Link>
            <Link href="/projects">Progetti</Link>
            <Link href="/about">Chi sono</Link>
            <Link href="/contact">Contatti</Link>
          </nav>
        </header>
        <main style={{maxWidth:900, margin:"0 auto", padding:"24px"}}>{children}</main>
        <footer style={{borderTop:"1px solid #e5e7eb", marginTop:48}}>
          <div style={{maxWidth:900, margin:"0 auto", padding:"12px"}}>© {new Date().getFullYear()} Alessandro Marsala</div>
        </footer>
      </body>
    </html>
  );
}

