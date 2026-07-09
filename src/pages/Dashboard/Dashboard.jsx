import { useEffect, useState } from "react";
import StatCard from "../../components/dashboard/StatCard";
import { getMemberCount } from "../../services/memberService";

const Dashboard = () => {
  const [memberCount, setMemberCount] = useState(0);

 useEffect(() => {
  const loadData = async () => {
    try {
      const total = await getMemberCount();
      setMemberCount(total);
    } catch (error) {
      console.error("Error loading member count:", error);
    }
  };

  loadData();
}, []);

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Members"
          value={memberCount}
        />

        <StatCard
          title="Pending Members"
          value="0"
        />

        <StatCard
          title="Events"
          value="0"
        />

        <StatCard
          title="Notices"
          value="0"
        />

      </div>
    </div>
  );
};

export default Dashboard;