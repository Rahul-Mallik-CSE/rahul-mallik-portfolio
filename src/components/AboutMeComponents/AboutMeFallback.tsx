/** @format */

const AboutMeFallback = () => {
  return (
    <section className="w-full px-4 lg:px-6 scroll-mt-24">
      <div className="mx-auto max-w-500 p-2 md:p-4 lg:p-6">
        <div className="mb-4 h-10 w-40 animate-pulse rounded-full bg-white/10 md:mb-6" />
        <div className="grid min-h-96 grid-cols-1 gap-4 overflow-hidden rounded-4xl bg-[#282a2a] p-4 md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:p-8">
          <div className="flex items-center justify-center">
            <div className="h-72 w-64 animate-pulse rounded-[60px] bg-white/10 md:h-80 md:w-72 xl:h-108 xl:w-82" />
          </div>
          <div className="flex items-center justify-center lg:col-span-2">
            <div className="w-full space-y-4 text-center md:text-left">
              <div className="h-7 w-3/4 animate-pulse rounded-full bg-white/10" />
              <div className="h-5 w-40 animate-pulse rounded-full bg-[#95EDFF]/20" />
              <div className="space-y-3 pt-2">
                <div className="h-4 w-full animate-pulse rounded-full bg-white/10" />
                <div className="h-4 w-11/12 animate-pulse rounded-full bg-white/10" />
                <div className="h-4 w-10/12 animate-pulse rounded-full bg-white/10" />
                <div className="h-4 w-9/12 animate-pulse rounded-full bg-white/10" />
              </div>
              <div className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">
                <div className="h-12 w-40 animate-pulse rounded-xl bg-white/10" />
                <div className="h-12 w-44 animate-pulse rounded-xl bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeFallback;