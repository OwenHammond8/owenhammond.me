"use client";

import React, { useState } from "react";
import { BiChevronUp } from "react-icons/bi";

interface ProjectCardProps {
  title: string;
  description: string;
  youtubeUrl: string | string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  youtubeUrl,
}) => {
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
      <hr className="my-6 border-[#6e6e6e] w-full border-1" />
      {isExpanded && (
        <>
          <p className="mb-6">{description}</p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {youtubeUrls.map((url, index) => (
              <div key={index} className="relative md:w-full pb-[56.25%] h-0">
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
      )}
    </div>
  );
};

export default ProjectCard;
