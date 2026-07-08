import useAuth from "../../../hooks/useAuth";

const Topbar = () => {
  const { user } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">

      <h2 className="text-xl font-bold">
        Dashboard
      </h2>

      <div className="text-right">
        <p className="font-semibold">
          {user?.email}
        </p>

        <p className="text-sm text-gray-500">
          Pending Member
        </p>
      </div>

    </header>
  );
};

export default Topbar;