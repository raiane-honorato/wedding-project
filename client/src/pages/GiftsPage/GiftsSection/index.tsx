import gifts from '../../../assets/data/gifts.json';
import { GiftCard } from './GiftCard';


export const GiftsSection = () => {
  return (
    <section className='home-section !mt-0 !pt-52 md:!pt-20 flex items-center bg-brand-primary_transparent'>
      <ul className='grid responsive-grid gap-20 w-full items-center justify-items-center'>
        {gifts.map((gift) => <GiftCard key={gift.id} gift={gift} />)}
      </ul>
    </section>
  )
}