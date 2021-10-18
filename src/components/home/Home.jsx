import "./home.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Home() {

    const textRef = useRef(); /*This is the animation for ityped*/

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500, 
            backSpeed: 60,
            strings: ['Artist', 'Content Creator', 'Coffee Lover'],
        });
    }, []); /*End animation for ityped*/

    return (
        <div style={{backgroundImage: "url(assets/mountains.jpg)", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} className="home" id="home">

                <div className="wrapper">
                    <h1>Junepurrr</h1>
                    <h2><span ref={textRef}></span></h2> {/*ityped*/}
                </div>
                <a href="#works">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
    )
}
