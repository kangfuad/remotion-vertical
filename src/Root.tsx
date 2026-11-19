import React from "react";
import { Composition, staticFile } from "remotion";
import {
  CaptionedVideo,
  calculateCaptionedVideoMetadata,
  captionedVideoSchema,
} from "./CaptionedVideo";
import { ShortVideo } from "./ShortVideo";
import { SqlNoSqlVideo } from "./EduSqlNoSql";
import scriptData from "../public/content-script.json";
import storyboardData from "../public/edu-sql/storyboard.json";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 53.6s Cinematic Educational Video: SQL vs NoSQL (Project EDU-SQL-NOSQL-001) */}
      <Composition
        id="SqlVsNoSql"
        component={SqlNoSqlVideo}
        durationInFrames={storyboardData.totalFrames}
        fps={storyboardData.fps}
        width={1080}
        height={1920}
      />

      {/* 29s Vertical Video: Aturan 2 Menit */}
      <Composition
        id="Aturan2Menit"
        component={ShortVideo}
        durationInFrames={scriptData.totalFrames}
        fps={scriptData.fps}
        width={1080}
        height={1920}
        defaultProps={{
          script: scriptData,
        }}
      />

      {/* Default TikTok Captioned Video composition */}
      <Composition
        id="CaptionedVideo"
        component={CaptionedVideo}
        calculateMetadata={calculateCaptionedVideoMetadata}
        schema={captionedVideoSchema}
        width={1080}
        height={1920}
        defaultProps={{
          src: staticFile("sample-video.mp4"),
        }}
      />
    </>
  );
};
