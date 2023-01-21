import gifts from '../../../assets/data/gifts.json';
import { GiftCard } from './GiftCard';
import { ArrowUp } from 'phosphor-react';


export const GiftsSection = () => {
  return (
    <section className='home-section !mt-0 !pt-52 md:!pt-20 flex items-center bg-brand-primary_transparent'>
      <ul className='grid responsive-grid gap-20 w-full items-center justify-items-center'>
        {gifts.map((gift) => <GiftCard key={gift.id} gift={gift} />)}
      </ul>
      <button
        className='gift-border fixed bottom-4 right-4 bg-white p-3 rounded-full'
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowUp />
      </button>
    </section>
  )
}