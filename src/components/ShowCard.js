import Image from 'next/image';
import ButtonLink from './ButtonLink';

const ShowCard = ({ show }) => {

  if (!show) {
    return null; // Si no hay show, no renderiza nada
  }

  const { name, id, image } = show;

  return (
    <div className="flex flex-col items-center justify-start mb-6">
      <div className="border border-slate-800 border-solid mb-2 w-64 h-auto">
        <img src={image?.original} width={272} height={400} alt={name} />
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
      <ButtonLink id={id} />
    </div>
  );
};

export default ShowCard;
