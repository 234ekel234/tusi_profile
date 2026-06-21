"use client";

import { useRef, useState } from "react";

// The deployed FastAPI backend. Set NEXT_PUBLIC_CHAT_API_URL in .env.local
// (local dev) and in Vercel's project env vars (production).
const API_URL =
  process.env.NEXT_PUBLIC_CHAT_API_URL ?? "http://localhost:8000";

const SUGGESTIONS = [
  "What does this person do?",
  "What's their tech stack?",
  "Tell me about their projects.",
];

export function Chat() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [asked, setAsked] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  async function send(message: string) {
    const text = message.trim();
    if (!text || loading) return;

    setAnswer("");
    setAsked(true);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (res.status === 429) {
        setAnswer("You're sending messages a bit fast — give it a moment and try again.");
        return;
      }
      if (!res.ok || !res.body) {
        setAnswer(`Something went wrong (HTTP ${res.status}).`);
        return;
      }

      // Read the Server-Sent Events stream and render tokens as they arrive.
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split("\n\n");
        buffer = events.pop() ?? "";

        for (const event of events) {
          for (const line of event.split("\n")) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6);
            if (data === "[DONE]") return;
            setAnswer((prev) => prev + data.replace(/\\n/g, "\n"));
            outputRef.current?.scrollTo(0, outputRef.current.scrollHeight);
          }
        }
      }
    } catch (err) {
      setAnswer(`Network error: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:p-8">
      {/* Suggestion chips */}
      <div className="mb-5 flex flex-wrap gap-3">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => {
              setInput(s);
              send(s);
            }}
            disabled={loading}
            className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 py-2 text-sm font-medium text-foreground/70 transition hover:border-fuchsia-400/40 hover:text-foreground disabled:opacity-50"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input row */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send(input);
          }}
          placeholder="Ask me anything about my work…"
          className="flex-1 rounded-full border border-foreground/15 bg-background px-5 py-3 text-foreground outline-none transition focus:border-fuchsia-400/50"
        />
        <button
          onClick={() => send(input)}
          disabled={loading}
          className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-7 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Thinking…" : "Ask"}
        </button>
      </div>

      {/* Answer */}
      {asked && (
        <div
          ref={outputRef}
          className="mt-6 max-h-72 overflow-y-auto whitespace-pre-wrap rounded-2xl border border-foreground/10 bg-background/50 p-5 leading-relaxed text-foreground/80"
        >
          {answer || (loading ? "…" : "")}
        </div>
      )}
    </div>
  );
}
