import React, { Component } from 'react';
import '../App.css';

class AddMovie extends Component {

    constructor(props){
        super(props);
        this.state = {
            movie: {
                title: '',
                year: '',
                duration: '',
                checked: false,
                deleted: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        const movie = this.state.movie;
        movie.title = '';
        movie.duration = '';
        movie.year = '';
        movie.checked = false;
        movie.deleted = false;
        this.setState({
            movie: movie
        });
    }

    canBeSubmitted() {
        const { title, year, duration } = this.state.movie;
        return (
            title.length > 0 &&
            year.length > 0 &&
            duration.length > 0
        )
    }

    render() {
        const isEnabled = this.canBeSubmitted();
        return (
          <div className="prettyForm">
              <div className="prettyForm-heading">
                <h1>Have Fun!</h1>
              </div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <span>Title:</span>
                  <input
                    placeholder="Example: The Cube"
                    className="input-field"
                    name="title"
                    type="text"
                    value={this.state.movie.title}
                    onChange={this.handleInputChange} />
                </label>
                <label>
                  <span>Year:</span>
                  <input
                    placeholder="1997"
                    className="input-field"
                    name="year"
                    type="number"
                    value={this.state.movie.year}
                    onChange={this.handleInputChange} />
                </label>
                <label>
                  <span>Duration:</span>
                  <input
                    placeholder="90"
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
                    <button type="submit" value="Submit" className="btnSubmit"
                    disabled={!isEnabled}
                     onClick={() => this.props.onClick(this.state.movie)}>
                        Save
                     </button>
                </div>
              </form>
          </div>
        );
    }
}

export default AddMovie



                
