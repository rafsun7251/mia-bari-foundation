const Footer = () => {
  return (
    <footer className="bg-[#0B6E4F] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">

        <div>
          <h2 className="text-3xl font-bold">
            Mia Bari Foundation
          </h2>

          <p className="mt-5 leading-7 text-green-100">
            Building a better future through education,
            healthcare, volunteerism, sports, and community
            development.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>Home</li>
            <li>About</li>
            <li>Committees</li>
            <li>Events</li>
            <li>Notices</li>
            <li>Donate</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Contact
          </h3>

          <p>Email: info@miabarifoundation.org</p>
          <p className="mt-3">Bhola, Bangladesh</p>
        </div>

      </div>

      <div className="border-t border-green-700 py-6 text-center text-green-200">
        © 2026 Mia Bari Foundation. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;