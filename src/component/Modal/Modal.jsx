import React from 'react'

function Modal(props) {
    const { description, features, image_link } = props.singleData;
    // console.log(features);
    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="card lg:card-side bg-base-100 shadow-xl">

                        <div className="card-body">
                            <h2 className="card-title">{description ? description : "Not Found"}</h2>
                        </div>
                        <figure><img className='w-full h-64' src={image_link && image_link[0]} alt="Album" /></figure>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Modal