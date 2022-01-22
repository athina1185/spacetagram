import React, { useEffect, useState } from "react";
import "./Card.css";

export default function Cards({ spaceData, index }) {
  const { url, title, date, explanation } = spaceData;
  const [like, setLike] = useState(false);

  useEffect(() =>{
      const data = localStorage.getItem(index);
      if (data) {
          setLike(JSON.parse(data));
      }
  }, []);

  return (
    <>
    <div key={title} className="card">
      
      <img src={url} alt={title} className="card__img" />
      <div className="card__details">
        <h2>{title}</h2>
        <h4>{date}</h4>
        <p>{explanation}</p>
      </div>
      <div>
        
        <span
          onClick={() => {
            setLike(!like);
            localStorage.setItem(index, JSON.stringify(!like));
          }}
          style={{
            color: like ? "#FF0000" : "#fff"
          }}
        >
          <i className="fab fa-gratipay fa-2x"></i>
        </span>
      </div>
    </div>
    <div className="animation-area"> 
         <ul className="box-area">
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
         </ul>

    </div>

  
  
    </>

  );
}
