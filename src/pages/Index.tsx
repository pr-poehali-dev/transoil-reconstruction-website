const Index = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a2e00 0%, #2d4a00 40%, #4a7a00 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Декоративные полосы */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(210,170,0,0.04) 60px, rgba(210,170,0,0.04) 61px)",
        pointerEvents: "none",
      }} />

      {/* Желтая рамка */}
      <div style={{
        position: "absolute",
        inset: "24px",
        border: "2px solid rgba(210,170,0,0.25)",
        borderRadius: "4px",
        pointerEvents: "none",
      }} />

      {/* Угловые акценты */}
      {[
        { top: 32, left: 32 },
        { top: 32, right: 32 },
        { bottom: 32, left: 32 },
        { bottom: 32, right: 32 },
      ].map((pos, i) => (
        <div key={i} style={{
          position: "absolute",
          ...pos,
          width: 20,
          height: 20,
          borderColor: "#d2aa00",
          borderStyle: "solid",
          borderWidth: 0,
          ...(pos.top !== undefined && pos.left !== undefined ? { borderTopWidth: 3, borderLeftWidth: 3 } : {}),
          ...(pos.top !== undefined && pos.right !== undefined ? { borderTopWidth: 3, borderRightWidth: 3 } : {}),
          ...(pos.bottom !== undefined && pos.left !== undefined ? { borderBottomWidth: 3, borderLeftWidth: 3 } : {}),
          ...(pos.bottom !== undefined && pos.right !== undefined ? { borderBottomWidth: 3, borderRightWidth: 3 } : {}),
        }} />
      ))}

      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Название компании */}
        <p style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "clamp(12px, 2vw, 18px)",
          letterSpacing: "0.5em",
          color: "rgba(210,170,0,0.7)",
          marginBottom: "28px",
          textTransform: "uppercase",
        }}>
          ООО «ТРАНСОЙЛ»
        </p>

        {/* Разделитель */}
        <div style={{
          width: "80px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #d2aa00, transparent)",
          margin: "0 auto 36px",
        }} />

        {/* Главная надпись */}
        <h1 style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "clamp(32px, 8vw, 88px)",
          fontWeight: 700,
          color: "#f0d000",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          lineHeight: 1.1,
          textShadow: "0 0 60px rgba(210,170,0,0.3), 0 2px 0 rgba(0,0,0,0.4)",
          margin: 0,
          animation: "fadeIn 1.2s ease forwards",
        }}>
          НА РЕКОНСТРУКЦИИ
        </h1>

        {/* Разделитель */}
        <div style={{
          width: "80px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #d2aa00, transparent)",
          margin: "36px auto 0",
        }} />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Index;
