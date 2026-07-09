const MemberStatusBadge = ({ status }) => {
  let className =
    "rounded-full px-3 py-1 text-sm font-medium";

  switch (status) {
    case "Active":
      className += " bg-green-100 text-green-700";
      break;

    case "Pending":
      className += " bg-yellow-100 text-yellow-700";
      break;

    case "Suspended":
      className += " bg-red-100 text-red-700";
      break;

    default:
      className += " bg-gray-100 text-gray-700";
  }

  return (
    <span className={className}>
      {status}
    </span>
  );
};

export default MemberStatusBadge;