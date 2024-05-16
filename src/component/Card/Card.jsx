import React, { useEffect, useState } from 'react'
import SingleData from '../SingleData/SingleData';

function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("https://openapi.programming-hero.com/api/ai/tools")
            const value = await res.json()
            setData(value.data.tools)
        }
        loadData()
    }, [])
    return (
        <div className='mt-7 flex flex-wrap justify-center gap-6'>
            {
                data.map((singleData) => {
                    // console.log(singleData);
                    return <SingleData singleData={singleData} />
                })
            }
        </div>
    )
}

export default Card