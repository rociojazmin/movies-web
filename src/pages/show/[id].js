import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '@/contexts/AppContext';
import ShowSingleCard from '@/components/ShowSingleCard';
import Link from 'next/link'; // Importa Link

const Show = () => {
  const router = useRouter();
  const { id } = router.query;
  const { getShow, show, showLoading } = useAppContext();

  useEffect(() => {
    if (id) {
      getShow(id);
    }
  }, [id, getShow]);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto p-4">
        {/* Utiliza un div en lugar de un enlace <a> */}
        <Link href="/">
          <div className="relative inline-block">
            <div className="px-4 py-2 text-indigo-100 bg-blue-500 rounded hover:bg-blue-700 cursor-pointer">
              Return Home
            </div>
            <span className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-blue-500"></span>
          </div>
        </Link>
        {showLoading && <p className="text-center text-2xl mt-20">Cargando...</p>}
        {!showLoading && show && <ShowSingleCard show={show} />}
      </div>
    </div>
  );
};

export default Show;
