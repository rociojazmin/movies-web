import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await axios.get('https://api.tvmaze.com/search/shows?q=barbie');
                setShows(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los programas:', error);
                setLoading(false);
            }
        };

        fetchShows();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Mostrar 5 películas por pantalla
        slidesToScroll: 1,
        arrows: false, // Ocultar las flechas de navegación
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div id="shows" className="bg-pink-100 relative">
            <div className=" h-1 w-full border-t border-pink-300"></div> {/* Solo la línea superior */}
            <div className="carousel-container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6 pt-6 text-center text-pink-400">Movies</h1>
                {loading ? (
                    <p className="text-center">Cargando...</p>
                ) : (
                    <div className="relative pb-8">
                        <Slider {...settings} className="-mx-4">
                            {shows.map((show) => (
                                <div key={show.show.id} className="carousel-item px-4">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={show.show.image?.medium || 'placeholder.jpg'}
                                            alt={show.show.name}
                                            className="rounded-lg shadow-md"
                                        />
                                        <h3 className="text-lg font-semibold mt-2 text-center">{show.show.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <style jsx global>{`
                            /* Estilos personalizados para limitar la cantidad de puntos (dots) */
                            .slick-dots {
                                display: flex !important;
                                justify-content: center;
                                align-items: center;
                                margin-top: 20px;
                            }
                            /* Oculta todos los puntos */
                            .slick-dots li {
                                display: none !important;
                            }
                            /* Muestra solo los primeros 6 puntos */
                            .slick-dots li:nth-child(-n+6) {
                                display: block !important;
                            }
                        `}</style>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Carousel;