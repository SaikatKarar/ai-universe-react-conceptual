import { useEffect, useState } from 'react'
import './App.css'
import Buttons from './component/Buttons/Buttons'
import Card from './component/Card/Card'
import Header from './component/Header/Header'

function App() {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setuniqueId] = useState(null)

  const handelShowAll = () => {
    setShowAll(true)
  }

  const handleSort = () => {
    const sortedData = data.sort((a, b) => {
      return new Date(a.published_in) - new Date(b.published_in)
    })
    setData([...data, sortedData]);
  }

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data))
  }, [uniqueId])


  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://openapi.programming-hero.com/api/ai/tools")
      const value = await res.json()
      setData(value.data.tools)
    }
    loadData()
  }, [])

  return (
    <>
      <Header />
      <span onClick={handleSort}>
        <Buttons>Shot By Data</Buttons>
      </span>
      <Card data={data} showAll={showAll} setuniqueId={setuniqueId} singleData={singleData} />
      {!showAll && (
        <span onClick={handelShowAll}>
          <Buttons >See More</Buttons>
        </span>
      )}
    </>
  )
}

export default App
