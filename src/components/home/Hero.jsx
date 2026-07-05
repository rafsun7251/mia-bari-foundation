import Button from "../common/Button";

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/src/assets/images/hero.jpg')",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center text-white">

        <h1 className="text-5xl font-extrabold md:text-7xl">
          Mia Bari Foundation
        </h1>

        <p className="mt-6 text-xl text-gray-200 md:text-2xl">
          Building Community • Serving Humanity
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Empowering people through education, healthcare,
          youth development, sports, emergency relief,
          and community service.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button>
            Donate Now
          </Button>

          <button className="rounded-full border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black">
            Become Volunteer
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;