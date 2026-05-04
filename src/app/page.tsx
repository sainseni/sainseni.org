export default function Home() {
  return (
    <main className="container">
      <img src="/sainseni.svg" alt="Sainseni" width={160} height={48} />

      <p className="text">
        Sainseni is now part of{" "}
        <strong className="highlight">NX Kreatif</strong>
      </p>

      <img src="/nx-kreatif.svg" alt="NX Kreatif" width={240} height={61} />

      <a href="https://nxkreatif.com" target="_blank" rel="noopener noreferrer" className="button">
        Visit NX Kreatif
      </a>
    </main>
  );
}

