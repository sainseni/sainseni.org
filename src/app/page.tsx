export default function Home() {
  return (
    <main className="container">
      <div className="legacy">
        <img src="/sainseni.svg" alt="Sainseni" width={140} height={42} />
      </div>

      <div className="divider" />

      <p className="transition-text">is now part of</p>

      <div className="brand">
        <img src="/nx-kreatif.svg" alt="NX Kreatif" width={320} height={81} />
      </div>

      <a
        href="https://nxkreatif.com"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Visit NX Kreatif
      </a>
    </main>
  );
}

