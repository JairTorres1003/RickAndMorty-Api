import { useEffect, useState } from "react";
import { Character, InfoType } from "../interfaces/types";
import { useLocation } from "react-router-dom";
import axios from "axios";

function useHome() {
  const API_URL = "https://rickandmortyapi.com/api/";
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [infoType, setInfoType] = useState<InfoType | null>(null);
  const [resultCards, setResultCards] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    handleSearch();
  }, [location]);

  /**
   * Fetches data based on the provided type parameter.
   * @param type The type of data to search
   * @default 'character'.
   */
  const handleSearch = (type = "character") => {
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get("page") || "1", 10);

    setLoading(true);

    axios
      .get(`${API_URL}${type}${location.search}`)
      .then((res) => res.data)
      .then((response) => {
        let search = "";
        if (response.info.next || response.info.prev) {
          const url = new URL(response.info.next || response.info.prev);
          url.searchParams.delete("page");
          search = url.searchParams.toString();
        }

        setInfoType({ ...response.info, search });
        setResultCards([...response.results]);
        setCurrentPage(page);
        setLoading(false);
      })
      .catch(() => {
        setResultCards([]);
        setLoading(false);
      });
  };

  return {
    currentPage,
    infoType,
    resultCards,
    loading,
    handleSearch,
  };
}

export default useHome;
