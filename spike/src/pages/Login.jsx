import React, { useState } from "react";
import {
  PencilLine,
  MessageSquare,
  Clock,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Email:", email);
  };

  return (
    <main
      className={`min-h-screen w-full transition-colors duration-300 lg:grid lg:grid-cols-2 ${
        darkMode ? "bg-[#0B1117]" : "bg-[#F7F8FA]"
      }`}
    >
      {/* LEFT SECTION - BRANDING (DESKTOP ONLY) */}
      <section className="hidden min-h-screen flex-col justify-between bg-[#0F766E] px-7 py-8 text-white lg:flex lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white">
            <img
              src="/Teal Cyberburst Eye Emblem.png"
              alt="Spike logo"
              className="h-8 w-8 object-contain"
            />
          </div>

          <span className="text-2xl font-bold tracking-tight">Spike</span>
        </div>

        {/* Hero Content */}
        <div className="my-16 max-w-xl lg:my-0">
          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
            Ask anything.
            <br />
            Get a clear answer.
          </h1>

          <p className="mt-7 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
            A simple assistant for writing, learning and getting things done.
          </p>

          {/* Features */}
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#094E4B]">
                <PencilLine size={27} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Write and edit</h3>
                <p className="text-sm text-white/80">
                  Emails, notes, captions and more.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#094E4B]">
                <MessageSquare size={27} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Learn faster</h3>
                <p className="text-sm text-white/80">
                  Plain-language explanations on any topic.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#094E4B]">
                <Clock size={27} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Think it through</h3>
                <p className="text-sm text-white/80">
                  Plan, compare options and decide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-white/90">
          Spike can make mistakes. Check important details.
        </p>
      </section>

      {/* RIGHT SECTION - LOGIN */}
      <section
        className={`relative flex min-h-screen w-full items-center justify-center px-6 py-12 transition-colors duration-300 sm:px-10 lg:px-12 ${
          darkMode ? "bg-[#0B1117]" : "bg-[#F7F8FA]"
        }`}
      >
        {/* DARK MODE TOGGLE */}
        <button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          className={`absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 ${
            darkMode
              ? "border-[#344054] bg-[#111827] text-yellow-400 hover:bg-[#1F2937]"
              : "border-[#E4E7EC] bg-white text-[#475467] hover:bg-gray-100"
          }`}
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <div className="w-full max-w-[397px]">
          {/* Mobile Logo */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/Teal Cyberburst Eye Emblem.png"
                alt="Spike logo"
                className="h-full w-full object-contain"
              />
            </div>

            <span className="text-2xl font-bold tracking-tight text-[#0F766E]">
              Spike
            </span>
          </div>

          {/* Heading */}
          <div className="mb-7">
            <h2
              className={`text-2xl font-bold tracking-tight transition-colors sm:text-[26px] ${
                darkMode ? "text-[#F8FAFC]" : "text-[#101828]"
              }`}
            >
              Welcome to Spike
            </h2>

            <p
              className={`mt-1 text-base transition-colors ${
                darkMode ? "text-[#98A2B3]" : "text-[#667085]"
              }`}
            >
              Sign in or create account to start chatting.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className={`mb-2 block text-sm font-medium ${
                darkMode ? "text-[#F8FAFC]" : "text-[#101828]"
              }`}
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`h-11 w-full rounded-xl border bg-transparent px-3 text-sm outline-none transition placeholder:text-[#98A2B3] focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/15 ${
                darkMode
                  ? "border-[#344054] text-white"
                  : "border-[#D0D5DD] text-[#101828]"
              }`}
            />

            <button
              type="submit"
              className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0F766E] text-sm font-medium text-white transition hover:bg-[#115E59] active:scale-[0.99]"
            >
              Continue with email
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div
              className={`h-px flex-1 ${
                darkMode ? "bg-[#344054]" : "bg-[#E4E7EC]"
              }`}
            />

            <span
              className={`text-sm ${
                darkMode ? "text-[#98A2B3]" : "text-[#667085]"
              }`}
            >
              Or
            </span>

            <div
              className={`h-px flex-1 ${
                darkMode ? "bg-[#344054]" : "bg-[#E4E7EC]"
              }`}
            />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className={`flex h-11 w-full items-center justify-center gap-3 rounded-xl border bg-transparent text-sm font-medium transition ${
              darkMode
                ? "border-[#344054] text-white hover:bg-[#1F2937]"
                : "border-[#D0D5DD] text-[#101828] hover:bg-white"
            }`}
          >
            <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11c-.5 2.5-1.9 4.6-4.1 6v5h6.6c3.9-3.6 6.1-8.8 6.1-14.7Z"
              />
              <path
                fill="#34A853"
                d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.1C9.2 39.5 16 44 24 44Z"
              />
              <path
                fill="#FBBC05"
                d="M12.6 27.8a12 12 0 0 1 0-7.6v-5.1H5.8a20 20 0 0 0 0 17.8l6.8-5.1Z"
              />
              <path
                fill="#EA4335"
                d="M24 11.8c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 5.8 29.5 4 24 4 16 4 9.2 8.5 5.8 15.1l6.8 5.1c1.6-4.8 6.1-8.4 11.4-8.4Z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Terms */}
          <p
            className={`mt-5 text-xs leading-relaxed ${
              darkMode ? "text-[#98A2B3]" : "text-[#667085]"
            }`}
          >
            By continuing you agree to the{" "}
            <a
              href="/terms"
              className={`underline underline-offset-2 hover:text-[#0F766E] ${
                darkMode ? "text-white" : "text-[#101828]"
              }`}
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className={`underline underline-offset-2 hover:text-[#0F766E] ${
                darkMode ? "text-white" : "text-[#101828]"
              }`}
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
