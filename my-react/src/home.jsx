
import firstImage from "./1 card image.jpg";
import secondImage from "./2 card image.jpg";
import thirdImage from "./3 card image.jpg";
import forthImage from "./4 card image.jpg";
import fifthImage from "./5 card image.jpg";
import sixthImage from "./6 card image.jpg";
import seventhImage from "./7 card image.jpg";
import eightImage from "./8 card image.jpg";
import nineImage from "./9 card image.jpg";







function Home() {
  return (
    <>
    <div>
  <h1>PUBLIC PAGE IS MINE</h1>
</div>

<div className="maincontainer">

  <div className="card-item">
    <div className="card">
      <img src={firstImage} alt="demo" className="card-image" />
    </div>
    <p className="text">Floating Portfolio</p>
  </div>

  <div className="card-item">
    <div className="card">
      <img src={secondImage} alt="demo" className="card-image" />
    </div>
    <p className="text">Floating Portfolio</p>
  </div>

  <div className="card-item">
    <div className="card">
      <img src={thirdImage} alt="demo" className="card-image" />
    </div>
    <p className="text">Floating Portfolio</p>
  </div>

  <div className="card-item">
    <div className="card">
      <img src={forthImage} alt="demo" className="card-image" />
    </div>
    <p className="text">Floating Portfolio</p>
  </div>

  <div className="card-item">
    <div className="card">
      <img src={fifthImage} alt="demo" className="card-image" />
    </div>
    <p className="text">Floating Portfolio</p>
  </div>

  <div className="card-item">
    <div className="card">
      <img src={sixthImage} alt="demo" className="card-image" />
    </div>
    <p className="text">Floating Portfolio</p>
  </div>

  <div className="card-item">
    <div className="card">
      <img src={seventhImage} alt="demo" className="card-image" />
    </div>
    <p className="text">Floating Portfolio</p>
  </div>

  <div className="card-item">
    <div className="card">
      <img src={eightImage} alt="demo" className="card-image" />
    </div>
    <p className="text">Floating Portfolio</p>
  </div>

  <div className="card-item">
    <div className="cards">
      <img src={nineImage} alt="demo" className="card-images" />
    </div>
    <p className="text">Floating Portfolio</p>
  </div>

</div>

    </>



  )   
}

export default Home
