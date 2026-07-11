import { useEffect, useState } from "react";
import { getPendingMembers } from "../../../services/memberService";
import MemberTable from "../../../components/dashboard/member/MemberTable";

const PendingMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const data = await getPendingMembers();
        setMembers(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadMembers();
  }, []);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Pending Members
      </h1>
      <button
  id="test-btn"
  onClick={() => alert("Working")}
  className="bg-red-500 text-white px-4 py-2"
>
  Test Button
</button>

      <MemberTable members={members} />
    </div>
  );
};

export default PendingMembers;