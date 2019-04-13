import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            hasLoaded: false
        }
    }
    //this runs after the render
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json()) //looks at the body of the Response object and pulls the info we asked for and converst to json format
            .then(obj => {
                console.log(obj);
                this.setState({ hasLoaded: true, films: obj })
            })
    }

    render() {
        return (
            <main className="container bg-light">
                <h3 className="text-center">Retreiving APIs</h3>
                <div className="card-wrapper">
                    <section className="row">
                        <article className="col-md-6">
                        <Cards films={this.state.films}/>

                        </article>
                    </section>
                </div>
            </main>
        )
    }
}

export default App