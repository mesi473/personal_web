
import './App.css';
import React from 'react';
import Image1 from './images/4F4A9876.JPG';
import web from './images/web.svg';
import mobile from './images/mobile.svg';
import desktop from './images/desktop.svg';
import Image2 from './images/image1.JPG';
import {Star,Facebook,GitHub,LinkedIn} from '@material-ui/icons';
import cpp from './images/c++.png';
import nodejs from './images/node.png';
import java from './images/java.png';
import flutter from './images/flutter.svg';
import python from './images/python.png';
import reactjs from './images/reactjs.svg';
import nextjs from './images/nextjs.svg';
import image3 from './images/11.png';
import image4 from './images/1.png';



import { Helmet } from "react-helmet";
function App() {
  React.useEffect(() => {
    window.addEventListener('scroll', function () {
      var header = document.getElementsByClassName("header");
      header[0].classList.toggle('sticky', window.scrollY > 0);
    });
  })

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

              <a href="#" className="button button--ghost">Feadback</a>
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
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
              </span>
              <button className="button trick__button">
                <i className='bx bx-cart-alt trick__icon'></i>
              </button>
            </div>

            <div className="trick__content">
              <img src={python} alt="" className="trick__img" />
              <h3 className="trick__title">Python</h3>
              <span className="trick__subtitle">
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
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
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
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
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
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
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
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
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
                <Star style={{color:"#e0880b"}}/>
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
              <h2 className="discount__title">Focus on your work <br/> </h2>
              <a href="#" className="button">Contact us</a>
            </div>

            <img src={nextjs} alt="" className="discount__img" />
          </div>
        </section>

        <section className="section new" id="new">
          <h2 className="section__title">Portfolio</h2>

          <div className="new__container container ">
            <div className="swiper new-swiper">
              <div className="swiper-wrapper">
                <div className="new__content swiper-slide">
                  <div className="new__tag">New 2021</div>
                  <img src={image4} alt="" className="new__img" />
                  <h3 className="new__title">Hotel Managment system</h3>
                  <span className="new__subtitle">Room Reservation</span>

                  <div className="new__prices">
                    <span className="new__price"></span>
                    <span className="new__discount"></span>
                  </div>

                  <button className="button new__button">
                    View
                  </button>
                </div>
                <div className="new__content swiper-slide">
                  <div className="new__tag">New 2021</div>
                  <img src={image3} alt="" className="new__img" />
                  <h3 className="new__title">Online Auction Managment System</h3>
                  <span className="new__subtitle">Bid and Post An Auction</span>

                  <div className="new__prices">
                    <span className="new__price"></span>
                    <span className="new__discount"></span>
                  </div>

                  <button className="button new__button">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                <Facebook/>
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                <LinkedIn/>
              </a>
              <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                <GitHub/>
              </a>
            </div>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">About</h3>

            <ul className="footer__links">
              <li>
                <a href="#about" className="footer__link">About Me</a>
              </li>
              <li>
                <a href="#" className="footer__link">Portfolio</a>
              </li>
              <li>
                <a href="#" className="footer__link">News</a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">My Services</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">Web Design</a>
              </li>
              <li>
                <a href="#" className="footer__link">Mobile App</a>
              </li>
              <li>
                <a href="#" className="footer__link">UI/UX Design</a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">My Company</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">Blog</a>
              </li>
              <li>
                <a href="#" className="footer__link">About Me</a>
              </li>
              <li>
                <a href="#" className="footer__link">My mision</a>
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
