"use client";

import { motion } from "framer-motion";
import { DecryptedText } from "@/components/decrypted-text";

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
  if (val === "Partial" || val === "Limited" || val === "Manual")
    return "#C49A2A";
  return "var(--muted)";
}

export function Competitive() {
  return (
    <section
      id="competitive"
      style={{ padding: "80px 24px", background: "var(--bg2)", overflow: "hidden" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "end",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                <DecryptedText text="Not Better Software." animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
                <br />
                <DecryptedText text="A New Category." animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <p
                style={{
                  color: "var(--muted)",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  fontSize: "1rem",
                }}
              >
                We didn&apos;t improve what existed. We rebuilt the category
                from the ground up for African commerce.
              </p>
            </div>
          </div>
        </div>

        {/* Table wrapped in styled card */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          }}
        >
          {/* Top gradient accent */}
          <div
            style={{
              height: "3px",
              background:
                "linear-gradient(90deg, var(--cyan), var(--violet), var(--amber))",
            }}
          />

          <div className="comp-table-wrap" style={{ border: "none", borderRadius: 0 }}>
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
                  {[
                    "Capability",
                    "Inventra",
                    "TradeGecko",
                    "Cin7",
                    "Spreadsheets",
                  ].map((h, i) => (
                    <th
                      key={h}
                      style={{
                        padding: "20px 24px",
                        background:
                          i === 1
                            ? "rgba(248,124,43,0.07)"
                            : "transparent",
                        fontFamily:
                          "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.86rem",
                        borderBottom: "1px solid var(--border)",
                        textAlign: i === 0 ? "left" : "center",
                        color:
                          i === 1 ? "var(--cyan)" : "var(--text)",
                        borderLeft:
                          i === 1
                            ? "1px solid rgba(248,124,43,0.15)"
                            : "none",
                        borderRight:
                          i === 1
                            ? "1px solid rgba(248,124,43,0.15)"
                            : "none",
                      }}
                    >
                      {i === 1 ? (
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                          {h}
                          <span
                            style={{
                              background: "rgba(248,124,43,0.15)",
                              color: "var(--cyan)",
                              fontFamily:
                                "var(--font-space-mono), Space Mono, monospace",
                              fontSize: "0.5rem",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              letterSpacing: "0.1em",
                            }}
                          >
                            YOU
                          </span>
                        </span>
                      ) : (
                        h
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr
                    key={row.feature}
                    style={{
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--surface2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                    }}
                  >
                    {[
                      row.feature,
                      row.inventra,
                      row.gecko,
                      row.cin7,
                      row.sheets,
                    ].map((val, ci) => (
                      <td
                        key={ci}
                        style={{
                          padding: "14px 24px",
                          borderBottom:
                            ri < rows.length - 1
                              ? "1px solid var(--border)"
                              : "none",
                          fontSize: "0.86rem",
                          textAlign: ci === 0 ? "left" : "center",
                          color:
                            ci === 0
                              ? "var(--text)"
                              : ci === 1
                              ? cellColor(val)
                              : cellColor(val),
                          fontWeight: ci === 0 ? 500 : ci === 1 ? 600 : 400,
                          background:
                            ci === 1
                              ? "rgba(248,124,43,0.03)"
                              : "transparent",
                          borderLeft:
                            ci === 1
                              ? "1px solid rgba(248,124,43,0.07)"
                              : "none",
                          borderRight:
                            ci === 1
                              ? "1px solid rgba(248,124,43,0.07)"
                              : "none",
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
