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


    //have 2 buttons, one to load films and one to load people (new fetch endpoint)
    //display props name, age, gender and link to persons json response that will open in new tab
  
       handlefilms=()=> this.state.films.map((index) => {
            return <Cards films={this.state.films}
                key={index}
                title={index.title}
                description={index.description} />
        })

    handlePeople=()=> this.state.people.map((index) => {
            return <People people={this.state.people}
                key={index}
                name={index.name} age={index.age}
                gender={index.gender}
                url={index.url} />

        })

    handleToggle = () => {
        if (this.state.filmsHaveLoaded === true) {
            handleFilms();

        } else {
            (this.state.peopleHaveLoaded === false)
            this.handlePeople();
        }


        render() {
            return (
                <div>
                    {this.handleToggle()}
                    <h3 className="text-center">Retreiving APIs</h3>
                    <button onClick={e => this.setState({ films: this.state.films, filmsHaveLoaded: true })} className="mb-4">Load Films</button>
                    <button onClick={e => this.setState({ people: this.state.people, peopleHaveLoaded: true })} className="mb-4">Load People</button>
                </div>)
        
    }}
}


export default App


