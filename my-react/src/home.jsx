
import firstImage from "./1 card image.jpg";
import secondImage from "./2 card image.jpg";
import thirdImage from "./3 card image.jpg";
import forthImage from "./4 card image.jpg";
import fifthImage from "./5 card image.jpg";
import sixthImage from "./6 card image.jpg";
import seventhImage from "./7 card image.jpg";
import eightImage from "./8 card image.jpg";
import nineImage from "./9 card image.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';







function Home() {
  return (
    <>
    <div>
  <h1>PUBLIC PAGE IS MINE</h1>
</div>

<div className="maincontainer">

  <div className="cardd-item">
    <div className="cardd">
      <img src={firstImage} alt="demo" className="cardd-image" />
    </div>
    <p className="text">Main Home</p>
  </div>

  <div className="cardd-item">
    <div className="cardd">
      <img src={secondImage} alt="demo" className="cardd-image" />
    </div>
    <p className="text">Floating Portfolio</p>
  </div>

  <div className="cardd-item">
    <div className="cardd">
      <img src={thirdImage} alt="demo" className="cardd-image" />
    </div>
    <p className="text">Portfolio Pinterest</p>
  </div>

  <div className="cardd-item">
    <div className="cardd">
      <img src={forthImage} alt="demo" className="cardd-image" />
    </div>
    <p className="text">Animated Slider</p>
  </div>

  <div className="cardd-item">
    <div className="cardd">
      <img src={fifthImage} alt="demo" className="cardd-image" />
    </div>
    <p className="text">Portfolio Metro</p>
  </div>

  <div className="cardd-item">
    <div className="cardd">
      <img src={sixthImage} alt="demo" className="cardd-image" />
    </div>
    <p className="text">Portfolio Gallery</p>
  </div>

  <div className="cardd-item">
    <div className="cardds">
      <img src={seventhImage} alt="demo" className="cardd-images" />
    </div>
    <p className="text">Interactive Links</p>
  </div>

  <div className="cardd-item">
    <div className="cardd">
      <img src={eightImage} alt="demo" className="cardd-image" />
    </div>
    <p className="text">Split Slider Showcase</p>
  </div>

  <div className="cardd-item">
    <div className="cardds">
      <img src={nineImage} alt="demo" className="cardd-images" />
    </div>
    <p className="text">Portfolio Carousel</p>
  </div>

    <div className="cardd-item">
    <div className="cardd">
      <img src={firstImage} alt="demo" className="cardd-image" />
    </div>
    <p className="text">Main Home</p>
  </div>


</div>
<br />
<br />
<br />
<div className="sec-main-div">
  <h2>Your brand new folio with aprofessional layout 
    <br />
    collection and quite a cheerful <span className="imp-text">personality!</span></h2>

<br />
<br />
<button className=" primary">Purchase</button>


</div>
    </>



  )   
}

export default Home
