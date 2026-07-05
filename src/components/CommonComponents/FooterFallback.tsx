/** @format */

const FooterFallback = () => {
  return (
    <footer className="w-full px-4 lg:px-6 pb-6 md:pb-8">
      <div className="mx-auto max-w-500 rounded-[2rem] border border-white/10 bg-[#202525] p-4 md:p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <div className="space-y-4">
            <div className="h-4 w-40 animate-pulse rounded-full bg-white/10" />
            <div className="h-8 w-full animate-pulse rounded-full bg-white/10" />
            <div className="h-4 w-11/12 animate-pulse rounded-full bg-white/10" />
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="h-12 w-36 animate-pulse rounded-xl bg-white/10" />
              <div className="h-12 w-28 animate-pulse rounded-xl bg-white/10" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-4 w-28 animate-pulse rounded-full bg-white/10" />
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {Array.from({ length: 7 }).map((_, index) => (
                <div key={index} className="h-12 animate-pulse rounded-xl bg-white/10" />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-4 w-28 animate-pulse rounded-full bg-white/10" />
            <div className="space-y-3">
              <div className="h-12 animate-pulse rounded-xl bg-white/10" />
              <div className="h-12 animate-pulse rounded-xl bg-white/10" />
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="h-11 w-24 animate-pulse rounded-xl bg-white/10" />
              <div className="h-11 w-24 animate-pulse rounded-xl bg-white/10" />
              <div className="h-11 w-28 animate-pulse rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-4">
          <div className="h-4 w-56 animate-pulse rounded-full bg-white/10" />
          <div className="h-4 w-72 animate-pulse rounded-full bg-white/10" />
        </div>
      </div>
    </footer>
  );
};

export default FooterFallback;