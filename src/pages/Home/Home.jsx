import Hero from "../../components/home/Hero";
import ChairmanSection from "../../components/home/ChairmanSection";
import Statistics from "../../components/home/Statistics";
import AboutPreview from "../../components/home/AboutPreview";
import LatestNotices from "../../components/home/LatestNotices";
import UpcomingEvents from "../../components/home/UpcomingEvents";
import DonationSection from "../../components/home/DonationSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ChairmanSection />
      <Statistics />
      <AboutPreview />
      <LatestNotices />
      <UpcomingEvents />
        <DonationSection />
    </>
  );
};

export default Home;