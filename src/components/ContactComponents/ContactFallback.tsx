/** @format */

const ContactFallback = () => {
  return (
    <section className="w-full px-4 lg:px-6 scroll-mt-24">
      <div className="mx-auto max-w-500 p-2 md:p-4 lg:p-6">
        <div className="mb-4 h-10 w-36 animate-pulse rounded-full bg-white/10 md:mb-6" />
        <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#282a2a] p-4 md:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6">
              <div className="h-8 w-52 animate-pulse rounded-full bg-white/10" />
              <div className="grid gap-3 sm:grid-cols-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="h-24 animate-pulse rounded-2xl bg-white/10" />
                ))}
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6">
              <div className="h-6 w-44 animate-pulse rounded-full bg-white/10" />
              <div className="h-8 w-64 animate-pulse rounded-full bg-white/10" />
              <div className="h-4 w-full animate-pulse rounded-full bg-white/10" />
              <div className="h-4 w-11/12 animate-pulse rounded-full bg-white/10" />
              <div className="h-12 w-full animate-pulse rounded-2xl bg-white/10" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-12 animate-pulse rounded-2xl bg-white/10" />
                <div className="h-12 animate-pulse rounded-2xl bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFallback;