import {useState, useEffect} from 'react'

function useFetch(url) {

    const [news, setNews] = useState(null)
    const [isPending, setIsPending]= useState(true) 
    const [error, setError] = useState(null)


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error("Resource not available!")
                }
                return res.json()})
            .then(data => {
                const toData = Object.values(data.articles)
                setNews(toData)
                console.log(toData)
                setIsPending(false)
                setError(null)
            })
            .catch((err) => {
                setError(err.message)
                setIsPending(false)
            })
        })
       
    }, [url])

  return {news, isPending, error}
}

export default useFetch