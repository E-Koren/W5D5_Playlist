import React from "react";
import Input from "./Input";
import List from "./List";
import Filter from "./Filter";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      playlistSongs: [
        {
          id: 1,
          title: "Monsoon",
          artist: "Tokio Hotel",
          genre: "Rock",
          rating: "2",
        },
        {
          id: 2,
          title: "In The End",
          artist: "Linkin Park",
          genre: "Rock",
          rating: "5",
        },
        {
          id: 3,
          title: "My Way",
          artist: "Frank Sinatra",
          genre: "Jazz",
          rating: "5",
        },
        {
          id: 4,
          title: "Zonnestralen",
          artist: "Acda en de Munnik",
          genre: "Pop",
          rating: "4",
        },
      ],
    };
  }

  addSong = (item) => {
    this.setState({
      playlistSongs: [...this.state.playlistSongs, item],
    });
  };

  removeSong = (event) => {
    const removedSong = this.state.playlistSongs.filter(
      (item) => item !== event
    );
    this.setState({ playlistSongs: removedSong });
  };

  filterGenre = (event) => {
    const filteredSongs = this.state.playlistSongs.filter(
      (songs) => songs.genre === event
    );
    this.setState({ playlistSongs: filteredSongs });
  };

  filterRating = (event) => {
    const filteredRating = this.state.playlistSongs.filter(
      (songs) => songs.rating === event
    );
    this.setState({ playlistSongs: filteredRating });
  };

  render() {
    return (
      <div>
        <h1>Wincs Lil' Playlist</h1>
        <Input inputHandler={this.addSong} songs={this.state.playlistSongs} />
        <Filter
          filterGenre={this.filterGenre}
          filterRating={this.filterRating}
        />
        <List songs={this.state.playlistSongs} removeSong={this.removeSong} />
      </div>
    );
  }
}

export default Container;
