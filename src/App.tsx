import 'animate.css';
import AOS from 'aos';
import "./App.css";
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {

  AOS.init();

  return (
    <div>

      <div className='parralax f1'>
        <div className="yatindo">
          <img src="logo.png" alt="" />
          <div className="text">
            <h1 className='animate__animated animate__fadeInRight 	'>YAYASAN TINTA EMAS INDONESIA</h1>
            <h1 className='animate__animated animate__zoomIn'>SMP -SMK</h1>
            <h1 className='animate__animated animate__fadeInLeft'>TINTA EMAS INDONESIA</h1>

          </div>
          <div className='slogan'>
            <h3>SCHOOL FOR STUDY, CREATION, PLAY, AND GROWTH</h3>
            <h3>TERAKREDITASI "A"</h3>
          </div>
        </div>
      </div>

      <nav
        data-aos="fade-down"
        data-aos-offset="1200"
        data-aos-duration="10"
      >
        <h1>Navbar</h1>
      </nav>


      <div className='parralax f2'>
        <h1
          data-aos="fade-up"
          data-aos-offset="400"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="true"
        // data-aos-anchor-placement="top-center"
        >
          sfndsf
        </h1>
        <h1 className='animate__animated animate__fadeInRight 	'>sfndsf</h1>
        <h1 className='animate__animated animate__fadeInRight 	'>sfndsf</h1>
      </div>

      <div className='parralax f3'></div>
      <div className='parralax f4'>aas</div>
    </div>
  )
}

export default App