import React from "react";


function Card({ imgSrc, mName, Ref, info1,info2,YRef }) {
  return (
    <>
      <div className="card">
        <img src={imgSrc} alt="myPic" className="card_img" />
        <div className="card_category">
          <span className="card_category">{mName}</span>
          <br />
          <p style={{ color: "green", fontSize: "small" }}>
          ✅ Available on {info2}
          </p>
          <div style={{display:"flex", gap:"20px"}}>
          <button>
            <a href={Ref} target="_blank">
              Watch Now
            </a>
          </button>
          <button style={{backgroundColor:"#FF6868"}}>
            <a href={YRef} target="_blank">
              Watch Trailer
            </a>
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
