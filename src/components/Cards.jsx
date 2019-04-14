import React from 'react'

const Cards = (props) => {
    return (
        <>
            <section className="row">
            
            <article className="col-md-6">
                <div className="card mb-4 border-info">
                    <div className="card-header bg-dark text-white text-center">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="card-body">
                        <p>{props.description}</p>
                    </div>
                </div>
            </article>
            </section>
        </>)
}
export default Cards

