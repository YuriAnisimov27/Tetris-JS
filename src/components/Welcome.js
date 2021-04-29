import React, {useEffect, useState} from "react";
// import imagesData from './data/images.json';

const Welcome = () => {
  const [imagesData, setImagesData] = useState([])

  const loadImagesData = async () => {
    // Query the API Gateway
    // Assign response data to our state variable
    const res = await fetch('https://lf5r8pz76a.execute-api.us-east-1.amazonaws.com/gallery_images')
    return (await res).json()
  }

  useEffect(() => {
    // Load the menu links data from the API Gateway
    loadImagesData()
      .then(data => setImagesData(data))

    // Other side effects
  }, [])

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {
            imagesData.map(image => {
              return (
                <img className={image.className} src={image.src} alt={image.alt} key={image.src}/>
              )
            })
          }
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood
          has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food, and
          good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website
          and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
      </article>
    </div>
  )
}

export default Welcome;
