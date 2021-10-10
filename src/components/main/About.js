import React from 'react'

export default function About() {
    return (
        <section class="section about" id="about">
            <div class="about__container container grid">
                <div class="about__data">
                    <h2 class="section__title about__title">About Halloween <br /> Night</h2>
                    <p class="about__description">Night of all the saints, or all the dead, is celebrated on October 31 and it is a
                        very fun international celebration, this celebration comes from ancient origins, and is already
                        celebrated by everyone.
                    </p>
                    <a href="#" class="button">Know more</a>
                </div>
                <img src="assets/img/about-img.png" alt="" class="about__img" />
            </div>
        </section>
    )
}
