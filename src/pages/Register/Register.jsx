import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { saveUserToDatabase } from "../../services/userService";

const Register = () => {
  const { registerUser } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);

    try {
      const result = await registerUser(
        formData.email,
        formData.password
      );

    await saveUserToDatabase(
    result.user,
    formData.name
    );

alert("Registration Successful!");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">

      <form
        onSubmit={handleRegister}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
      >

        <h2 className="mb-6 text-center text-3xl font-bold">
          Register
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-3"
          required
        />

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
          Register
        </button>

      </form>

    </div>
  );
};

export default Register;