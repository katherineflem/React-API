import React from 'react';

const PeopleCard = (props) => {
    return (
        <>
            <section className="row d-flex justify-content-center">
                <article className="col-md-6">
                    <div className="card mb-4 border-info">
                        <div className="card-header bg-dark text-white text-center">
                            <h4>{props.person.name}</h4>
                        </div>
                        <ul className="card-body">
                            <li>{props.person.age}</li>
                            <li>{props.person.gender}</li>
                            <li>
                            <a href={props.person.url}>{props.person.url}</a>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
        </>)

}

export default PeopleCard

