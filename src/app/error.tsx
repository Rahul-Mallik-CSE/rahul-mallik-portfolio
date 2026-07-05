"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-dvh overflow-hidden bg-[#1b1b1b] text-white">
      <div className="relative flex min-h-dvh items-center justify-center px-4 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(149,237,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />
        <div className="absolute right-1/4 top-20 h-72 w-72 rounded-full bg-[#95EDFF]/10 blur-3xl" />
        <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#202525]/90 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center gap-3 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
              <AlertTriangle className="h-4 w-4" />
              Something interrupted the experience
            </div>

            <div className="relative mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(149,237,255,0.14)]">
              <div className="absolute inset-3 rounded-full border border-amber-300/20" />
              <Sparkles className="h-10 w-10 text-[#95EDFF]" />
            </div>

            <p className="text-sm uppercase tracking-[0.35em] text-white/45">Error</p>
            <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
              The page ran into a problem.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 md:text-base">
              The portfolio can recover. Try reloading this section, or head back home and continue browsing the rest of the site.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                type="button"
                onClick={reset}
                className="h-12 rounded-xl border border-[#95EDFF]/40 bg-[#95EDFF] px-5 text-sm font-semibold text-black transition-colors hover:bg-[#7de5fa]"
              >
                <RotateCcw className="h-4 w-4" />
                Try again
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-white/15 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10"
              >
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
