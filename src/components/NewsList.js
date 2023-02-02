import React from 'react'
import { Link } from 'react-router-dom'

function NewsList( {news, title} ) {
  return (
    <div className='news-list'>
        <h3>{title}</h3>
        {news.map((item, index) => (
            <div key = {index} className="news">
                <Link to ={`/news/${item.title}`} >
                <h4> Written by {item.author}</h4>
                <p>{item.title}</p>
                <p>{item.content}</p>
                <img src = {item.urlToImage}/>
                <p>{item.url}</p>
                </Link>
                </div>
        ))}
    </div>
  )
}

export default NewsList