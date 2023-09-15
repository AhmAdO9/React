import React from "react";

const NewsItem=(props)=>{
 
  
    let {title,description, urlToImage, url, author, publishedAt} = props;
    return (
      <div>
        <div className="card">
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" > 
              {description}
            </p>
            <p>By {author} on {publishedAt}</p>
            <a href={url} className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem

