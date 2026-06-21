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
    <div className="panel rivets overflow-hidden">
      {/* Console title bar */}
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rust" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-lime" />
        <span className="ml-2 font-mono text-xs text-muted">
          comms-console · printing-pod.exe
        </span>
        <span className="pip-pulse ml-auto font-mono text-[0.65rem] uppercase tracking-wider text-teal">
          ● online
        </span>
      </div>

      <div className="p-5 sm:p-6">
        {/* Suggestion pings */}
        <div className="mb-4 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => {
                setInput(s);
                send(s);
              }}
              disabled={loading}
              className="rounded-md border border-line bg-surface-2 px-3 py-1.5 font-mono text-xs text-foreground/75 transition hover:border-teal hover:text-teal disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input row */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-line bg-background px-4 focus-within:border-teal">
            <span className="font-mono text-teal">&gt;</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send(input);
              }}
              placeholder="query the colony archive…"
              className="flex-1 bg-transparent py-3 font-mono text-sm text-foreground outline-none placeholder:text-muted"
            />
          </div>
          <button
            onClick={() => send(input)}
            disabled={loading}
            className="rounded-lg border border-teal bg-teal/15 px-6 py-3 font-display font-bold text-teal transition hover:bg-teal/25 disabled:opacity-50"
          >
            {loading ? "Transmitting…" : "Send ▸"}
          </button>
        </div>

        {/* Answer readout */}
        {asked && (
          <div
            ref={outputRef}
            className="mt-5 max-h-72 overflow-y-auto whitespace-pre-wrap rounded-lg border border-line bg-background p-5 font-mono text-sm leading-relaxed text-foreground/85"
          >
            {answer ? (
              answer
            ) : loading ? (
              <span className="blink">▮</span>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}
