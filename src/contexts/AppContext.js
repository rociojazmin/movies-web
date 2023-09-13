import { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  const getShows = useCallback(async () => {
    setLoading(true);
    try {
      const showsReq = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
      setShows(showsReq.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getShow = useCallback(async (id) => {
    setShowLoading(true);
    try {
      const showReq = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      const showData = showReq.data;

      const updatedShow = {
        ...showData,
        language: showData.language,
        premiered: showData.premiered,
        ended: showData.ended,
        type: showData.type,
      };

      setShow(updatedShow);
      setShowLoading(false);
    } catch (error) {
      console.log('ERROR: El programa no se encontró');
    }
  }, []);

  useEffect(() => {
    getShows();
  }, [getShows]);

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
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppContextProvider');
  }
  return context;
};

export default AppContext;
