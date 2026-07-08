import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="rounded-2xl bg-white p-8 shadow">

      <h1 className="mb-8 text-3xl font-bold">
        My Profile
      </h1>

      <div className="space-y-4">

        <p>
          <strong>Email:</strong> {user?.email}
        </p>

        <p>
          <strong>UID:</strong> {user?.uid}
        </p>

        <p>
          <strong>Name:</strong> Coming from Firestore...
        </p>

        <p>
          <strong>Role:</strong> Pending
        </p>

        <p>
          <strong>Status:</strong> Pending
        </p>

      </div>

    </div>
  );
};

export default Profile;