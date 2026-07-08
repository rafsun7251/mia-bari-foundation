import useAuth from "./hooks/useAuth";

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <h1 className="text-center mt-20 text-3xl">
        Loading...
      </h1>
    );
  }

  return (
    <div className="text-center mt-20">
      {user ? (
        <>
          <h1 className="text-3xl font-bold text-green-700">
            Welcome
          </h1>

          <p>{user.email}</p>
        </>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
}

export default App;