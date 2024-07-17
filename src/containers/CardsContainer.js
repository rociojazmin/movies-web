// CardsContainer.js
import ShowCard from '@/components/ShowCard';
import { useAppContext } from '@/contexts/AppContext';

const CardsContainer = () => {
  const { shows, loading } = useAppContext();

  return (
    <section className="bg-gray-800 text-white py-10">
      <h2 className="text-center text-3xl font-semibold mb-8">Shows</h2>
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
          {shows.map((actualShow, index) => (
            <div className="p-2" key={index}>
              <ShowCard show={actualShow} /> {/* Pasar actualShow en lugar de shows */}
            </div>
          ))}
        </div>
      )}
      {loading && <p className="w-full flex justify-center">Loading...</p>}
    </section>
  );
};

export default CardsContainer;
