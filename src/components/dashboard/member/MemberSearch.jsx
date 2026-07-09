const MemberSearch = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-6 w-full rounded-lg border px-4 py-3 outline-none focus:border-[#0B6E4F]"
    />
  );
};

export default MemberSearch;