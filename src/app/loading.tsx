import { Sparkles, WandSparkles } from "lucide-react";

const LoadingPage = () => {
  return (
    <main className="min-h-dvh overflow-hidden bg-[#1b1b1b] text-white">
      <div className="relative flex min-h-dvh items-center justify-center px-4 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(149,237,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(149,237,255,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[#95EDFF]/10 blur-3xl" />
        <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center gap-3 rounded-full border border-[#95EDFF]/20 bg-[#95EDFF]/10 px-4 py-2 text-sm text-[#95EDFF]">
              <Sparkles className="h-4 w-4" />
              Portfolio is loading
            </div>

            <div className="relative mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-[#202525] shadow-[0_0_60px_rgba(149,237,255,0.18)]">
              <div className="absolute inset-2 rounded-full border border-[#95EDFF]/20" />
              <div className="absolute inset-4 animate-spin rounded-full border-2 border-transparent border-t-[#95EDFF] border-r-[#95EDFF]/50" />
              <WandSparkles className="h-9 w-9 text-[#95EDFF]" />
            </div>

            <p className="text-sm uppercase tracking-[0.35em] text-white/45">Welcome</p>
            <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
              Rahul Mallik&apos;s portfolio is getting ready.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 md:text-base">
              Bringing in the latest sections, animations, and contact tools so the experience feels smooth and polished.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
              <div className="h-12 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="h-full w-full animate-pulse rounded-lg bg-gradient-to-r from-white/10 via-[#95EDFF]/30 to-white/10" />
              </div>
              <div className="h-12 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="h-full w-2/3 animate-pulse rounded-lg bg-gradient-to-r from-white/10 via-white/25 to-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;
