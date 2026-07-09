import { useEffect, useState } from "react";
import { getAllMembers } from "../../../services/memberService";
import MemberTable from "../../../components/dashboard/member/MemberTable";
import MemberSearch from "../../../components/dashboard/member/MemberSearch";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const data = await getAllMembers();
        setMembers(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadMembers();
  }, []);

  const [search, setSearch] = useState("");
  const filteredMembers = members.filter((member) =>
  member.name.toLowerCase().includes(search.toLowerCase()) ||
  member.email.toLowerCase().includes(search.toLowerCase())
);


  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        All Members
      </h1>
    <MemberSearch
    search={search}
    setSearch={setSearch}
    />

    <MemberTable
    members={filteredMembers}
    />
    
    </div>
  );
};

export default Members;