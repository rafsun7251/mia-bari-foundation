import MemberStatusBadge from "./MemberStatusBadge";
import MemberActionMenu from "./MemberActionMenu";


const MemberTable = ({ members }) => {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-[#0B6E4F] text-white">
          <tr>
            <th className="px-4 py-3 text-left">Photo</th>
            <th className="px-4 py-3 text-left">Member ID</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Designation</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-b">
              <td className="px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                  👤
                </div>
              </td>

              <td className="px-4 py-3">
                {member.memberId || "-"}
              </td>

              <td className="px-4 py-3">
                {member.name}
              </td>

              <td className="px-4 py-3">
                {member.designation}
              </td>

              <td className="px-4 py-3">
               <MemberStatusBadge
                status={member.status}
                />
              </td>
              <td className="px-4 py-3 text-center">
                <MemberActionMenu member={member} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;