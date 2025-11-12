export const metadata = { title: "Progetti | Alessandro" };

export default function ProjectsPage() {
  const projects = [
    { title: "Progetto A", summary: "Descrizione breve", link: "#" },
    { title: "Progetto B", summary: "Descrizione breve", link: "#" },
  ];
  return (
    <>
      <h1 style={{fontSize:28, fontWeight:700}}>Progetti</h1>
      <ul style={{display:"grid", gap:12, marginTop:16}}>
        {projects.map((p, i) => (
          <li key={i} style={{border:"1px solid #e5e7eb", borderRadius:12, padding:16}}>
            <h2 style={{fontSize:20, fontWeight:600}}>{p.title}</h2>
            <p style={{opacity:.9}}>{p.summary}</p>
            <a href={p.link} style={{textDecoration:"underline"}}>Dettagli</a>
          </li>
        ))}
      </ul>
    </>
  );
}
