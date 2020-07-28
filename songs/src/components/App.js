import React from "react";
//import { selectSong } from "../actions"; //imported from the index.js file inside the actions folder
import SongList from "./SongList";
import SongDetail from "./SongDetails";
import SongDetails from "./SongDetails";
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
