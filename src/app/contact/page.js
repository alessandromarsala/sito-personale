import Link from "next/link";

export const metadata = { title: "Contatti | Alessandro" };

export default function ContactPage() {
  return (
    <>
      <h1 style={{fontSize:28, fontWeight:700}}>Contatti</h1>
      <p>Email: <Link href="mailto:alessandro@alessandromarsala.com">alessandro@alessandromarsala.com</Link></p>
      <p>LinkedIn/GitHub (aggiungili quando vuoi).</p>
    </>
  );
}
