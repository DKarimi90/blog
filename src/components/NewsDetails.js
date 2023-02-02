import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'

function NewsDetails() {
    const {title} = useParams()
    const {news, isPending, error } = useFetch (`https://saurav.tech/NewsAPI/everything/cnn.json/` + title)

  return (
    <div className='news-details'>
        {isPending && <div>Loading...</div>}
        {news && 
        <article>
            <h4>{news.author}</h4>
        </article>
        }
        {error && <div className='error'>{error}</div>}
    </div>
  )
}

export default NewsDetails