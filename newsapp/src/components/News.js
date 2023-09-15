import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
  let[loading, setLoading] = useState(false)
  let[articles, setArticles] = useState([])
  let[page, setPage] = useState(1)
  let[totalResults, setTotalResults] = useState(0)
  let[length, setLength] = useState(0)
  

  const  UpdateNews= async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setLoading(false);
    setArticles(parsedata.articles);
    setLength(
      parsedata.totalResults);
    props.setProgress(100);
  }
  useEffect(()=>{
    UpdateNews();
  }, [])

 const fetchData = async () => {
   setLoading(true);
   let response = await fetch(
     `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}`
     );
     setPage(page + 1);
    let parsedata = await response.json();
    setLength(
      parsedata.totalResults);
     setArticles(articles.concat(parsedata.articles));
      setLoading(false);
    };
  

    return (
      <div id="cunt">
        <div className="container my-5 text-center">
          <div id="head">
            <h2>Top HeadLines</h2>
          </div>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={length !== articles.length}
            loader={loading && <Spinner />}
          >
            <div id="akm" className="row mx-3 my-2">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title == null ? "" : element.title}
                      urlToImage={element.urlToImage}
                      description={
                        element.description == null ? "" : element.description
                      }
                      url={element.url}
                      author={element.author ? element.author : "Unknown"}
                      publishedAt={new Date(element.publishedAt).toUTCString()}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        
        </div>
      </div>
    );
  }

export default News