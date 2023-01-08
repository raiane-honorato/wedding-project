import { Footer } from "../../components/Footer";
import { PageHeader } from "../../components/PageHeader";
import imgHeader from "../../assets/header-godparents.png";

export const GodParentsPage = () => {
  return (
    <>
      <PageHeader
        title={'Nossos padrinhos'}
        subtitle={'Essa turminha de pessoas incríveis nos acompanharam em toda a nossa jornada e não poderiam ficar de fora nesse dia tão especial para nós <3'}
        imgHeader={imgHeader}
        customImgHeaderClass={'!w-[87%]'}
      />
      <div className='home-section w-full h-[60vh] !mt-24 gap-4'>
        <div className='flex gap-4 items-center'>
          <img src='https://art.pixilart.com/d8a5d6f1f1f432a.png' className='w-24' alt='' />
          <h3 className='font-semibold text-2xl'>Erro!</h3>
        </div>
        <span className='text-lg text-center'>Ainda estamos chamando nossos padrinhos. Você não quer estragar a surpresa, né?</span>
      </div>

      <Footer />
    </>
  );
};
