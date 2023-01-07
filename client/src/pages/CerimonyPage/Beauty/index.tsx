import { Title } from "../../../components/Title";
import flower2 from '../../../assets/counter-2.png';

export const Beauty = () => {

  return (
    <section id='#beauty' className={`home-section !mt-0 !items-start`}>
      <Title label='Salões de beleza' customClass='z-10' />
      <div className=' mt-8'>
        <h4>Lista de indicações de salão de beleza em Ouro Branco:</h4>
        <ul className='flex flex-col gap-2 mt-4'>
          <li>
            <h5 className='font-semibold'>Sobrancelha:</h5>
            <p>Jaqueline (31) 8764-6676</p>
          </li>
          <li>
            <h5 className='font-semibold'>Cachos: </h5>
            Bunita Salão (31) 99438581
          </li>
          <li>
            <h5 className='font-semibold'>Cabelo, unha e maquiagem: </h5>
            <p>Bárbara Salão (31)98839-0381</p>
            <p>Salão Status (31)3742-1414</p>
            <p>Profissão beleza (31) 99983-6865</p>
          </li>
        </ul>
        <img alt='' src={flower2} className='absolute bottom-0 right-0 w-32 sm:w-auto -z-10' />
      </div>


    </section>
  );
};
