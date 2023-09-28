import React from 'react';

const ShowSingleCard = ({ show }) => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4 text-center">{show.name}</h1>
        <div className="flex flex-col md:flex-row mb-4">
          {/* En pantallas medianas y grandes, muestra la imagen en la izquierda */}
          <div className="md:w-1/3">
            <img
              src={show.image.medium}
              alt={show.name}
              className="w-full h-auto" // Establece el ancho completo y la altura automática
              style={{ maxWidth: '300px', maxHeight: '450px' }} // Tamaño máximo deseado
            />
          </div>
          <div className="md:w-2/3 p-4">
            <div className="mb-4">
              <p className="text-indigo-300">Genre:</p>
              <p className="text-white dark:text-white">
                {show.genres.join(', ')}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-indigo-300">rating average:</p>
              <p className="text-white dark:text-white">
                {show.rating && show.rating.average}
              </p>
            </div>
            <div className="text-indigo-300">
              <p className="mb-4">Resumen:</p>
              <div
                dangerouslySetInnerHTML={{ __html: show.summary }}
                className="text-white dark:text-white"
              />
            </div>
            <div className="mb-4">
              <p className="text-indigo-300">language:</p>
              <p className="text-white dark:text-white">{show.language}</p>
            </div>
            <div className="mb-4">
              <p className="text-indigo-300">Premiered:</p>
              <p className="text-white dark:text-white">{show.premiered}</p>
            </div>
            <div className="mb-4">
              <p className="text-indigo-300">Ended:</p>
              <p className="text-white dark:text-white">{show.ended}</p>
            </div>
            <div className="mb-4">
              <p className="text-indigo-300">Type:</p>
              <p className="text-white dark:text-white">{show.type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSingleCard;
