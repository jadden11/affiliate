import Bento from "../components/Bentogrid";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import StoreNav from "../marketplace/storeNav";

const Index = () => {
  return (
    <>
      <StoreNav />
      <Bento />
      <Stats />
      <Footer />
    </>
  );
};

export default Index;
