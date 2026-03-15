import Link from "next/link"

export default function StorePage() {
  return (
    <main style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      padding: "20px",
    }}>
      <div style={{
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(10px)",
        padding: "60px",
        borderRadius: "20px",
        maxWidth: "700px",
      }}>
        <h1 style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "20px", letterSpacing: "4px" }}>
          TIKI ZIKI STORE
        </h1>
        <p style={{ fontSize: "28px", marginBottom: "15px" }}>
          Merchandise Coming Soon
        </p>
        <p style={{ opacity: 0.85, marginBottom: "35px" }}>
          Official apparel, vinyl and exclusive drops will be available here soon.
        </p>
        <Link href="/" style={{
          padding: "14px 28px",
          background: "#ffffff",
          color: "#000",
          borderRadius: "30px",
          fontWeight: "bold",
          textDecoration: "none",
        }}>
          Back to Website
        </Link>
      </div>
    </main>
  )
}
