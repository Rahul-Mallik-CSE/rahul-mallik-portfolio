/** @format */

const SkillsFallback = () => {
  return (
    <section className="w-full px-4 lg:px-6 scroll-mt-24">
      <div className="mx-auto max-w-500 p-2 md:p-4 lg:p-6">
        <div className="mb-4 h-10 w-36 animate-pulse rounded-full bg-white/10 md:mb-6" />
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-6">
            <div className="h-6 w-48 animate-pulse rounded-full bg-white/10" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-6">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="h-20 animate-pulse rounded-xl bg-white/10" />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="h-6 w-56 animate-pulse rounded-full bg-white/10" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-6">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="h-20 animate-pulse rounded-xl bg-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsFallback;