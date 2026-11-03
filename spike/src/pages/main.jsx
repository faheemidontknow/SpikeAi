import { useState } from "react";
import {
  ArrowUp,
  CalendarDays,
  Clock3,
  Code2,
  Mail,
  Menu,
  MessageSquare,
  Moon,
  Paperclip,
  Plus,
  Settings2,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const initialChats = [
  "Plan my week",
  "Explain compound interest",
  "Email to landlord",
  "Python list vs tuple",
  "Gift ideas for mum",
];

const suggestions = [
  {
    title: "Explain a topic",
    description: "in simple terms",
    icon: MessageSquare,
    prompt: "Explain a topic in simple terms",
  },
  {
    title: "Draft an email",
    description: "polite and short",
    icon: Mail,
    prompt: "Help me draft a polite, short email",
  },
  {
    title: "Plan my week",
    description: "around my priorities",
    icon: CalendarDays,
    prompt: "Help me plan my week around my priorities",
  },
  {
    title: "Fix some code",
    description: "find the bug",
    icon: Code2,
    prompt: "Help me find a bug in my code",
  },
];

export default function Main() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [chats, setChats] = useState(initialChats);
  const [activeChat, setActiveChat] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [showAllChats, setShowAllChats] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const startNewChat = () => {
    setActiveChat("");
    setSentMessage("");
    setPrompt("");
    setSidebarOpen(false);
  };

  const selectChat = (chat) => {
    setActiveChat(chat);
    setSentMessage("");
    setPrompt("");
    setSidebarOpen(false);
  };

  const submitPrompt = (event) => {
    event.preventDefault();
    const message = prompt.trim();
    if (!message) return;

    setActiveChat(message);
    setSentMessage(message);
    setChats((currentChats) => [
      message.length > 32 ? `${message.slice(0, 32)}...` : message,
      ...currentChats.filter((chat) => chat !== message),
    ]);
    setPrompt("");
  };

  const pageColors = darkMode
    ? "bg-[#0B1117] text-[#F8FAFC]"
    : "bg-[#F7F8FA] text-[#101828]";
  const subtleText = darkMode ? "text-[#98A2B3]" : "text-[#667085]";
  const borderColor = darkMode ? "border-[#263341]" : "border-[#EAECF0]";
  const sidebarColors = darkMode
    ? "border-[#263341] bg-[#111820]"
    : "border-[#EAECF0] bg-white";

  return (
    <div className={`flex h-dvh min-h-[520px] w-full overflow-hidden ${pageColors}`}>
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[260px] shrink-0 flex-col border-r px-[15px] py-[19px] transition-transform duration-200 lg:static lg:translate-x-0 ${sidebarColors} ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-[15px] flex h-[32px] items-center gap-[10px] px-[3px]">
          <div className="flex h-[31px] w-[31px] items-center justify-center overflow-hidden rounded-[10px] bg-[#0F766E]">
            <img
              src="/Teal Cyberburst Eye Emblem.png"
              alt=""
              className="h-[25px] w-[25px] object-contain"
            />
          </div>
          <span className="text-[14px] font-bold tracking-[-0.03em]">Sage</span>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation"
            className={`ml-auto rounded-md p-1 ${subtleText} hover:bg-black/5 lg:hidden`}
          >
            <X size={18} />
          </button>
        </div>

        <button
          type="button"
          onClick={startNewChat}
          className="flex h-[43px] w-full items-center gap-[10px] rounded-[12px] bg-[#0F766E] px-[13px] text-[12px] font-semibold text-white transition-colors hover:bg-[#115E59]"
        >
          <Plus size={17} strokeWidth={1.7} />
          New chat
        </button>

        <div className="mt-[23px] px-[7px] text-[9px] font-bold tracking-[0.01em] text-[#667085]">
          RECENT
        </div>
        <nav aria-label="Recent chats" className="mt-[15px] space-y-[3px]">
          {(showAllChats ? chats : chats.slice(0, 8)).map((chat, index) => (
            <button
              type="button"
              key={`${chat}-${index}`}
              onClick={() => selectChat(chat)}
              className={`flex min-h-[42px] w-full items-center rounded-[9px] px-[11px] text-left text-[10px] transition-colors ${
                activeChat === chat
                  ? darkMode
                    ? "bg-[#1B2A31] text-white"
                    : "bg-[#F2F4F7] text-[#101828]"
                  : `${subtleText} hover:bg-black/5`
              }`}
            >
              <span className="truncate">{chat}</span>
            </button>
          ))}
        </nav>

        <div className={`mt-auto border-t pt-[15px] ${borderColor}`}>
          <button
            type="button"
            onClick={() => setShowAllChats((value) => !value)}
            className={`flex h-[42px] w-full items-center gap-[11px] rounded-lg px-[11px] text-[10px] transition-colors hover:bg-black/5 ${subtleText}`}
          >
            <Clock3 size={16} strokeWidth={1.5} />
            {showAllChats ? "Recent chats" : "All chats"}
          </button>
          <button
            type="button"
            onClick={() => setSettingsOpen(true)}
            className={`flex h-[42px] w-full items-center gap-[11px] rounded-lg px-[11px] text-[10px] transition-colors hover:bg-black/5 ${subtleText}`}
          >
            <Settings2 size={16} strokeWidth={1.5} />
            Settings
          </button>
        </div>
      </aside>

      <main className="relative flex min-w-0 flex-1 flex-col">
        <header className="absolute inset-x-0 top-0 z-20 flex h-[58px] items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
            className={`flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-black/5 lg:hidden ${subtleText}`}
          >
            <Menu size={19} />
          </button>
          <span className="text-sm font-semibold lg:hidden">Sage</span>
          <button
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`ml-auto flex h-9 w-9 items-center justify-center rounded-full border transition ${
              darkMode
                ? "border-[#344054] bg-[#111820] text-yellow-400 hover:bg-[#1F2937]"
                : "border-[#EAECF0] bg-white text-[#475467] hover:bg-gray-100"
            }`}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </header>

        <section className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-5 pb-4 pt-[66px] sm:px-8">
          <div className="w-full max-w-[632px]">
            {sentMessage ? (
              <div className="mx-auto w-full max-w-[620px] self-start">
                <div
                  className={`ml-auto max-w-[85%] rounded-2xl rounded-br-md px-5 py-3 text-sm leading-6 ${
                    darkMode ? "bg-[#1B2A31]" : "bg-white shadow-sm"
                  }`}
                >
                  {sentMessage}
                </div>
                <p className={`mt-5 text-center text-xs ${subtleText}`}>
                  Your message is ready for Spike.
                </p>
              </div>
            ) : activeChat ? (
              <div className="mx-auto w-full max-w-[620px] self-start">
                <h1 className="text-xl font-semibold tracking-tight">{activeChat}</h1>
                <p className={`mt-3 text-sm ${subtleText}`}>
                  Continue this chat by sending a message below.
                </p>
              </div>
            ) : (
              <div className="w-full">
                <div className="mx-auto mb-[31px] flex h-[61px] w-[61px] items-center justify-center rounded-full bg-[#0F766E] text-white">
                  <Sparkles size={25} strokeWidth={1.7} />
                </div>
                <h1 className="mb-[31px] text-center text-[24px] font-bold leading-tight tracking-[-0.04em] sm:text-[27px]">
                  How can I help today?
                </h1>
                <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
                  {suggestions.map(({ title, description, icon: Icon, prompt: suggestion }) => (
                    <button
                      type="button"
                      key={title}
                      onClick={() => setPrompt(suggestion)}
                      className={`flex min-h-[109px] flex-col items-start rounded-[16px] border px-[17px] py-[17px] text-left transition hover:-translate-y-0.5 hover:border-[#0F766E]/40 hover:shadow-sm ${
                        darkMode
                          ? "border-[#263341] bg-[#111820] hover:bg-[#151F26]"
                          : "border-[#EAECF0] bg-white hover:bg-[#FCFDFD]"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.55} className="mb-[17px] text-[#0F9488]" />
                      <span className="text-[11px] font-semibold">{title}</span>
                      <span className={`mt-[5px] text-[10px] ${subtleText}`}>
                        {description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <footer className="shrink-0 px-4 pb-[17px] sm:px-8">
          <form
            onSubmit={submitPrompt}
            className={`mx-auto flex min-h-[62px] max-w-[670px] items-center gap-2 rounded-full border px-[14px] py-[7px] transition focus-within:border-[#0F766E]/50 ${
              darkMode
                ? "border-[#344054] bg-[#111820]"
                : "border-[#DDE2E8] bg-white"
            }`}
          >
            <label
              className={`flex h-9 w-7 shrink-0 cursor-pointer items-center justify-center ${subtleText}`}
              aria-label="Attach a file"
            >
              <Paperclip size={18} strokeWidth={1.6} />
              <input
                type="file"
                className="sr-only"
                aria-label="Attach a file"
              />
            </label>
            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  event.currentTarget.form?.requestSubmit();
                }
              }}
              rows={1}
              aria-label="Message Sage"
              placeholder="Message Sage..."
              className={`max-h-28 min-h-9 flex-1 resize-none bg-transparent py-[10px] text-[12px] outline-none placeholder:text-[#98A2B3] ${
                darkMode ? "text-white" : "text-[#101828]"
              }`}
            />
            <button
              type="submit"
              disabled={!prompt.trim()}
              aria-label="Send message"
              className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full transition ${
                prompt.trim()
                  ? "bg-[#0F766E] text-white hover:bg-[#115E59]"
                  : darkMode
                    ? "bg-[#344054] text-[#98A2B3]"
                    : "bg-[#D0D5DD] text-white"
              }`}
            >
              <ArrowUp size={19} strokeWidth={1.7} />
            </button>
          </form>
          <p className={`mt-[12px] text-center text-[9px] ${subtleText}`}>
            Sage can make mistakes. Check important details.
          </p>
        </footer>
      </main>

      {settingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="settings-title"
            className={`w-full max-w-[400px] rounded-2xl border p-5 shadow-xl ${
              darkMode
                ? "border-[#263341] bg-[#111820]"
                : "border-[#EAECF0] bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 id="settings-title" className="text-base font-semibold">
                Settings
              </h2>
              <button
                type="button"
                aria-label="Close settings"
                onClick={() => setSettingsOpen(false)}
                className={`rounded-full p-2 transition hover:bg-black/5 ${subtleText}`}
              >
                <X size={18} />
              </button>
            </div>
            <div className={`mt-5 flex items-center justify-between border-t pt-4 ${borderColor}`}>
              <div>
                <p className="text-sm font-medium">Dark mode</p>
                <p className={`mt-1 text-xs ${subtleText}`}>
                  Choose the appearance for Sage.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={darkMode}
                aria-label="Dark mode"
                onClick={() => setDarkMode((value) => !value)}
                className={`flex h-6 w-11 items-center rounded-full p-1 transition-colors ${
                  darkMode ? "bg-[#0F766E]" : "bg-[#D0D5DD]"
                }`}
              >
                <span
                  className={`h-4 w-4 rounded-full bg-white transition-transform ${
                    darkMode ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}