import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMemberById } from "../../../services/memberService";

const MemberProfile = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
  const loadMember = async () => {
    const data = await getMemberById(id);

    console.log("Loaded Member:", data);

    setMember(data);
  };

  loadMember();
}, [id]);

  if (!member) {
    return <h2 className="p-8 text-xl">Loading...</h2>;
  }

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h1 className="mb-6 text-3xl font-bold">
        Member Profile
      </h1>

      <div className="flex items-center gap-6">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gray-200 text-5xl">
          👤
        </div>

        <div className="space-y-2">
          <p><strong>Name:</strong> {member.name}</p>
          <p><strong>Email:</strong> {member.email}</p>
          <p><strong>Designation:</strong> {member.designation}</p>
          <p><strong>Status:</strong> {member.status}</p>
          <p><strong>Role:</strong> {member.role}</p>
          <p><strong>Committee:</strong> {member.committee}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;