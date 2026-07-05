/** @format */

const EducationFallback = () => {
  return (
    <section className="w-full scroll-mt-24 px-4 lg:px-6">
      <div className="mx-auto max-w-500 p-2 md:p-4 lg:p-6">
        <div className="mb-4 h-10 w-40 animate-pulse rounded-full bg-white/10 md:mb-6" />
        <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#282a2a] p-4 md:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div className="space-y-5">
              <div className="h-80 animate-pulse rounded-[2rem] bg-white/10" />
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="h-24 animate-pulse rounded-2xl bg-white/10" />
                <div className="h-24 animate-pulse rounded-2xl bg-white/10" />
                <div className="h-24 animate-pulse rounded-2xl bg-white/10" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-28 animate-pulse rounded-[2rem] bg-white/10" />
              <div className="h-28 animate-pulse rounded-[2rem] bg-white/10" />
              <div className="h-28 animate-pulse rounded-[2rem] bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationFallback;