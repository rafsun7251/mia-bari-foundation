const events = [
  {
    title: "Heatwave Health Awareness Campaign",
    date: "3 July 2026",
    location: "Bhola",
  },
  {
    title: "Mia Bari Football Tournament 2026",
    date: "16 July 2026",
    location: "Jangalia School Ground, Bhola",
  },
  {
    title: "Tree Plantation Program",
    date: "03 August 2026",
    location: "Bhola",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[5px] text-[#0B6E4F]">
            Upcoming Programs
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-800">
            Join Our Events
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Participate in our community programs and make a difference.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 inline-block rounded-full bg-[#0B6E4F] px-4 py-2 text-sm font-semibold text-white">
                {event.date}
              </div>

              <h3 className="text-2xl font-bold text-gray-800">
                {event.title}
              </h3>

              <p className="mt-4 text-gray-600">
                📍 {event.location}
              </p>

              <button className="mt-8 rounded-full bg-[#0B6E4F] px-6 py-3 font-semibold text-white transition hover:bg-[#095540]">
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UpcomingEvents;