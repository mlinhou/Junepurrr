import "./socials.scss"

export default function Socials() {

    const data = [
        {
          id: 1,
          icon: "assets/twitterBlue.png",
          desc:
            "Twitter",
        },
        {
          id: 2,
          icon: "assets/instagram.png",
          desc:
            "Instagram",
          featured: true,
        },
        {
          id: 3,
          icon: "assets/discord.png",
          desc:
            "Discord",
        },
      ];

    return (
        <div className="socials" id="socials">
            <h1>Follow Me</h1>
            <div className="container">
                {data.map((d)=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img className="icon" 
                        src= {d.icon}
                        alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
