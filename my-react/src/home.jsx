
import firstImage from "./1 card image.jpg";
import secondImage from "./2 card image.jpg";
import thirdImage from "./3 card image.jpg";
import forthImage from "./4 card image.jpg";
import fifthImage from "./5 card image.jpg";
import sixthImage from "./6 card image.jpg";
import seventhImage from "./7 card image.jpg";
import eightImage from "./8 card image.jpg";
import nineImage from "./9 card image.jpg";
import gitarImage from "./person gitar image.png";
import bird from "./last bird image.png";
import petalLeave from  "./pettal leave.png"
import petalLight from  "./leave light.png"



import 'bootstrap/dist/css/bootstrap.min.css';








function Home() {
  return (
    <>


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
<div>
</div>

 <section className="hero">
      <div className="hero__inner">
        {/* background blobs */}
        <div className="hero__bg">
          <div className="blob blob--1" />
          <div className="blob blob--2" />
        </div>

        {/* leaves */}
        <img
          className="leaf leaf--left fade-in-left"
          src={petalLeave}
          alt="leaf-left"
        />
        <img
          className="leaf leaf--left2 float-rotate"
          src={petalLight}
          alt="leaf-left-2"
        />

        {/* petal */}
        <img className="petal float-petal" src={petalLeave} alt="petal" />

        {/* bird */}
        <img className="bird float-bird" src={bird} alt="bird" />

        {/* right leaf */}
        <img
          className="leaf leaf--right fade-in-right"
          src={petalLight}
          alt="leaf-right"
        />

        {/* heart */}
        <div className="heart pulse" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        {/* main */}
        <div className="hero__grid">
          <div className="hero__left">{/* optional text */}</div>

          <div className="hero__right">
            <img
              className="person float-person"
              src={gitarImage}
              alt="person with guitar"
            />
          </div>
        </div>
      </div>
    </section>
    </>



  )   
}

export default Home
