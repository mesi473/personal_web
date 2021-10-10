import React from 'react';

export default function Header() {
    return (
        <header class="header" id="header">
            <nav class="nav container">
                <a href="#" class="nav__logo">
                    <img src="assets/img/logo.png" alt="" class="nav__logo-img"/>
                    M@K Tech
                </a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="#home" class="nav__link active-link">Home</a>
                        </li>

                        <li class="nav__item">
                            <a href="#about" class="nav__link">About Me</a>
                        </li>

                        <li class="nav__item">
                            <a href="#trick" class="nav__link">Skills</a>
                        </li>

                        <li class="nav__item">
                            <a href="#new" class="nav__link">Portfolio</a>
                        </li>

                        <a href="#" class="button button--ghost">Contact</a>
                    </ul>

                    <div class="nav__close" id="nav-close">
                        <i class='bx bx-x'></i>
                    </div>

                    <img src="assets/img/nav-img.png" alt="" class="nav__img"/>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-grid-alt'></i>
                </div>

            </nav>
        </header>
    )
}
