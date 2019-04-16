import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise'
import FilmCard from './FilmCard'
import PeopleCard from './PeopleCard'
import BackButton from './BackButton';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            people: [],
            peopleHaveLoaded: false,
            filmsHaveLoaded: false

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
        this.setState({
            filmsHaveLoaded: true,
            peopleHaveLoaded: false
        });
    }

    handleLoadPeople = () => {
        this.setState({
            filmsHaveLoaded: false,
            peopleHaveLoaded: true

        })
    }

    handleBackButton = () => {
        return (
            <button onClick={this.setState({ filmsHaveLoaded: false, peopleHaveLoaded: false })}>Back</button>
        )
    }

    //have 2 buttons, one to load films and one to load people (new fetch endpoint)
    //display props name, age, gender and link to persons json response that will open in new tab

    render() {
        if (this.state.filmsHaveLoaded === true && !this.state.peopleHaveLoaded) {
            return this.state.films.map((film) => {
                return <><FilmCard film={film} key={film.id} />
                    <BackButton reset={this.state} /></>


            })

        } else if (!this.state.filmsHaveLoaded === true && this.state.peopleHaveLoaded) {
            return (this.state.people.map((person) => {
                return <PeopleCard person={person} key={person.id} />
            })
            )
        } else if (this.state.filmsHaveLoaded === true || this.state.peopleHaveLoaded === true) {
            return <button onClick={this.setState({ filmsHaveLoaded: false, peopleHaveLoaded: false })}>Back</button>

        } else {

            return (
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="logo"></img>
                            <h3 className="text-center">Retreiving APIs</h3>
                            <div className="row d-flex justify-content-center">
                                <button onClick={this.handleLoadFilms}>Load Films</button>
                                <button onClick={this.handleLoadPeople}>Load People</button>
                            </div>
                        </div>
                    </div>
                </div>

            )

        }
    }
}







export default App


