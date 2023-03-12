import { Footer } from '../../components/Footer';
import { PageHeader } from '../../components/PageHeader';
import imgHeader from '../../assets/header-godparents.png';
import { bestPeople } from '../../assets/data/best-people';
import { BestPeople } from '../../domains/bestPeople.type';
import { GodParent } from './GodParent';
import { Title } from '../../components/Title';

export const GodParentsPage = () => {
  return (
    <>
      <PageHeader
        title={'Nossos padrinhos'}
        subtitle={
          'Essa turminha de pessoas incríveis nos acompanharam em toda a nossa jornada e não poderiam ficar de fora nesse dia tão especial para nós <3'
        }
        imgHeader={imgHeader}
        customImgHeaderClass={'!w-[87%]'}
        customImgClass={'md:max-w-xl'}
      />
      <div className="home-section w-full !mt-24 gap-20">
        <div className="w-full flex flex-col gap-12 items-center">
          <Title label="Padrinhos do Lucas" showIcon={false} />
          <div className="w-full flex flex-wrap justify-center gap-10">
            {bestPeople.groom.map((bestPerson) => (
              <GodParent bestPerson={bestPerson} key={bestPerson.name} />
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-12 items-center">
          <Title label="Padrinhos da Raiane" showIcon={false} />
          <div className="w-full flex flex-wrap justify-center gap-10">
            {bestPeople.bride.map((bestPerson) => (
              <GodParent bestPerson={bestPerson} key={bestPerson.name} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
