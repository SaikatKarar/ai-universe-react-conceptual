import React from 'react'

function SingleData(props) {
    console.log(props.singleData);
    const { name, description, features, published_in, image } = props.singleData;
    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure><img className="w-full h-64" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default SingleData