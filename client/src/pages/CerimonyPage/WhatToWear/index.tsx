import { Title } from "../../../components/Title";
import woman1 from '../../../assets/what-to-wear/w-1.png';
import flower1 from '../../../assets/history-1.png';
import woman2 from '../../../assets/what-to-wear/w-2.png';
import woman3 from '../../../assets/what-to-wear/w-3.png';
import woman4 from '../../../assets/what-to-wear/w-4.png';
import men1 from '../../../assets/what-to-wear/m-1.png';
import men2 from '../../../assets/what-to-wear/m-2.jpg';
import men3 from '../../../assets/what-to-wear/m-3.png';
import men4 from '../../../assets/what-to-wear/m-4.jpg';

export const WhatToWear = () => {

  return (
    <section id='#whatToWear' className={`home-section !mt-0 !items-start`}>
      <Title label='O que vestir' customClass='z-10' />
      <p className='mt-6 md:max-w-[80%]'>Queremos que todos se sintam muito à vontade. Então, acima de tudo, procure se sentir confortável! Veja as fotos a seguir para ter inspirações!</p>

      <div className='mt-10'>
        <h4 className='font-specialTitle text-xl'>Para mulheres</h4>
        <p className='mt-4 md:max-w-[80%]'>Busque usar roupas leves e de tons mais claros. Não precisa usar salto, viu? Mas, se quiser usar, pode ficar tranquila, pois teremos chinelinho para você ficar mais confortável e aproveitar a festa!</p>

        <div className='flex gap-8 mt-4 pb-4 overflow-x-auto max-w-[90%]'>
          <img src={woman1} className='rounded-xl w-[42%] sm:w-auto sm:h-72' alt='Mulher usando vestido midi verde estampado com flores rosas, bolsa de mão branca e cabelo semi solto.' />
          <img src={woman2} className='rounded-xl w-[42%] sm:w-auto sm:h-72' alt='Mulher usando vestido midi verde com bolinhas brancas e cabelo semi solto.' />
          <img src={woman3} className='rounded-xl w-[42%] sm:w-auto sm:h-72' alt='Mulher usando vestido midi amarelho com bolinhas brancas e cabelo solto.' />
          <img src={woman4} className='rounded-xl w-[42%] sm:w-auto sm:h-72' alt='Mulher usando vestido longo laranja sem estampa, bolsa de mão bege e cabelo semi solto.' />
        </div>
      </div>

      <div className='mt-10'>
        <h4 className='font-specialTitle text-xl'>Para homens</h4>
        <p className='mt-4 md:max-w-[80%]'>Busque usar roupas leves e de tons mais claros. Não precisa usar paletó nem sapato social, fique à vontade para apostar em um look mais despojado com tênis e camisa social :)</p>

        <div className='flex gap-8 mt-4 pb-4 overflow-x-auto max-w-[90%]'>
          <img src={men1} className='rounded-xl w-[42%] sm:w-auto sm:h-72' alt='Homem de terno cinza, óculos escuros e camiseta branca. Sem gravata.' />
          <img src={men2} className='rounded-xl w-[42%] sm:w-auto sm:h-72' alt='Homem de terno bege, óculos escuros e camisa azul. Sem gravata.' />
          <img src={men3} className='rounded-xl w-[42%] sm:w-auto sm:h-72' alt='Homem com camiseta branca, calça bege e tênis branco.' />
          <img src={men4} className='rounded-xl w-[42%] sm:w-auto sm:h-72' alt='Homem de terno cinza, gravata azul marinho e sapatao marrom.' />
        </div>
      </div>

      <img alt='' src={flower1} className='absolute bottom-0 -right-0 -scale-x-100 w-20 sm:w-auto' />
    </section>
  );
};
