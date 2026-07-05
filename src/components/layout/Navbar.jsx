import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <header className="bg-green-700 p-5 text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3">

        <img
          src={logo}
          alt="Logo"
          className="h-12 w-12 rounded-full"
        />

        <h1 className="text-2xl font-bold">
          Mia Bari Foundation
        </h1>

      </div>
    </header>
  );
};

export default Navbar;