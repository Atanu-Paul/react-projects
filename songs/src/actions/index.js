//the index.js file of the actions folder
import { SONG_SELECTED } from "./actionTypes";
//action creator
export const selectSong = (song) => {
  //return and action object
  return {
    type: SONG_SELECTED,
    payload: song,
  };
};
