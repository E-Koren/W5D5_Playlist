import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      artist: "",
      genre: "",
      rating: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      id: this.props.songs.length + 1,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="input-fields">
        <input
          placeholder="Song Name"
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input
          placeholder="Artist Name"
          type="text"
          name="artist"
          value={this.state.artist}
          onChange={this.handleChange}
        />

        <select
          onChange={this.handleChange}
          name="genre"
          value={this.state.genre}
        >
          <option value="">--Select a genre--</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="Pop">Pop</option>
          <option value="Dubstep">Dubstep</option>
        </select>

        <select
          onChange={this.handleChange}
          name="rating"
          value={this.state.rating}
        >
          <option value="">--Rate this song--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button onClick={() => this.props.inputHandler(this.state)}>
          Add song
        </button>
      </div>
    );
  }
}

export default Input;
