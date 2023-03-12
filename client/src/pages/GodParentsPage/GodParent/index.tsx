import { BestPerson } from '../../../domains/bestPeople.type';

interface GodParentProps {
  bestPerson: BestPerson;
}

// export const GodParent = ({ bestPerson }: GodParentProps) => {
//   return (
//     <div className="flex gap-16 items-center">
//       <img
//         src={bestPerson.photo}
//         alt=""
//         className="w-72 rounded-full border-brand-primary-main border-[6px]"
//       />
//       <div>
//         <h3 className="font-specialTitle text-3xl mb-3">{bestPerson.name}</h3>
//         <p className="w-[80%]">{bestPerson.description}</p>
//       </div>
//     </div>
//   );
// };

export const GodParent = ({ bestPerson }: GodParentProps) => {
  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-[520px] p-8 bg-brand-primary_transparent rounded-2xl">
      <img src={bestPerson.photo} alt="" className="w-72 rounded-2xl" />
      <div>
        <h3 className="font-specialTitle text-3xl mb-3 text-center">{bestPerson.name}</h3>
        <p className="text-md leading-6 text-justify">{bestPerson.description}</p>
      </div>
    </div>
  );
};
