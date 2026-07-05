import chairman from "../../assets/chairman/chairman.jpg";

const ChairmanSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={chairman}
            alt="Chairman"
            className="h-[500px] w-[380px] rounded-3xl object-cover shadow-2xl"
          />
        </div>

        {/* Content */}
        <div>
          <p className="font-semibold uppercase tracking-[5px] text-[#0B6E4F]">
            Chairman's Message
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-800">
            Welcome to Mia Bari Foundation
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            Mia Bari Foundation believes that even a small act of kindness
            can create a lasting impact. Our mission is to empower people
            through education, healthcare, youth development, sports,
            emergency relief, and community service.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            Together with our volunteers, committee members, and supporters,
            we continue to build a stronger and more compassionate community.
          </p>

          <button className="mt-10 rounded-full bg-[#0B6E4F] px-7 py-3 font-semibold text-white transition hover:bg-[#095540]">
            Read More
          </button>
        </div>

      </div>
    </section>
  );
};

export default ChairmanSection;