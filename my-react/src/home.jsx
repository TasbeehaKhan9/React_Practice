
import firstImage from "./2 card image.jpg";


function Home() {
  return (
    <>
    <div>
       <h1>PUBLIC PAGE IS MINE</h1>
    </div>


    <div className="card">
        <img src={firstImage} alt="demo" className="card-image" />
    </div>
    <p>Floating Portfolio</p>
    </>



  )   
}

export default Home
