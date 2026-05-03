export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        gap: "1.5rem",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <img src="/sainseni.svg" alt="Sainseni" width={160} height={48} />

      <p
        style={{
          fontSize: "1.25rem",
          color: "#444",
          textAlign: "center",
          margin: 0,
        }}
      >
        Sainseni is now part of{" "}
        <strong style={{ color: "#111" }}>NX Kreatif</strong>
      </p>

      <img src="/nx-kreatif.svg" alt="NX Kreatif" width={240} height={61} />
    </main>
  );
}

