import ShowCard from '@/components/ShowCard';
import { useAppContext } from '@/contexts/AppContext';

const CardsContainer = () => {
  const { shows, loading } = useAppContext();
  return (
    <section>
      <h2>Shows</h2>
      {!loading && (
        <div className='inner my-0 mx-auto max-w-[1200px] px-4'>
          <div className='grid grid-cols-12 gap-4 gap-y-6'>
            {shows.map((actualShow, index) => {
              return <ShowCard actualShow={actualShow} key={index} />;
            })}
          </div>
        </div>
      )}
      {loading && <p className='w-full flex justify-center'>Loading...</p>}
    </section>
  );
};

export default CardsContainer;
