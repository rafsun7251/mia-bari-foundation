import { useEffect, useState } from "react";
import { getAllMembers } from "../../../services/memberService";

const PendingMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const loadMembers = async () => {
      const data = await getAllMembers();

      const pending = data.filter(
        (member) => member.status === "Pending"
      );

      setMembers(pending);
    };

    loadMembers();
  }, []);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Pending Members
      </h1>

      <div className="space-y-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="rounded-xl border bg-white p-5 shadow"
          >
            <h2 className="text-xl font-semibold">
              {member.name}
            </h2>

            <p>{member.email}</p>

            <p>Status: {member.status}</p>

            <button className="mt-4 rounded bg-green-600 px-5 py-2 text-white">
              Approve
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingMembers;