import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginUser(
        formData.email,
        formData.password
      );

      alert("Login Successful!");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
      >
        <h2 className="mb-6 text-center text-3xl font-bold">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="mb-6 w-full rounded border p-3"
          required
        />

        <button
          type="submit"
          className="w-full rounded bg-[#0B6E4F] py-3 text-white"
        >
          Login
        </button>
      </form>

    </div>
  );
};

export default Login;