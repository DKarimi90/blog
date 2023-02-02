import NewsList from '../components/NewsList'
import useFetch from '../useFetch';

function Home() {

    const {news, isPending, error } = useFetch("https://saurav.tech/NewsAPI/everything/cnn.json")
   


    
  return (
    <div>
    {isPending && <div className='loading-message'>Loading...</div>}
    {news && <NewsList title = "Compiled News" news ={news}/>}
    {error && <div className='error-message'>{error}</div>}
    </div>
  )
}

export default Home; 