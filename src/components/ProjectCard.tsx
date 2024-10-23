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
  youtubeUrl: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="inline-block min-w-[500px] p-4 rounded-lg border-2 border-foreground">
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

      <p className="max-w-[350px]">{description}</p>

      {isExpanded && (
        <div className="mt-12">
          <iframe
            className="rounded-lg w-full min-h-[300px]"
            src={youtubeUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
