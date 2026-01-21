function App() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>🚀 Maaz React CI/CD Dashboard</h1>
        <p style={styles.subtitle}>
          Deployed using <b>Jenkins + Docker</b> on Windows
        </p>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <section style={styles.card}>
          <h2>📦 Project Overview</h2>
          <p>
            This React frontend is automatically built and deployed using a
            Jenkins pipeline. Any change pushed to GitHub triggers a new Docker
            image build and container deployment.
          </p>
        </section>

        <section style={styles.card}>
          <h2>⚙️ Tech Stack</h2>
          <ul style={styles.list}>
            <li>⚛️ React (Frontend)</li>
            <li>🐳 Docker & Docker Desktop</li>
            <li>🧩 Jenkins CI/CD</li>
            <li>🌐 Nginx (Production Server)</li>
          </ul>
        </section>

        <section style={styles.cardHighlight}>
          <h2>🔁 Live Deployment Status</h2>
          <p>
            <b>Pipeline Status:</b>{" "}
            <span style={{ color: "#16a34a", fontWeight: "bold" }}>
              SUCCESS
            </span>
          </p>
          <p>
            <b>App Version:</b> v1.0.0
          </p>
          <p>
            <b>Last Deployed:</b> Jenkins Automated Build
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>
          Built & Deployed by <b>Md Maaz</b> | DevOps & Cloud Enthusiast
        </p>
        <p style={{ fontSize: "12px", opacity: 0.7 }}>
          React • Docker • Jenkins • CI/CD
        </p>
      </footer>
    </div>
  );
}

/* ---------- Styles ---------- */

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "40px 20px",
    textAlign: "center",
    background:
      "linear-gradient(90deg, #2563eb, #1e40af)",
  },
  title: {
    margin: 0,
    fontSize: "36px",
  },
  subtitle: {
    marginTop: "10px",
    fontSize: "16px",
    opacity: 0.9,
  },
  main: {
    flex: 1,
    padding: "40px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#020617",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
  },
  cardHighlight: {
    backgroundColor: "#020617",
    padding: "20px",
    borderRadius: "12px",
    border: "2px solid #22c55e",
    boxShadow: "0 10px 25px rgba(34,197,94,0.2)",
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#020617",
    borderTop: "1px solid #1e293b",
  },
};

export default App;
