"use client";

import { motion } from "framer-motion";

const rows = [
  {
    feature: "AI Demand Forecasting",
    inventra: "✓ African-trained",
    gecko: "Partial",
    cin7: "✗",
    sheets: "✗",
  },
  {
    feature: "AR Inventory Scanning",
    inventra: "✓ No hardware",
    gecko: "✗",
    cin7: "✗",
    sheets: "✗",
  },
  {
    feature: "VR Operations Hub",
    inventra: "✓ Multi-location",
    gecko: "✗",
    cin7: "✗",
    sheets: "✗",
  },
  {
    feature: "Offline-first",
    inventra: "✓ Full offline",
    gecko: "✗",
    cin7: "Partial",
    sheets: "✓",
  },
  {
    feature: "Multi-currency (African)",
    inventra: "✓ 20+ currencies",
    gecko: "Limited",
    cin7: "Limited",
    sheets: "Manual",
  },
  {
    feature: "Natural Language Queries",
    inventra: "✓ English + Pidgin",
    gecko: "✗",
    cin7: "✗",
    sheets: "✗",
  },
  {
    feature: "Built for African markets",
    inventra: "✓ Ground-up",
    gecko: "✗",
    cin7: "✗",
    sheets: "✗",
  },
];

function cellColor(val: string) {
  if (val.startsWith("✓")) return "#00e676";
  if (val === "✗") return "#ff5252";
  if (val === "Partial" || val === "Limited" || val === "Manual") return "#ffb300";
  return "var(--muted)";
}

export function Competitive() {
  return (
    <section id="competitive" style={{ padding: "120px 24px" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: "1120px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,229,255,0.08)",
              border: "1px solid rgba(0,229,255,0.2)",
              color: "var(--cyan)",
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "7px 16px",
              borderRadius: "2px",
            }}
          >
            ◎ Category Creation
          </div>
        </div>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Not Better Software.
          <br />A New Category.
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            marginBottom: "60px",
            fontWeight: 300,
          }}
        >
          We didn&apos;t improve what existed. We rebuilt the category from the ground
          up for African commerce.
        </p>

        <div className="comp-table-wrap">
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              overflow: "hidden",
            }}
          >
            <thead>
              <tr>
                {["Capability", "Inventra", "TradeGecko", "Cin7", "Spreadsheets"].map(
                  (h, i) => (
                    <th
                      key={h}
                      style={{
                        padding: "20px 24px",
                        background:
                          i === 1
                            ? "rgba(0,229,255,0.08)"
                            : "rgba(255,255,255,0.03)",
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        borderBottom: "1px solid var(--border)",
                        textAlign: i === 0 ? "left" : "center",
                        color: i === 1 ? "var(--cyan)" : "var(--text)",
                        borderLeft: i === 1 ? "1px solid rgba(0,229,255,0.18)" : "none",
                        borderRight: i === 1 ? "1px solid rgba(0,229,255,0.18)" : "none",
                      }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={row.feature}>
                  {[row.feature, row.inventra, row.gecko, row.cin7, row.sheets].map(
                    (val, ci) => (
                      <td
                        key={ci}
                        style={{
                          padding: "15px 24px",
                          borderBottom: ri < rows.length - 1 ? "1px solid var(--border)" : "none",
                          fontSize: ci === 1 ? "0.82rem" : "0.86rem",
                          textAlign: ci === 0 ? "left" : "center",
                          color:
                            ci === 0
                              ? "var(--text)"
                              : ci === 1
                              ? cellColor(val)
                              : cellColor(val) === "var(--muted)"
                              ? "var(--muted)"
                              : cellColor(val),
                          fontWeight: ci === 0 ? 500 : ci === 1 ? 600 : 400,
                          background:
                            ci === 1 ? "rgba(0,229,255,0.04)" : "transparent",
                          borderLeft:
                            ci === 1 ? "1px solid rgba(0,229,255,0.08)" : "none",
                          borderRight:
                            ci === 1 ? "1px solid rgba(0,229,255,0.08)" : "none",
                        }}
                      >
                        {val}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
