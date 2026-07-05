/** @format */

const HeroFallback = () => {
  return (
    <section className="w-full mt-4 px-4 lg:px-6 md:mt-6 scroll-mt-24">
      <div className="mx-auto max-w-500 p-2 md:p-4 lg:p-6">
        <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-4xl border border-white/10 bg-[#282a2a] p-4 md:grid-cols-3 md:p-6 lg:p-8">
          <div className="order-2 space-y-4 md:order-1 md:col-span-2">
            <div className="h-4 w-36 animate-pulse rounded-full bg-white/10" />
            <div className="h-12 w-full animate-pulse rounded-2xl bg-gradient-to-r from-white/10 via-[#95EDFF]/20 to-white/10" />
            <div className="h-8 w-56 animate-pulse rounded-full bg-white/10" />
            <div className="space-y-3">
              <div className="h-4 w-full animate-pulse rounded-full bg-white/10" />
              <div className="h-4 w-11/12 animate-pulse rounded-full bg-white/10" />
              <div className="h-4 w-10/12 animate-pulse rounded-full bg-white/10" />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="h-12 w-36 animate-pulse rounded-xl bg-white/10" />
              <div className="h-12 w-28 animate-pulse rounded-xl bg-white/10" />
              <div className="h-12 w-20 animate-pulse rounded-xl bg-white/10" />
            </div>
          </div>
          <div className="order-1 flex items-center justify-center md:order-2">
            <div className="h-44 w-44 animate-pulse rounded-full border border-white/10 bg-white/10 md:h-56 md:w-56" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFallback;