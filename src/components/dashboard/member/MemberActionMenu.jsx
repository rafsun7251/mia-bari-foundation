import { Link } from "react-router-dom";
import { approveMember } from "../../../services/memberService";

const MemberActionMenu = ({ member }) => {

  const handleApprove = async () => {
    try {
      console.log("Approve clicked:", member.id);

      await approveMember(member.id);

      alert("Member Approved Successfully!");

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-sm">
        ⋮
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content z-[1] w-52 rounded-box bg-white p-2 shadow"
      >
        <li>
          <Link
            to={`/dashboard/members/${member.id}`}
            className="block w-full rounded px-3 py-2 hover:bg-gray-100"
          >
            👤 View Profile
          </Link>
        </li>

        <li>
          <button className="w-full rounded px-3 py-2 text-left hover:bg-gray-100">
            ✏️ Edit Member
          </button>
        </li>

        <li>
          <button
               onClick={() => {
              alert("Button Clicked");
                 handleApprove();
               }}
                  className="w-full rounded px-3 py-2 text-left hover:bg-green-100"
                >
              ✅ Approve
            </button>
        </li>

        <li>
          <button className="w-full rounded px-3 py-2 text-left hover:bg-gray-100">
            ⛔ Suspend
          </button>
        </li>

        <li>
          <button className="w-full rounded px-3 py-2 text-left text-red-600 hover:bg-red-50">
            🗑 Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MemberActionMenu;