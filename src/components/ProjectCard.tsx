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
  youtubeUrl: string | string[]; // Allow youtubeUrl to be a string or an array of strings
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Ensure youtubeUrl is always an array
  const youtubeUrls = Array.isArray(youtubeUrl) ? youtubeUrl : [youtubeUrl];

  return (
    <div className="inline-block min-w-full p-6 rounded-lg border-2 border-foreground">
      <div className="flex justify-between">
        <h3 className="font-semibold mb-4">{title}</h3>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <BiChevronUp
            className="size-8"
            style={{
              transform: isExpanded ? "rotateX(180deg)" : "",
            }}
          />
        </button>
      </div>

      <p className="max-w-full">{description}</p>

      {isExpanded && (
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
                <img
                  className="absolute top-0 left-0 w-full h-full rounded-lg object-cover cursor-pointer"
                  src={url}
                  alt={`Project image ${index + 1}`}
                  onClick={() => setModalImage(url)}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={modalImage}
              alt="Modal"
              className="rounded-lg max-w-full max-h-full"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
