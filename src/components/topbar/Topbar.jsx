import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}> {/*if menuOpen and active are true*/}
            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <img src="assets/twitterBlue.png" alt="twitter img" />
                        <img src="assets/instagram.png" alt="instagram img" />
                        <img src="assets/discord.png" alt="discord img" />
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}> {/*when clicked, flip false to true or vice versa */}
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
