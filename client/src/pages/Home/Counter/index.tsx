import { useEffect, useState } from "react";
import { getCountdown } from "../../../utils/countdown";
import { CountdownElement } from "./countdownElement";
import flowers1 from "../../../assets/counter-1.png"
import flowers2 from "../../../assets/counter-2.png"

export const Counter = () => {
  const weddingDate = new Date(1682190000000);
  const [countdown, setCountdown] = useState(getCountdown(weddingDate));

  setInterval(() => {
    setCountdown(getCountdown(weddingDate));
  }, 1000);

  return (
    <section className='w-[100%] flex items-center justify-center'>
      <div className='w-[80vw] lg:w-[74vw] h-[40vh] bg-brand-primary-main -translate-y-12 flex flex-col items-center justify-center gap-5'>
        <div className='relative flex items-center justify-between w-[70%] max-[580px]:grid max-[580px]:grid-cols-3 max-[580px]:grid-rows-2 max-[580px]:[&>*]:justify-self-center'>
          <CountdownElement value={countdown.days} label='dias' />
          <span className='text-brand-white text-xs md:text-[16px]'>⬤</span>
          <CountdownElement value={countdown.hours} label='horas' />
          <span className='text-brand-white text-xs md:text-[16px] max-[580px]:hidden'>⬤</span>
          <CountdownElement value={countdown.minutes} label='minutos' />
          <span className='text-brand-white text-xs md:text-[16px]'>⬤</span>
          <CountdownElement value={countdown.seconds} label='segundos' />
        </div>
        <span className='font-specialTitle text-brand-white text-3xl md:text-4xl'>Para o grande dia!</span>
        <img className='absolute max-[580px]:w-28 w-44 -bottom-10 -left-10 max-[580px]:-top-16' src={flowers1} alt='' />
        <img className='absolute max-[580px]:w-24 w-36 -bottom-5 -right-3' src={flowers2} alt='' />
      </div>
    </section>
  );
};