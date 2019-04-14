import React from 'react';

const People = (props) => {
    return (
        <>
            <section className="row">

                <article className="col-md-6">
                    <div className="card mb-4 border-info">
                        <div className="card-header bg-dark text-white text-center">
                            <h4>{props.name}</h4>
                        </div>
                        <ul className="card-body">
                            <li>{props.age}</li>
                            <li>{props.gender}</li>
                            <li>{props.url}</li>
                        </ul>
                    </div>
                </article>
            </section>
        </>)

}
  
export default People

