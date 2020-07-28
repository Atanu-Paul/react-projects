import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  console.log(selectedSong);
  if (!selectedSong) {
    return <div>Select Song</div>;
  }
  var showArtist = () => {
    if (!selectedSong.artist) {
      return <p>Artist : NA</p>;
    } else {
      return <p>Artist: {selectedSong.artist}</p>;
    }
  };

  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">Details of: {selectedSong.title}</div>
          <div className="description">
            {showArtist()}
            Duration: {selectedSong.duration}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
