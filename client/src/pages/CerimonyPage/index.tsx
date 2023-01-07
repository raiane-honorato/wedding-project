import { Cerimony } from "../Home/Cerimony";
import { WhereToStay } from "./WhereToStay";
import { WhatToWear } from "./WhatToWear";
import { Beauty } from "./Beauty";
import { Footer } from "../../components/Footer";
import { PageHeader } from "../../components/PageHeader";
import imgHeader from "../../assets/header-cerimony.png";

export const CerimonyPage = () => {
  return (
    <>
      <PageHeader
        title={'Dicas para o grande dia!'}
        subtitle={'Confira dicas do que vestir, onde se hospedar e de salões de beleza!'}
        imgHeader={imgHeader}
      />
      <Cerimony customClass='!bg-transparent !mt-32 sm:!mt-16 !items-start' showButton={false} />
      <WhatToWear />
      <WhereToStay />
      <Beauty />
      <Footer />
    </>
  );
};
