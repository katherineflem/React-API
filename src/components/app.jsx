import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise'
import Cards from './Cards'
import People from './People'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            hasLoaded: null,
            people: []

        }
    }
    //this runs after the render
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json()) //looks at the body of the Response object and pulls the info we asked for and converst to json format
            .then(film => { this.setState({ films: film }) })
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(person => { this.setState({ people: person }) })
    }
    handleLoadFilms = () => {
        this.setState({ hasLoaded: this.state.films })
    }

    handleLoadPeople = () => {
        this.setState({ hasLoaded: this.state.people })
    }

    //have 2 buttons, one to load films and one to load people (new fetch endpoint)
    //display props name, age, gender and link to persons json response that will open in new tab


    render() {
        if (this.state.hasLoaded === this.state.films) {
            this.state.films.map((index) => {
                return <Cards films={this.state.films}
                    key={index}
                    title={index.title}
                    description={index.description} />
            })

        } else if
            (this.state.hasLoaded === this.state.people) {

            this.state.people.map((index) => {
                return <People people={this.state.people}
                    key={index}
                    name={index.name} age={index.age}
                    gender={index.gender}
                    url={index.url} />
            })
        } else {
            return (
                <>
                    <h3 className="text-center">Retreiving APIs</h3>
                    <button onClick={e => this.handleLoadFilms} className="mb-4">Load Films</button>
                    <button onClick={e => this.handleLoadPeople} className="mb-4">Load People</button>
                </>)
        }
    }

}







export default App


