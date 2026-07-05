const DonationSection = () => {
  return (
    <section className="bg-[#0B6E4F] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="font-semibold uppercase tracking-[5px]">
          Support Our Mission
        </p>

        <h2 className="mt-5 text-5xl font-bold">
          Your Donation Can Change Lives
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-100">
          Every contribution helps us provide education, healthcare,
          emergency relief, youth development, and community support
          across Bangladesh.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <button className="rounded-full bg-white px-8 py-4 font-semibold text-[#0B6E4F] transition hover:scale-105">
            Donate Now
          </button>

          <button className="rounded-full border-2 border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-[#0B6E4F]">
            Become a Sponsor
          </button>

        </div>

      </div>
    </section>
  );
};

export default DonationSection;