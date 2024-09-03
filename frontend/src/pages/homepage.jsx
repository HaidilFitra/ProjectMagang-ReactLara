import Banner from "../components/banner";
import Navigation from "../components/navbar";
import VisiMisi from "./VisiMisi";
import Berita from "./berita";
import Footer from "../components/footer";
const HomePage = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <VisiMisi />
      <Berita />
      <Footer />

    </>
  );
};

export default HomePage;
