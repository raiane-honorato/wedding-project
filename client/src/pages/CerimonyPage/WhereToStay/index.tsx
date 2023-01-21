import { Title } from "../../../components/Title";
import ob1 from "../../../assets/ob-1.png";
import ob2 from "../../../assets/ob-2.png";
import flower1 from "../../../assets/flower-ob.png";

export const WhereToStay = () => {

  return (
    <section id='#whereToStay' className={`home-section !mt-0 !items-start`}>
      <Title label='Onde se hospedar' customClass='z-10' />
      <div className=' mt-8 flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-16 w-full'>
        <div className='md:w-[40%] max-w-md'>
          <p>
            As cidades de Congonhas, Conselheiro Lafaiete e Ouro Branco tem todas a mesma distãncia do local. Assim, é possível se hospedar em todas elas. Porém, aconselhamos que você se hospede em Ouro Branco (cidade da noiva), pois de lá iremos organizar transporte para a festa :)
          </p>
          <h4 className='text-lg font-semibold mt-5 mb-3'>Ouro Branco - MG</h4>
          <p className='font-semibold'>Opções de hospedagem:</p>
          <p>Estes hoteis não utilizam tanto o Booking, então pode ser que apareça que não tem disponibilidade na data. Caso aconteça, ligue pra lá e reserve diretamente com eles.</p>
          <span className='block mt-2'>
            <a className=' underline' href='https://www.booking.com/hotel/br/mirante-flat.pt-br.html?aid=356980&label=gog235jc-1DCAMoIEIMY29uZ29uaGFzLWJySC1YA2ggiAEBmAEtuAEXyAEM2AED6AEB-AECiAIBqAIDuALO3NuZBsACAdICJDQ5MmE1OTg5LWQyMjctNDYyMy1hYjdlLTg2YTE2OGM5MWQ2YtgCBOACAQ&sid=439bf4f2b0473ba326f63cbb78478be5&checkin=2023-04-21;checkout=2023-04-23;dest_id=-658317;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;soh=1;sr_order=popularity;srepoch=1664544971;srpvid=d6a65fa4f81102fc;type=total;ucfs=1&#no_availability_msg'>
              Hotel Mirante Flat
            </a>
            <a className='underline ml-5' href="tel:+553137411100">(31) 3741-1100</a>
          </span>
          <span className='block mt-2'>
            <a className='underline' href='https://www.booking.com/hotel/br/serra-palace.pt-br.html?aid=356980&label=gog235jc-1DCAMoIEIMY29uZ29uaGFzLWJySC1YA2ggiAEBmAEtuAEXyAEM2AED6AEB-AECiAIBqAIDuALO3NuZBsACAdICJDQ5MmE1OTg5LWQyMjctNDYyMy1hYjdlLTg2YTE2OGM5MWQ2YtgCBOACAQ&sid=439bf4f2b0473ba326f63cbb78478be5&atlas_src=hp_iw_title&checkin=2023-04-21&checkout=2023-04-23&dist=0&group_adults=2&group_children=0&no_rooms=1&room1=A%2CA&sb_price_type=total&srepoch=1664545249&srpvid=eafd5faad4a80281&type=total&'>
              Hotel Serra Palace
            </a>
            <a className='underline ml-5' href="tel:+553137423848">(31) 3742-3848</a>
          </span>
        </div>
        <div className='flex flex-col gap-4 md:w-[60%] max-w-2xl'>
          <img src={ob1} className='self-start w-2/3 md:w-1/3 lg:w-1/2 md:min-w-[300px]' alt='Foto da serra e lagoa de Ouro Branco - MG' />
          <img src={ob2} className='self-end w-2/3 md:w-1/3 lg:w-1/2 md:min-w-[300px]' alt='Foto da igreja de Ouro Branco - MG' />
        </div>
      </div>
      <img alt='' src={flower1} className='absolute bottom-0 left-0 w-32 md:w-auto -z-10' />

    </section>
  );
};
