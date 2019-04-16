import React from 'react'

const FilmCard = (props) => {
    return (
        <>
            <section className="row d-flex justify-content-center">

            <article className="col-md-6">
                <div className="card mb-4 border-info">
                    <div className="card-header bg-dark text-white text-center">
                        <h4>{props.film.title}</h4>
                    </div>
                    <div className="card-body">
                        <p>{props.film.description}</p>
                    </div>
                </div>
            </article>
            </section>
        </>)
}
export default FilmCard

