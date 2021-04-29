import React, {useEffect, useState} from "react";
// import menuLinksData from './data/menu_links.json';

const Header = () => {
  const [menuLinksData, setMenuLinksData] = useState([])

  const loadMenuLinksData = async () => {
    // Query the API Gateway
    // Assign response data to our state variable
    const res = await fetch('https://lf5r8pz76a.execute-api.us-east-1.amazonaws.com/menu_links')
    return (await res).json()
  }

  useEffect(() => {
    // Load the menu links data from the API Gateway
    loadMenuLinksData()
      .then(data => setMenuLinksData(data))

    // Other side effects
  }, [])

  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow"/></a></p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
          <ul>
            {
              menuLinksData.map(link => {
                return (
                  <li key={link.text}>
                    <a className={`icon ${link.class}`} href={link.href}>
                      <span>{link.text}</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
