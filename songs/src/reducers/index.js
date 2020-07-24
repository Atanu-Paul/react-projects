//the reducers index.js file
import { combineReducers } from "redux";
import { SONG_SELECTED } from "../actions/actionTypes";
// import { selectSong } from "../actions";
const songsReducers = () => {
  //the songs list reducer that has a static array of objects of song names and some more stuff
  return [
    {
      id: 1,
      title: "Gengish Khan",
      duration: "4:05",
    },
    {
      id: 2,
      title: "Waka Waka",
      duration: "4:50",
      artist: "Shakira",
    },
    {
      id: 3,
      title: "Waving Flags",
      duration: "3:10",
    },
    {
      id: 4,
      title: "Beliver",
      duration: "5:00",
      artist: "Imagine Dragons",
    },
  ];
};

const selectedSongReducer = (seletedSong = null, action) => {
  //the reducer to select only one song
  if (action.type === SONG_SELECTED) {
    return action.payload;
  }
  return seletedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer,
});
