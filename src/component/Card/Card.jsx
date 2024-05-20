import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

function Card({ data, showAll, setuniqueId, singleData }) {
    // console.log(data);
    return (
        <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-28 my-8'>
            {
                data.slice(0, showAll ? 12 : 6).map((singleData) => {
                    // console.log(singleData);
                    return <SingleData singleData={singleData} key={singleData.id} setuniqueId={setuniqueId} />
                })
            }
            <Modal singleData={singleData} />
        </div>
        // {2:12:00}
    )
}

export default Card