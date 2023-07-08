import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../Context/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { getResults, allResult, isLoading, searchTerm, setSearchTerm } =
    useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`/query=${searchTerm}&limit=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {allResult?.map(({ description, title, url, position }) => (
            <div key={position} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p>{description}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap">
          {allResult?.map((video, index) => (
            <div key={index} className="p-2 ">
              {video?.additional_links?.[0].href && (
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  width="355px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {allResult?.map(({ links, title, id, source }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {allResult?.map(({ knowledge_panel: { image, description } }) => (
            <a
              className="sm:p-3 p-5"
              href={image?.url}
              key={image?.page_url}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.url} alt={description?.text} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">
                {description?.text}
              </p>
            </a>
          ))}
        </div>
      );

    default:
      return "ERROR!";
  }
};

export default Results;
