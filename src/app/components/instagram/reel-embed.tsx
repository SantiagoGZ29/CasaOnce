"use client";

import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { siteConfig } from "@/app/data/site";

function reelEmbedUrl(reelUrl: string): string | null {
  const match = reelUrl.match(/\/reel\/([A-Za-z0-9_-]+)/);
  if (!match) return null;
  return `https://www.instagram.com/reel/${match[1]}/embed/`;
}

export function ReelEmbed() {
  const [loaded, setLoaded] = useState(false);
  const embedUrl = reelEmbedUrl(siteConfig.reelUrl);

  return (
    <figure className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-olive-dark">
      {/* Fallback: se muestra hasta que el iframe de Instagram cargue */}
      <div
        className={[
          "absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 p-8 text-center transition-opacity duration-500",
          loaded ? "pointer-events-none opacity-0" : "opacity-100",
        ].join(" ")}
        aria-hidden={loaded}
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-white/15 text-white">
          <Play className="size-7 fill-white" />
        </span>
        <p className="font-script text-3xl leading-tight text-white">
          Mira nuestro reel
        </p>
        <a
          href={siteConfig.reelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-olive transition-colors hover:bg-cream-dark"
        >
          Ver en Instagram
          <ExternalLink aria-hidden="true" className="size-4" />
        </a>
      </div>

      {embedUrl ? (
        <iframe
          src={embedUrl}
          title="Reel de Casa Once en Instagram"
          loading="lazy"
          allowFullScreen
          onLoad={() => setLoaded(true)}
          className="relative z-0 aspect-[9/16] h-[70vh] max-h-[560px] w-full border-0"
        />
      ) : null}

      <figcaption className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 bg-black/45 px-4 py-3 text-xs text-white backdrop-blur-sm">
        <span className="font-semibold">{siteConfig.instagramHandle}</span>
        <a
          href={siteConfig.reelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 font-bold uppercase tracking-wide transition-colors hover:bg-white/25"
        >
          Ver reel
          <ExternalLink aria-hidden="true" className="size-3.5" />
        </a>
      </figcaption>
    </figure>
  );
}