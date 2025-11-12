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
            <a href="/">Home</a>
            <a href="/projects">Progetti</a>
            <a href="/about">Chi sono</a>
            <a href="/contact">Contatti</a>
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

