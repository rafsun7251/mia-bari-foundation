const notices = [
  {
    id: 1,
    title: "Budget Meeting 2026",
    date: "16 May 2026",
  },
  {
    id: 2,
    title: "Official Email Distribution",
    date: "17 May 2026",
  },
  {
    id: 3,
    title: "Football Tournament Registration",
    date: "29 July 2026",
  },
];

const LatestNotices = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[5px] text-[#0B6E4F]">
            Notice Board
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-800">
            Latest Notices
          </h2>
        </div>
        <div className="mt-12 text-center">
  <button className="rounded-full border-2 border-[#0B6E4F] px-8 py-3 font-semibold text-[#0B6E4F] transition hover:bg-[#0B6E4F] hover:text-white">
    View All Notices →
  </button>
</div>

        <div className="space-y-6">

          {notices.map((notice) => (
            <div
              key={notice.id}
              className="flex items-center justify-between rounded-2xl border border-gray-200 p-6 transition hover:border-[#0B6E4F] hover:shadow-lg"
            >
              <div>
                <h3 className="text-xl font-semibold">
                  {notice.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {notice.date}
                </p>
              </div>

              <button className="rounded-full bg-[#0B6E4F] px-6 py-2 text-white transition hover:bg-[#095540]">
                View
              </button>
            </div>
            
          ))}

        </div>

      </div>
    </section>
  );
};

export default LatestNotices;