import { Clock, MapPin } from "phosphor-react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Title } from "../../../components/Title";
import { WeddingMap } from "../../../utils/weddingMap";
import flower1 from "../../../assets/cerimony-1.png";
import { ClickCopyButton } from "../../../components/ClickCopyButton";

interface CerimonyProps {
  customClass?: string,
  showButton?: boolean
};

export const Cerimony = ({ customClass = '', showButton = true }: CerimonyProps) => {
  const weddingAddress = 'R. José Vicente Lôbo, 2 - Alto Maranhão, Congonhas - MG';


  return (
    <section id='#cerimony' className={`home-section bg-brand-primary_transparent ${customClass}`}>
      <Title label='A cerimônia' customClass='z-10' />
      <div className='flex items-center flex-col min-[950px]:flex-row gap-16 mt-8'>
        <WeddingMap />
        <div className='flex flex-col gap-6 max-w-[80%] items-start z-50'>
          <p>Decidimos fazer esta cerimônia pois queríamos ter um momento inesquecível de celebração do nosso amor, recebendo o carinho e as bençãos de todas as pessoas que são realmente importante para nós. E gostaríamos que todos se sentissem acolhidos, por isso vamos fazer uma cerimônia independente de religião, pois para nós Deus se manifesta no amor que recebemos. </p>
          <p>A cerimônia e a festa serão nesse aconchegante cantinho mineiro, perto da cidade da noiva. Esperamos vocês com muito carinho!</p>

          <div className='flex items-start gap-6'>
            <div className='bg-brand-primary-main rounded-full p-1'>
              <MapPin size={32} color="#fafafa" />
            </div>
            <div>
              <span className='font-bold block'>Sítio Império das Palmeiras</span>
              <span className='block'>{weddingAddress}</span>
              <ClickCopyButton message={weddingAddress} />
            </div>
          </div>

          <div className='flex items-center gap-6'>
            <div className='bg-brand-primary-main rounded-full p-1'>
              <Clock size={32} color="#fafafa" />
            </div>
            <div>
              <span className='font-bold block'>16h00</span>
            </div>
          </div>

          <p>Confira as nossas dicas de hospedagem e do que usar no grande dia:</p>

          {showButton &&
            <Button
              label={<Link to='/cerimony'>Veja dicas para a cerimônia</Link>}
              color='PRIMARY-TRANSPARENT'
            />
          }

        </div>
      </div>
      <img src={flower1} alt='' className='absolute -top-10 sm:-top-20 right-0 w-[100px] sm:w-[220px] z-40' />
    </section>
  );
};
