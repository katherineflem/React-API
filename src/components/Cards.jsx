import React, { Component } from 'react'

const Cards = (props) => {
    return(
    <div className="card border-info">
        <div className="card-header bg-dark text-white text-center">
            <h4>{props.films.id}</h4>
        </div>
        <div className="card-body">
            <p>this is where the film description should go</p>
        </div>
    </div>
    )
}
export default Cards