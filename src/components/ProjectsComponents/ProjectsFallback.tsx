/** @format */

const ProjectsFallback = () => {
  return (
    <section className="w-full px-4 lg:px-6 scroll-mt-24">
      <div className="mx-auto max-w-500 p-2 md:p-4 lg:p-6">
        <div className="mb-4 h-10 w-44 animate-pulse rounded-full bg-white/10 md:mb-6" />
        <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#282a2a] p-4 md:p-6 lg:p-8">
          <div className="space-y-6">
            <div className="grid gap-6 xl:grid-cols-2">
              <div className="h-80 animate-pulse rounded-[2rem] bg-white/10" />
              <div className="h-80 animate-pulse rounded-[2rem] bg-white/10" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="h-72 animate-pulse rounded-[2rem] bg-white/10" />
              <div className="h-72 animate-pulse rounded-[2rem] bg-white/10" />
              <div className="h-72 animate-pulse rounded-[2rem] bg-white/10" />
            </div>
            <div className="flex justify-center pt-2 md:pt-4">
              <div className="h-12 w-40 animate-pulse rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFallback;