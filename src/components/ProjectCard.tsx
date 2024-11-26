"use client";

import { useState } from "react";
import { BiChevronUp } from "react-icons/bi";

export default function ProjectCard({
  title,
  description,
  youtubeUrl,
}: {
  title: string;
  description: string;
  youtubeUrl: string | string[];
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  const youtubeUrls = Array.isArray(youtubeUrl) ? youtubeUrl : [youtubeUrl];

  return (
    <div className="inline-block min-w-full p-6 rounded-lg border-2 border-foreground">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold mb-4">{title}</h3>
        <div className="flex items-center">
          <button onClick={() => setIsExpanded(!isExpanded)}>
            <BiChevronUp
              className="size-8"
              style={{
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
        </div>
      </div>
      <hr className="my-4 border-[#6e6e6e] w-full border-1" />
      {isExpanded ? (
        <>
          <p className="max-w-full">{description}</p>
          <div className="mt-12 grid grid-cols-2 gap-4">
            {youtubeUrls.map((url, index) => (
              <div key={index} className="relative w-full pb-[56.25%] h-0">
                {url.includes("youtube.com") ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={url}
                    title={`YouTube video player ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <img
                      className="absolute top-0 left-0 w-full h-full rounded-lg object-cover cursor-pointer"
                      src={url}
                      alt={`Project image ${index + 1}`}
                    />
                  </a>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {youtubeUrls.slice(0, 2).map((url, index) => (
            <div key={index} className="relative w-full pb-[56.25%] h-0">
              {url.includes("youtube.com") ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={url}
                  title={`YouTube video player ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img
                    className="absolute top-0 left-0 w-full h-full rounded-lg object-cover cursor-pointer"
                    src={url}
                    alt={`Project image ${index + 1}`}
                  />
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
