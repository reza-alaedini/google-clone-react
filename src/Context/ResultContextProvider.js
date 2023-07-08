import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [allResult, setAllResult] = useState([]);
  const [imgResult, setImgResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Reza Alaedini");

  // type: /videos , /news ,...
  const getResults = async (type) => {
    setIsLoading(true);

    // const response = await fetch(`${baseUrl}`, {
    //   method: "GET",
    //   params: {
    //     query: 'reza alaedini',
    //     limit: '10',
    //     related_keywords: 'false'
    //   },
    //   headers: {
    //     "X-User-Agent": "desktop",
    //     "X-RapidAPI-Key": "f76438da76mshbca5ef785ed2b6bp107022jsna776f1cc799c",
    //     "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
    //   },
    // });

    // const data = await response.json();

    const res = await axios.request({
      method: "GET",
      url: "https://google-search74.p.rapidapi.com/",
      params: {
        query: searchTerm,
        limit: "10",
        related_keywords: "false",
      },
      headers: {
        "X-RapidAPI-Key": "9771a091a2msh69ae854907548b4p1fdd64jsn754f9f9dd335",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    });

    const { results } = res.data;
    const { knowledge_panel } = res.data;

    console.log(knowledge_panel);

    setAllResult(results);
    setImgResult(knowledge_panel);
    setIsLoading(false);

    // if (type.includes("/news")) {
    //   setResult(res.data.entries);
    // } else if (type.includes("/image")) {
    //   setResult(res.data.image_results);
    // } else {
    //   setResult(res.data.results);
    // }

    //   if (type.includes("/image")) {
    //   setResult(res.data.knowledge_panel.image);
    // } else {
    //   setResult(results);
    // }
  };

  return (
    <ResultContext.Provider
      value={{
        getResults,
        allResult,
        imgResult,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
