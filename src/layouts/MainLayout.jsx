import Navbar from "../components/layout/Navbar";
import Home from "../pages/Home/Home";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
};

export default MainLayout;