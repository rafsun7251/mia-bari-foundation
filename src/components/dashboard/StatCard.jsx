const StatCard = ({ title, value }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h3 className="text-gray-500">{title}</h3>

      <h2 className="mt-3 text-4xl font-bold text-[#0B6E4F]">
        {value}
      </h2>
    </div>
  );
};

export default StatCard;