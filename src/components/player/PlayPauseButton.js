import { CircularProgress, IconButton } from "@material-ui/core/";
import {
  Pause, PauseCircleFilled, PlayArrow, PlayCircleFilled
} from "@material-ui/icons/";
import React from "react";

const PlayPauseButton = ({ player, audioState, minimized }) => {
  const togglePlayPause = e => {
    if (audioState === "playing") {
      player.pause();
    } else if (audioState === "paused") {
      player.play();
    }
    e.stopPropagation();
  };

  const showPlayPause = () => {
    if (audioState === "playing") {
      // if the state will be minimized then we will return the nromal pause button
      if (minimized) {
        return <Pause style={{ fontSize: "3em", opacity: ".8" }} />;
      }
      return <PauseCircleFilled style={{ fontSize: "4em" }} color="primary" />;
    } else if (audioState === "paused" || audioState === "loaded") {
      if (minimized) {
        return <PlayArrow style={{ fontSize: "3em", opacity: ".8" }} />;
      }
      return <PlayCircleFilled style={{ fontSize: "4em" }} color="primary" />;
    } else if (audioState === "loading") {
      return <CircularProgress />;
    }
  };

  return (
    <IconButton
      size="small"
      color={minimized ? "secondary" : "primary"}
      aria-label="Pause"
      onClick={togglePlayPause}
      disableFocusRipple={true}
      disableRipple={true}
    >
      {showPlayPause()}
    </IconButton>
  );
};

export default PlayPauseButton;
