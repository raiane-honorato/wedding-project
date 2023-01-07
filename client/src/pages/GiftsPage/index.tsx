import { Footer } from "../../components/Footer";
import { GiftsSection } from "./GiftsSection";
import { PageHeader } from "../../components/PageHeader";
import imgHeader from "../../assets/header-gifts.png";

export const GiftsPage = () => {
  return (
    <>
      <PageHeader
        title={'Lojinha de presentes'}
        subtitle={'Nos presenteie com sua mensagem e um item simbólico. Os pagamentos serão através do código PIX gerado e vai direto pra conta do casal.'}
        imgHeader={imgHeader}
      />
      <GiftsSection />
      <Footer />
    </>
  );
};
