import axios from "axios";
import Home from './ApiKey';
import  './Api.scss';
import { useState,useEffect } from "react";
const url='https://api.spaceflightnewsapi.net/v3/articles';
const Api = () => {
    const [data,setData]=useState([])
    const [searchTitle, setSearchTitle] = useState('')
    
    const fetchData= async()=>{
const response=await axios.get(url)
setData(response.data);
    }
    useEffect(()=>{
        fetchData()
    },[])
    const filteredData = data.filter((value) => {
        if (searchTitle === '') {
            return value;
        } else if (value.title.toLowerCase().includes(searchTitle.toLowerCase())) {
            return value;
        }
    }).map((news) => (
        <Home key={news.id} id={news.id} data={news.publishedAt} title={news.title} img={news.imageUrl} summary={news.summary} />
    ));
  return (
    <div>
{filteredData
}
    </div>
  )
}

export default Api;