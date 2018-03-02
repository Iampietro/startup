import React, { Component } from 'react';

class AddMovie extends Component {

    constructor(props){
        super(props);
        this.state = {
            movie: {
                title: 'Write the movie title here',
                year: 0,
                duration: 0
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const movie = this.state.movie;
        const target = event.target; // the input that triggered the event
        const name = target.name;
        movie[name] = target.value;

        this.setState({
          movie: movie
        });
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Movie Title:
              <input
                name="title"
                type="text"
                value={this.state.movie.title}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Movie Year
              <input
                name="year"
                type="number"
                value={this.state.movie.year}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Movie Duration:
              <input
                name="duration"
                type="number"
                value={this.state.movie.duration}
                onChange={this.handleInputChange} />
            </label>
            <button type="submit" value="Submit"
             onClick={() => this.props.onClick(this.state.movie)}>
                Save
             </button>
          </form>
        );
    }
}

export default AddMovie