import { Footer } from "../../components/Footer";
import { Cerimony } from "./Cerimony";
import { Counter } from "./Counter";
import { Header } from "./Header";
import { History } from "./History";
import { RSVP } from "./RSVP";

export const Home = () => {

  return (
    <>
      <Header />
      <Counter />
      <History />
      <Cerimony />
      <RSVP />
      <Footer />
    </>
  );
};
