import { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
// Importa los hooks necesarios desde React y la biblioteca axios para realizar solicitudes HTTP

const AppContext = createContext();
// Crea un contexto con createContext, que se utilizará para compartir datos entre componentes

export const AppContextProvider = ({ children }) => {
  // Define el componente AppContextProvider que envolverá otros componentes (children)

  const [shows, setShows] = useState([]); // Define un estado 'shows' para almacenar la lista de programas de TV
  const [show, setShow] = useState({}); // Define un estado 'show' para almacenar un programa de TV individual
  const [loading, setLoading] = useState(true); // Define un estado 'loading' para manejar el estado de carga de la lista de programas
  const [showLoading, setShowLoading] = useState(true); // Define un estado 'showLoading' para manejar el estado de carga de un programa individual

  const getShows = useCallback(async () => { // Define la función getShows usando useCallback para que se memorice
    setLoading(true); // Establece el estado 'loading' en true antes de realizar la solicitud
    try {
      const showsReq = await axios.get('https://api.tvmaze.com/search/shows?q=barbie');
      // Realiza una solicitud HTTP a la API de TVMaze para obtener programas relacionados con 'barbie'
      setShows(showsReq.data);
      // Actualiza el estado 'shows' con los datos obtenidos
      setLoading(false);
      // Establece el estado 'loading' en false después de recibir los datos
    } catch (error) {
      console.log(error); // Imprime cualquier error en la consola
    }
  }, []);

  const getShow = useCallback(async (id) => {
    setShowLoading(true);
    try {
      const showReq = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      // Realiza una solicitud HTTP a la API de TVMaze para obtener detalles de un programa específico por su ID
      const showData = showReq.data;
      // Obtiene los datos del programa

      const updatedShow = {
        ...showData,
        language: showData.language,
        premiered: showData.premiered,
        ended: showData.ended,
        type: showData.type,
      };
      // Actualiza los datos del programa con las propiedades necesarias

      setShow(updatedShow);
      // Actualiza el estado 'show' con los datos del programa
      setShowLoading(false);
      // Establece el estado 'showLoading' en false después de recibir los datos
    } catch (error) {
      console.log('ERROR: El programa no se encontró'); // Imprime un mensaje de error en la consola si ocurre un error
    }
  }, []);

  useEffect(() => {
    getShows();
    // Llama a la función getShows cuando el componente se monta
  }, [getShows]);
  // La dependencia de useEffect es getShows, lo que garantiza que solo se ejecute cuando getShows cambia

  return (
    <AppContext.Provider
      value={{
        shows,
        loading,
        getShow,
        show,
        showLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
  // El componente AppContextProvider retorna un AppContext.Provider que provee los valores al contexto para los componentes hijos
};

export const useAppContext = () => {
  // Define un custom hook llamado useAppContext
  const context = useContext(AppContext);
  // Usa el hook useContext para acceder al contexto AppContext
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppContextProvider');
    // Lanza un error si useAppContext se usa fuera de AppContextProvider
  }
  return context;
  // Retorna el contexto
};

export default AppContext;
// Exporta el contexto AppContext por defecto
