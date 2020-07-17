import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      rating: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="filters">
        <label>Filter by Genre</label>
        <select
          onChange={this.handleChange}
          name="filter"
          value={this.state.filter}
        >
          <option value="">--Select a filter--</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="Pop">Pop</option>
          <option value="Dubstep">Dubstep</option>
        </select>

        <button onClick={() => this.props.filterGenre(this.state.filter)}>
          Apply filter
        </button>
        <br />

        <label>Filter by Rating</label>
        <select
          onChange={this.handleChange}
          name="rating"
          value={this.state.rating}
        >
          <option value="">--Select a filter--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button onClick={() => this.props.filterRating(this.state.rating)}>
          Apply filter
        </button>
      </div>
    );
  }
}

export default Filter;
