import React from 'react'

export default function PersonalDescription() {
    return (
        <div>
            <section class="home container" id="home">
                <div class="swiper home-swiper">
                    <div class="swiper-wrapper">
                        <section class="swiper-slide">
                            <div class="home__content grid">
                                <div class="home__group">
                                    <img src="assets/img/home1-img.png" alt="" class="home__img"/>
                                    <div class="home__indicator"></div>
    
                                    <div class="home__details-img">
                                        <h4 class="home__details-title">The Labu “Reiza”</h4>
                                        <span class="home__details-subtitle">The Living Pumpkin</span>
                                    </div>
                                </div>
    
                                <div class="home__data">
                                    <h3 class="home__subtitle">#1 Top Scariest Ghost</h3>
                                    <h1 class="home__title">UOOOO <br/> TRICK OR <br/> TREAT!!</h1>
                                    <p class="home__description">Hi, I'm Reiza, people call me "El Labu". I am currently trying to learn 
                                        something new, building my own bike with parts made only in Malaysia.
                                    </p>

                                    <div class="home__buttons">
                                        <a href="#" class="button">Book Now</a>
                                        <a href="#" class="button--link button--flex">Track Record <i class='bx bx-right-arrow-alt button__icon'></i></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="swiper-slide">
                            <div class="home__content grid">
                                <div class="home__group">
                                    <img src="assets/img/home2-img.png" alt="" class="home__img"/>
                                    <div class="home__indicator"></div>
    
                                    <div class="home__details-img">
                                        <h4 class="home__details-title">Adino & Grahami</h4>
                                        <span class="home__details-subtitle">No words can describe them</span>
                                    </div>
                                </div>
    
                                <div class="home__data">
                                    <h3 class="home__subtitle">#2 top Best duo</h3>
                                    <h1 class="home__title">BRING BACK <br/> MY COTTON <br/> CANDY</h1>
                                    <p class="home__description">Adino steals cotton candy from his brother and eats them all in one bite, 
                                        a hungry beast. Grahami can no longer contain his anger towards Adino.
                                    </p>

                                    <div class="home__buttons">
                                        <a href="#" class="button">Book Now</a>
                                        <a href="#" class="button--link button--flex">Track Record <i class='bx bx-right-arrow-alt button__icon'></i></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="swiper-slide">
                            <div class="home__content grid">
                                <div class="home__group">
                                    <img src="assets/img/home3-img.png" alt="" class="home__img"/>
                                    <div class="home__indicator"></div>
    
                                    <div class="home__details-img">
                                        <h4 class="home__details-title">Captain Sem</h4>
                                        <span class="home__details-subtitle">Veteran Spooky Ghost</span>
                                    </div>
                                </div>
    
                                <div class="home__data">
                                    <h3 class="home__subtitle">#3 Top Scariest  Ghost</h3>
                                    <h1 class="home__title">RESPAWN <br/> THE SPOOKY <br/> SKULL</h1>
                                    <p class="home__description">In search for cute little puppy, Captain Sem has come back from his tragic death. 
                                        With his hogwarts certified power he promise to be a hero for all of ghostkind.
                                    </p>

                                    <div class="home__buttons">
                                        <a href="#" class="button">Book Now</a>
                                        <a href="#" class="button--link button--flex">Track Record <i class='bx bx-right-arrow-alt button__icon'></i></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </section>
        
        </div>
    )
}
