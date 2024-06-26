import React from 'react'

function SingleData(props) {
    // console.log(props.singleData);
    const { id, name, description, features, published_in, image } = props.singleData;

    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Features</h2>

                {features.map((feature, i) => <p key={i}>{i + 1}. {feature}</p>)}
                <hr className='border-2 border-orange-500 mr-4' />
                <h1 className='text-xl font-bold'>{name}</h1>

                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>

                        </span>
                        <p>{published_in}</p>
                    </div>
                    <div>
                        <label onClick={() => props.setuniqueId(id)} className='cursor-pointer' htmlFor="my_modal_6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleData