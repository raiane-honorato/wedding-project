import { Link, useNavigate } from "react-router-dom";
import { Gift } from "../../../../domains/gift.type";
import { formatCurrency } from "../../../../utils/formatCurrency";

interface GiftCardProps {
  gift: Gift
}

export const GiftCard = ({ gift }: GiftCardProps) => {
  const { title, description, value, img, id } = gift;

  const navigate = useNavigate();

  return (
    <li onClick={() => { navigate(`/gifts/${id}`) }} className='flex flex-col items-center gap-6 min-w-[280px] h-[350px] p-2 border-brand-primary_transparent gift-border rounded-3xl cursor-pointer'>
      <div className='rounded-3xl overflow-hidden w-56 h-56 flex items-center justify-center'>
        <img src={img} alt={description} className='h-full w-auto max-w-none'></img>
      </div>
      <div className='w-full'>
        <h5 className='font-medium'>
          <Link to={`/gifts/${id}`}>
            {title}
          </Link>
        </h5>
        <span className='text-xl font-bold'>{formatCurrency(value)}</span>
      </div>
    </li>
  )
};
