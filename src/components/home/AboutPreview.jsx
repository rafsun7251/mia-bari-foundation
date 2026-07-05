import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Education Support",
  "Health Awareness",
  "Disaster Relief",
  "Sports Development",
  "Youth Empowerment",
  "Women Empowerment",
];

const AboutPreview = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[5px] text-[#0B6E4F]">
            About Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-800">
            Building Hope, Empowering Communities
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Mia Bari Foundation is a non-profit organization committed to
            improving lives through education, healthcare, disaster response,
            volunteerism, youth development, and community service.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {features.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow"
            >
              <FaCheckCircle className="text-2xl text-[#0B6E4F]" />

              <span className="text-lg font-medium">
                {item}
              </span>

            </div>
          ))}

        </div>

        <div className="mt-16 text-center">

          <button className="rounded-full bg-[#0B6E4F] px-8 py-3 font-semibold text-white transition hover:bg-[#095540]">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutPreview;