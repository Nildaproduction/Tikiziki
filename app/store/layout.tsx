export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#ff6b6b,#feca57,#48dbfb,#1dd1a1,#5f27cd)",
      backgroundSize: "400% 400%",
      animation: "gradient 12s ease infinite",
      color: "#fff",
    }}>
      <style>{`
        @keyframes gradient {
          0% {background-position:0% 50%}
          50% {background-position:100% 50%}
          100% {background-position:0% 50%}
        }
      `}</style>
      {children}
    </div>
  )
}
