import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-[#0B6E4F]">
        Dashboard
      </h1>

      <p className="mt-6 text-xl">
        Welcome,
      </p>

      <p className="text-lg font-semibold">
        {user?.email}
      </p>
    </div>
  );
};

export default Dashboard;