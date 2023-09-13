import React from "react";

export default function Hero() {
  return (
    <div className='bg-[url("https://i.pinimg.com/originals/8e/5c/56/8e5c56b66a2c216066033513298d9c99.png")] h-96 w-full bg-cover bg-center p-20 relative'>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="mb-2 text-4xl font-bold text-center shadow-lg">
          BatmanWiki
        </h1>
        <p className="text-lg text-center shadow-lg">
          Acá vas a encontrar todas las películas de Batman y su información
        </p>
      </div>
    </div>
  );
}
