"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { landingImages } from "@/content/landing/images";
import { trackEvent } from "@/lib/analytics";

/** Public Relicomp Elevators YouTube video */
const YOUTUBE_ID = "rinimp2-YEA";

export function LandingVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="lp-video" id="lp-video">
      <div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow">
            <span className="btn-dot">V</span>See it in motion
          </p>
          <h2>Watch a Relicomp Home Elevator</h2>
          <p className="lead">
            Cabin finishes, smooth travel, doors and real home installations.
            See what Bangalore families get when they choose local manufacturing.
          </p>
        </div>

        <div className="lp-video-frame">
          {playing ? (
            <iframe
              title="Relicomp home elevator video"
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="lp-video-iframe"
            />
          ) : (
            <button
              type="button"
              className="lp-video-poster"
              onClick={() => {
                setPlaying(true);
                trackEvent("video_play", {
                  page: "home-elevators-bangalore",
                  video_id: YOUTUBE_ID,
                });
              }}
              aria-label="Play home elevator video"
            >
              <Image
                src={landingImages.homeElevator6}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="lp-video-poster-img"
              />
              <span className="lp-video-poster-shade" aria-hidden />
              <span className="lp-video-play-btn" aria-hidden>
                <Play className="h-7 w-7 fill-current" />
              </span>
              <span className="lp-video-caption">
                Home elevator tour · ~1 min
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
