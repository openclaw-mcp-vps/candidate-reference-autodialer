export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For HR &amp; Recruiting Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automate Reference Checks with{' '}
          <span className="text-[#58a6ff]">AI Phone Calls</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          RefDial calls your candidate&apos;s references automatically, asks standardized questions, transcribes every response, and delivers a clean summary report — in minutes, not days.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $19 / mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#8b949e]">
          <li>&#10003; AI voice calls via Vapi</li>
          <li>&#10003; Auto transcription</li>
          <li>&#10003; Instant PDF reports</li>
          <li>&#10003; Webhook-driven &amp; async</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-sm text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">&#10003;</span>Up to 50 reference calls / mo</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">&#10003;</span>Standardized question templates</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">&#10003;</span>Full call transcripts</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">&#10003;</span>AI-generated summary reports</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">&#10003;</span>Webhook &amp; API access</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">&#10003;</span>Email support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the AI calling work?</h3>
            <p className="text-sm text-[#8b949e]">RefDial uses Vapi&apos;s conversational AI to place real phone calls to references. The AI introduces itself, asks your configured questions naturally, handles follow-ups, and records the full conversation for transcription.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">When do I get the report?</h3>
            <p className="text-sm text-[#8b949e]">Reports are generated automatically once the call ends. Our webhook-driven pipeline transcribes the audio and runs AI analysis within minutes. You&apos;ll receive an email with the full summary and transcript.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is this compliant with employment laws?</h3>
            <p className="text-sm text-[#8b949e]">RefDial discloses at the start of every call that it is an automated AI system conducting a reference check. You are responsible for ensuring your use complies with local recording consent laws. We recommend consulting your legal team.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} RefDial. All rights reserved.
      </footer>
    </main>
  )
}
