import React, { Component } from 'react';
import '../App.css';

class Edit  extends Component {

    constructor(props){
        super(props);
        this.state = {
            movie: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    canBeSubmitted() {
        const { title, year, duration } = this.movie;
        return (
            title.length > 0 &&
            year.length > 0 &&
            duration.length > 0
        )
    }

    handleInputChange(event) {
        const movie = this.state.movie;
        const target = event.target;    // the input that triggered the event
        const name = target.name;
        movie[name] = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
          movie: movie
        });

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    componentDidMount() {
        if(this.props.movie) {
            this.setState({
                movie: this.props.movie
            });
        }
    }

    render() {
        const movie = this.state.movie;
        if(movie !== null) {
            return (
              <div className="prettyForm">
                  <div className="prettyForm-heading">
                    <h1>Editing Movie</h1>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      <span>Title:</span>
                      <input
                        placeholder="Eternal sunshine of the spotless mind"
                        className="input-field"
                        name="title"
                        type="text"
                        value={this.state.movie.title}
                        onChange={this.handleInputChange} />
                    </label>
                    <label>
                      <span>Year:</span>
                      <input
                        placeholder="2004"
                        className="input-field"
                        name="year"
                        type="number"
                        value={this.state.movie.year}
                        onChange={this.handleInputChange} />
                    </label>
                    <label>
                      <span>Duration:</span>
                      <input
                        placeholder="108"
                        className="input-field"
                        name="duration"
                        type="number"
                        value={this.state.movie.duration}
                        onChange={this.handleInputChange} />
                    </label>
                    <label>
                      <span>Favourite?</span>
                      <input
                        className="forCheckbox"
                        name="checked"
                        type="checkbox"
                        checked={this.state.movie.checked}
                        onChange={this.handleInputChange} />
                    </label>
                    <div id="btns">
                        <button type="button" value="Submit" className="btnSubmit"
                        disabled={!this.canBeSubmitted}
                         onClick={() => this.props.onClick(this.state.movie)}>
                            Edit
                         </button>
                    </div>
                  </form>
              </div>
            );
        } else {
            return null;
        }
    }

}

export default Edit;