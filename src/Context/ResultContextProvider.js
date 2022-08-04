import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Elon Musk");

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "1d9eee4dd5msh4b78c897106cc98p196394jsn0b47223bceca",
  //     "X-RapidAPI-Host": "google-search1.p.rapidapi.com",
  //   },
  // };

  // type: /videos , /news ,...
  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "1d9eee4dd5msh4b78c897106cc98p196394jsn0b47223bceca",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });

    const data = await response.json();

    if (type.includes("/news")) {
      setResult(data.entries);
    } else if (type.includes("/image")) {
      setResult(data.image_results);
    } else {
      setResult(data.results);
    }

    // setResult(data);
    setIsLoading(false);
    console.log(data);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, result, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
