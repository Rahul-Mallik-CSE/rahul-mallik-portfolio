/** @format */

const ExperienceFallback = () => {
  return (
    <section className="w-full px-4 lg:px-6 scroll-mt-24">
      <div className="mx-auto max-w-500 p-2 md:p-4 lg:p-6">
        <div className="mb-4 h-10 w-48 animate-pulse rounded-full bg-white/10 md:mb-6" />
        <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#282a2a] p-4 md:p-6 lg:p-8">
          <div className="grid gap-6 xl:grid-cols-5 xl:gap-8">
            <div className="xl:col-span-2 space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-5">
              <div className="h-6 w-44 animate-pulse rounded-full bg-white/10" />
              <div className="h-4 w-full animate-pulse rounded-full bg-white/10" />
              <div className="h-4 w-11/12 animate-pulse rounded-full bg-white/10" />
              <div className="h-4 w-10/12 animate-pulse rounded-full bg-white/10" />
            </div>
            <div className="xl:col-span-3 space-y-4">
              <div className="h-40 animate-pulse rounded-[2rem] bg-white/10" />
              <div className="h-40 animate-pulse rounded-[2rem] bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceFallback;