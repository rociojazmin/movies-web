import React from "react";

export default function Hero() {
  const backgroundImageUrl = "https://i.pinimg.com/564x/3b/d7/5c/3bd75c7cf79e874bf5bd64890f82050c.jpg";

  return (
    <section className="bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
      <div className="bg-white text-black py-20 bg-opacity-60">
        <div className="container mx-auto flex flex-col md:flex-row items-start my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-start items-start p-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Barbie shows
            </h1>
            <h2 className="text-xl md:text-2xl leading-relaxed md:leading-snug mb-2">
              <span className="text-pink-500"> The best Barbie shows here!</span>
            </h2>
            <p className="text-sm md:text-base text-white mb-4">
              Explore your favourite events and register
            </p>
            <a
              href="#shows"
              className="bg-transparent hover:bg-pink-500 text-pink-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-pink-500 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <img
                  className="inline-block mt-28 hidden xl:block"
                  src="/img/first-image.png"
                  alt="Image1"
                />
              </div>
              <div>
                <img
                  className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="/img/second-image.png"
                  alt="Image2"
                />
              </div>
              <div>
                <img
                  className="inline-block mt-28 hidden lg:block"
                  src="/img/third-image.png"
                  alt="Image3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
