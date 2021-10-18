import "./works.scss"
import React, { useState } from "react";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            title: "SubZero Season 1",
            
            img:
              "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1604957832l/55871981.jpg",
          },
          {
            id: "2",
            title: "SubZero Season 2 ",
            
            img:
              "https://heraldjournalism.com/wp-content/uploads/2020/11/EHnTw95W4AAZ8NV.jpg",
          }
          
    ];

    const handleClick = (way) => { /*checks whether to go left or right*/
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
        setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0);
    };
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}> {/*this moves the slides by 100vw*/}
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                                <h2>{d.title}</h2>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()} />
        </div>
    )
}
