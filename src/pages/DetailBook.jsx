import React from 'react'
import DetailBookBox from '../components/DetailBookBox'
import DetailBoxAll from '../components/DetailBoxAll'
import HomeContent from '../components/HomeContent'

const DetailBook = () => {

  const dataBook = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        detail: "A novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.",
        date: "1925",
        size: "15 x 22 cm",
        page: "180",
        categories: "Classic, Fiction",
        url: "https://i.pinimg.com/originals/a1/f8/87/a1f88733921c820db477d054fe96afbb.jpg"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        detail: "A dystopian novel about a totalitarian regime that uses surveillance and mind control.",
        date: "1949",
        size: "13 x 20 cm",
        page: "328",
        categories: "Dystopian, Political Fiction",
        url: "https://edit.org/images/cat/book-covers-big-2019101610.jpg"
    }
  ]

  return (
    <div> 
        <DetailBookBox data={dataBook}/>
        <DetailBoxAll data={dataBook}/>
   </div>
  
    
  )
}

export default DetailBook