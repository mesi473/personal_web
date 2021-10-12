
import './App.css';
import React from 'react';
import Image1 from './images/4F4A9876.JPG';
import web from './images/web.svg';
import mobile from './images/mobile.svg';
import desktop from './images/desktop.svg';
import Image2 from './images/image1.JPG';
import { Star, Facebook, GitHub, LinkedIn, Close } from '@material-ui/icons';
import * as firebase from 'firebase'

import cpp from './images/c++.png';
import nodejs from './images/node.png';
import java from './images/java.png';
import flutter from './images/flutter.svg';
import python from './images/python.png';
import reactjs from './images/reactjs.svg';
import nextjs from './images/nextjs.svg';
import image3 from './images/11.png';
import image4 from './images/1.png';
import ImageViewer from "react-simple-image-viewer";
import pension1 from './images/pension managment system/1.png';
import pension2 from './images/pension managment system/2.png';
import pension3 from './images/pension managment system/3.png';
import pension4 from './images/pension managment system/4.png';
import pension5 from './images/pension managment system/5.png';
import pension6 from './images/pension managment system/6.png';
import pension7 from './images/pension managment system/7.png';
import pension8 from './images/pension managment system/8.png';
import pension9 from './images/pension managment system/9.png';
import pension10 from './images/pension managment system/10.png';
import pension11 from './images/pension managment system/11.png';
import pension12 from './images/pension managment system/12.png';
import pension13 from './images/pension managment system/13.png';
import pension14 from './images/pension managment system/14.png';
import pension15 from './images/pension managment system/15.png';
import pension16 from './images/pension managment system/16.png';
import pension17 from './images/pension managment system/17.png';
import pension18 from './images/pension managment system/18.png';
import pension19 from './images/pension managment system/19.png';
import pension20 from './images/pension managment system/20.png';
import pension21 from './images/pension managment system/21.png';
import pension22 from './images/pension managment system/22.png';
import pension23 from './images/pension managment system/23.png';
import pension24 from './images/pension managment system/24.png';
import auction1 from './images/online auction system/11(2).png';
import auction2 from './images/online auction system/2.png';
import auction3 from './images/online auction system/3.png';
import auction4 from './images/online auction system/4.png';
import auction5 from './images/online auction system/5.png';
import auction6 from './images/online auction system/6.png';
import auction7 from './images/online auction system/7.png';
import auction10 from './images/online auction system/10.png';
import auction11 from './images/online auction system/11.png';
import auction12 from './images/online auction system/12.png';
import auction13 from './images/online auction system/13.png';
import auction14 from './images/online auction system/14.png';
import auction15 from './images/online auction system/15.png';
import auction16 from './images/online auction system/16.png';
import auction17 from './images/online auction system/17.png';
import auction18 from './images/online auction system/18.png';
import auction19 from './images/online auction system/19.png';
import auction20 from './images/online auction system/20.png';
import auction21 from './images/online auction system/21.png';
import auction22 from './images/online auction system/22.png';
import auction23 from './images/online auction system/23.png';
import auction24 from './images/online auction system/24.png';
import auction25 from './images/online auction system/25.png';
import auction26 from './images/online auction system/26.png';
import auction27 from './images/online auction system/27.png';
import auction28 from './images/online auction system/28.png';
import auction29 from './images/online auction system/29.png';
import auction30 from './images/online auction system/30.png';
import auction31 from './images/online auction system/31.png';
import auction32 from './images/online auction system/32.png';
import auction33 from './images/online auction system/33.png';
import auction34 from './images/online auction system/34.png';
import auction35 from './images/online auction system/35.png';
import auction36 from './images/online auction system/36.png';
import auction39 from './images/online auction system/39.png';
import auction40 from './images/online auction system/40.png';
import auction41 from './images/online auction system/41.png';
import auction42 from './images/online auction system/42.png';
import auction43 from './images/online auction system/43.png';
import auction44 from './images/online auction system/44.png';
import auction45 from './images/online auction system/45.png';
import auction46 from './images/online auction system/46.png';
import {
  Dialog,

} from '@material-ui/core';
 



import { Helmet } from "react-helmet";
function App() {
  const [open, setOpen] = React.useState(false);
  const [state,setState]= React.useState({
    email:'',
    message:'',
  })
  React.useEffect(() => {
    window.addEventListener('scroll', function () {
      var header = document.getElementsByClassName("header");
      header[0].classList.toggle('sticky', window.scrollY > 0);
    });
  });
  const openImageViewer = React.useCallback((index, which) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    setWhichImage(which);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const [whichImage, setWhichImage] = React.useState('');
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);
  const images = [
    auction1, auction2, auction3, auction4, auction5, auction6, auction7, auction10, auction10, auction11, auction12, auction13, auction14, auction15, auction16, auction17, auction18, auction19, auction20, auction21, auction21, auction22, auction23
    , auction24, auction25, auction26, auction27, auction28, auction29, auction30, auction31, auction32, auction33, auction34, auction35, auction36, auction39, auction40, auction41, auction42, auction43, auction44, auction45, auction46,
  ];
  const images2 = [
    pension1, pension2, pension3, pension4, pension5, pension6, pension7, pension8, pension9, pension10, pension10, pension11, pension12, pension13, pension14, pension15, pension16, pension17, pension18, pension19, pension20, pension21, pension21, pension22, pension23
    , pension24,
  ];

  const firebaseConfig = {
    apiKey: "AIzaSyCkvjkLRF1JZ24iixD_cluo5NIj-N7olFg",
    authDomain: "personal-web-2e0a5.firebaseapp.com",
    databaseURL: "https://personal-web-2e0a5-default-rtdb.firebaseio.com",
    projectId: "personal-web-2e0a5",
    storageBucket: "personal-web-2e0a5.appspot.com",
    messagingSenderId: "1020708355357",
    appId: "1:1020708355357:web:1645cf67c46496b51175f4"
  };
  if (!firebase.apps.length) {
    var fireDb=firebase.initializeApp(firebaseConfig);
 }else {
  var fireDb=firebase.app(); // if already initialized, use that one
 }
  // var fireDb = initializeApp(firebaseConfig);
  var fire=fireDb.database().ref();  
  const [messageEmail,setMessageEmail]=React.useState({hasError:false,message:''});
  const [messageMessage,setMessageMessage]=React.useState({hasError:false,message:''});

  return (
    // <div>
    //   <Header/>
    //   <Main/>
    // </div>
    <div>
      <Helmet>
        <script src="./components/helper/js/main.js" type="text/javascript" />
      </Helmet>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img src="assets/img/logo.png" alt="" className="nav__logo-img" />
            M@K Tech
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">Home</a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">About Me</a>
              </li>

              <li className="nav__item">
                <a href="#trick" className="nav__link">Portfolio</a>
              </li>

              <li className="nav__item">
                <a href="#new" className="nav__link">Contact</a>
              </li>

              <button  
              onClick={()=>{setOpen(true)}}
              className="button button--ghost">Feadback</button>
            </ul>

            <div className="nav__close" id="nav-close">
              <i className='bx bx-x'></i>
            </div>

            <img src={Image1} alt="" className="nav__img" />
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-grid-alt'></i>
          </div>

        </nav>
      </header>

      <main className="main">
        <section className="home container" id="home">
          <div className="swiper home-swiper">
            <div className="swiper-wrapper">
              <section className="swiper-slide">
                <div className="home__content grid">
                  <div className="home__group">
                    <img src={Image1} alt="" className="home__img" />
                    <div className="home__indicator"></div>

                    <div className="home__details-img">
                      <h4 className="home__details-title">Meseret Kifle Gebremariam</h4>
                      <span className="home__details-subtitle">software Engineer</span>
                    </div>
                  </div>

                  <div className="home__data">
                    <h3 className="home__subtitle">Software Engineer</h3>
                    <h1 className="home__title">Meseret <br /> Kifle <br /> Gebremariam</h1>
                    <p className="home__description">"To work as a Software Engineer applying my knowledge in the field of
                      developing, testing, designing, and maintenance to cater to the specific
                      needs of the people. I wish to work in a team of motivated individuals who
                      wish to work towards the advancement of the company and its goals."
                    </p>

                    <div className="home__buttons">
                      <a href="#" className="button">See Detail</a>
                    </div>
                  </div>
                </div>
              </section>


            </div>
          </div>
        </section>

        <section className="section category">
          <h2 className="section__title">Technology <br />skills</h2>

          <div className="category__container container grid">
            <div className="category__data">
              <img src={mobile} alt="" className="category__img" />
              <h3 className="category__title">Mobile</h3>
              <p className="category__description">For both IOS and Android with different frameworks</p>
            </div>

            <div className="category__data">
              <img src={web} alt="" className="category__img" />
              <h3 className="category__title">Web</h3>
              <p className="category__description">Mobile first best design with different framewords</p>
            </div>

            <div className="category__data">
              <img src={desktop} alt="" className="category__img" />
              <h3 className="category__title">Desktop</h3>
              <p className="category__description">For different OS architecture</p>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title about__title">About Meseret <br /> Kifle</h2>
              <p className="about__description">
                I was Graduated from Addis Abeba Science and Technology University in the field of Software engineering.
                i am very passionate about learning and practicing new things.
              </p>
              <a href="#" className="button">Know more</a>
            </div>

            <img src={Image2} alt="" className="about__img" />
          </div>
        </section>

        <section className="section trick" id="trick">
          <h2 className="section__title">Language and frameworks</h2>

          <div className="trick__container container grid">
            <div className="trick__content">
              <img src={cpp} alt="" className="trick__img" />
              <h3 className="trick__title">C++</h3>
              <span className="trick__subtitle"></span>
              <span className="trick__price">
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
              </span>
              <button className="button trick__button">
                <i className='bx bx-cart-alt trick__icon'></i>
              </button>
            </div>

            <div className="trick__content">
              <img src={python} alt="" className="trick__img" />
              <h3 className="trick__title">Python</h3>
              <span className="trick__subtitle">
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
              </span>
              <span className="trick__price"></span>
              <button className="button trick__button">
                <i className='bx bx-cart-alt trick__icon'></i>
              </button>
            </div>

            <div className="trick__content">
              <img src={java} alt="" className="trick__img" />
              <h3 className="trick__title">Java</h3>
              <span className="trick__subtitle">
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
              </span>
              <span className="trick__price"></span>
              <button className="button trick__button">
                <i className='bx bx-cart-alt trick__icon'></i>
              </button>
            </div>

            <div className="trick__content">
              <img src={flutter} alt="" className="trick__img" />
              <h3 className="trick__title">Flutter</h3>
              <span className="trick__subtitle">
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
              </span>
              <span className="trick__price"></span>
              <button className="button trick__button">
                <i className='bx bx-cart-alt trick__icon'></i>
              </button>
            </div>

            <div className="trick__content">
              <img src={reactjs} alt="" className="trick__img" />
              <h3 className="trick__title">Reactjs</h3>
              <span className="trick__subtitle">
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
              </span>
              <span className="trick__price"></span>
              <button className="button trick__button">
                <i className='bx bx-cart-alt trick__icon'></i>
              </button>
            </div>

            <div className="trick__content">
              <img src={nodejs} alt="" className="trick__img" />
              <h3 className="trick__title">Nodejs</h3>
              <span className="trick__subtitle">
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
                <Star style={{ color: "#e0880b" }} />
              </span>
              <span className="trick__price"></span>
              <button className="button trick__button">
                <i className='bx bx-cart-alt trick__icon'></i>
              </button>
            </div>
          </div>
        </section>

        <section className="section discount">
          <div className="discount__container container grid">
            <div className="discount__data">
              <h2 className="discount__title">Focus on your work <br /> </h2>
              <a href="#" className="button">Contact us</a>
            </div>

            <img src={nextjs} alt="" className="discount__img" />
          </div>
        </section>

        <section className="section new" id="portfolio">
          <h2 className="section__title">Portfolio</h2>

          <div className="new__container container ">
            <div className="swiper new-swiper">
              <div className="portifolio-container">
                <div className="new__content ">
                  <div className="new__tag">New 2021</div>
                  <img src={image4} alt="" className="new__img" />
                  <h3 className="new__title">Hotel Managment system</h3>
                  <span className="new__subtitle">Room Reservation</span>

                  <div className="new__prices">
                    <span className="new__price"></span>
                    <span className="new__discount"></span>
                  </div>

                  <button className="button new__button"
                    onClick={() => openImageViewer(1, "auction")}
                  >
                    View
                  </button>
                  <div>
                    {isViewerOpen && (
                      <ImageViewer

                        src={whichImage === "auction" ? images : images2}
                        currentIndex={currentImage}
                        onClose={closeImageViewer}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)"
                        }}
                        closeOnClickOutside={true}
                      />
                    )}
                  </div>
                </div>
                <div className="new__content ">
                  <div className="new__tag">New 2021</div>
                  <img src={image3} alt="" className="new__img" />
                  <h3 className="new__title">Online Auction Managment System</h3>
                  <span className="new__subtitle">Bid and Post An Auction</span>

                  <div className="new__prices">
                    <span className="new__price"></span>
                    <span className="new__discount"></span>
                  </div>

                  <button className="button new__button"
                    onClick={() => openImageViewer(1, "pension")}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Dialog open={open}>
          <Close onClick={()=>{setOpen(false)}}/>
          <div class="center">
            <h1>Feed back</h1>
            <form>
              <div class="inputbox">
                <input
                onChange={(e)=>{
                  setState({...state,email:e.target.value})
                }}
                 placeholder="email" type="text" required="required" />
                
              </div>
              <span>{messageEmail.hasError? messageEmail.message:""}</span>
              <div class="inputbox">
                <textarea
                onChange={(e)=>{
                  setState({...state,message:e.target.value})
                }}
                 type="text" placeholder='message' required="required" />
                 
              </div>
              <span>{messageMessage.hasError?messageMessage.message:""}</span>
              <div class="inputbox">
                <input type="button" value="submit" 
                onClick={()=>{
                  if(messageMessage.message==''){
                    setMessageMessage({message:"message field is required",hasError:true});
                  }
                  if(messageMessage.message){
                    setMessageMessage({message:"",hasError:false});
                  }
                  if(messageEmail.message==''){
                    setMessageEmail({message:"email field is required",hasError:true});
                  }
                  if(messageEmail.message){
                    setMessageEmail({message:"",hasError:false});
                  }

                  if(state.email && state.message){
                    fire.child('feedback').push(state,err=>{console.log(err)})
                    setTimeout(() => {
                      setState({
                        email:"",
                        message:"",
                      })
                    }, 1000);
                  }
                  
                }}
                />
              </div>
            </form>
          </div>
        </Dialog>
        <h2 className="section__title">Education</h2>
        <div class="container" id="education">
          <div class="timeline">
            <div class="timeline-month">
              Education History
              <span>3 Entries</span>
            </div>
            <div class="timeline-section">
              <div class="timeline-date">
                25/09/2021
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <div class="timeline-box">
                    <div class="box-title">
                      <i class="fa fa-asterisk text-success" aria-hidden="true"></i> Degree
                    </div>
                    <div class="box-content">
                      <div class="box-item"><strong>Degree type</strong>: Bsc</div>
                      <div class="box-item"><strong>Department</strong>: Software Engineering</div>
                      <div class="box-item"><strong>Institution</strong>: Addis Ababa Science And Technology University</div>
                      <div class="box-item"><strong>Start Date</strong>: 10/10/2017</div>
                      <div class="box-item"><strong>Start Date</strong>: 25/09/2021</div>
                    </div>
                    <div class="box-footer">- Degree in software Engineering</div>
                  </div>
                </div>
              </div>

            </div>

            <div class="timeline-section">
              <div class="timeline-date">
                25/09/2017
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <div class="timeline-box">
                    <div class="box-title">
                      <i class="fa fa-pencil text-info" aria-hidden="true"></i> Interance Examination(grade 12th)
                    </div>
                    <div class="box-content">
                      <div class="box-item"><strong>Exam type Interance to university</strong>: Interance(grade 12th)</div>
                      <div class="box-item"><strong>Field of study</strong>: Natural Science</div>
                      <div class="box-item"><strong>Institution</strong>: Mizan Aman High School</div>

                      <div class="box-item"><strong>Start Date</strong>: 10/10/2015</div>
                      <div class="box-item"><strong>Start Date</strong>: 25/09/2017</div>
                    </div>
                    <div class="box-footer"></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <div class="timeline-box">
                    <div class="box-title">
                      <i class="fa fa-pencil text-info" aria-hidden="true"></i> Matric Examination(grade 10th)
                    </div>
                    <div class="box-content">
                      <div class="box-item"><strong>Exam type </strong>: Matric(grade 10th)</div>
                      <div class="box-item"><strong>Field of study</strong>: none</div>
                      <div class="box-item"><strong>Institution</strong>: Mizan Aman High School</div>

                      <div class="box-item"><strong>Start Date</strong>: 10/10/2013</div>
                      <div class="box-item"><strong>Start Date</strong>: 25/09/2016</div>
                    </div>
                    <div class="box-footer"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <section className="section newsletter">
          <div className="newsletter__container container">
            <h2 className="section__title">Our Newsletter</h2>
            <p className="newsletter__description">
              Promotion new products and sales. Directly to your inbox
            </p>

            <form action="" className="newsletter__form">
              <input type="text" placeholder="Enter your email" className="newsletter__input" />
              <button className="button">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <div className="footer__container container grid">
          <div className="footer__content">
            <a href="#" className="footer__logo">
              <img src="assets/img/logo.png" alt="" className="footer__logo-img" />
              M@k Tech
            </a>

            <p className="footer__description">Bring you company to us <br />and we will famaus it in technology .</p>

            <div className="footer__social">
              <a href="https://www.facebook.com/messi.kifle.12" target="_blank" className="footer__social-link">
                <Facebook />
              </a>
              <a href="https://linkedin.com/in/meseret-kifle-34a257162" target="_blank" className="footer__social-link">
                <LinkedIn />
              </a>
              <a href="https://github.com/mesi473" target="_blank" className="footer__social-link">
                <GitHub />
              </a>
              <div>Phone : +251917897592</div>
              <div>email : meseretkifle2@gmail.com</div>
            </div>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">About</h3>

            <ul className="footer__links">
              <li>
                <a href="#about" className="footer__link">About Me</a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">Portfolio</a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">My Services</h3>

            <ul className="footer__links">
              <li>
                <div className="footer__link">Web Design</div>
              </li>
              <li>
                <div className="footer__link">Mobile App</div>
              </li>
              <li>
                <div className="footer__link">UI/UX Design</div>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Personal</h3>

            <ul className="footer__links">
              <li>
                <a href="#education" className="footer__link">Education</a>
              </li>

            </ul>
          </div>
        </div>

        <span className="footer__copy">&#169; M@k. All rigths reserved</span>
      </footer>

      <a href="#" className="scrollup" id="scroll-up">
        <i className='bx bx-up-arrow-alt scrollup__icon'></i>
      </a>

    </div>
  );
}

export default App;
