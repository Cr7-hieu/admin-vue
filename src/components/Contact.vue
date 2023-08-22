<template>
<div class="container distance">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <span class="breadcrumb-item-icon">
                    <i class="fa-solid fa-house-chimney"></i>
                </span>
            </li>
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Contact</li>
        </ol>
    </nav>
    <div class="contact-us">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="contact-us__info">
                    <h3 class="contact-title">GET IN TOUCH</h3>
                    <p class="contact-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                    </p>
                    <div class="contact-method">
                        <div class="contact-method__item">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>5 South Main Street Los Angeles, ZZ-96110 USA</p>
                        </div>
                        <div class="contact-method__item">
                            <i class="fas fa-mobile-alt"></i>
                            <p>125-711-811 | 125-668-886</p>
                        </div>
                        <div class="contact-method__item">
                            <i class="fas fa-headphones-alt"></i>
                            <p>Support.hosting@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="contact-us__social">
                    <h3 class="contact-title">SOCIALS</h3>
                    <div spacing="10" class="sc-beqWaB cwkjOA social-block">
                        <a class="btn "  href="https://www.facebook.com/">
                            <span>
                                <i class="fab fa-facebook-f"></i>
                            </span>
                        </a>
                        <a class="btn " href="https://www.twitter.com/">
                            <span>
                                <i class="fab fa-twitter"></i>
                            </span>
                        </a>
                        <a class="btn "  href="https://www.instagram.com/">
                            <span>
                                <i class="fab fa-instagram"></i>
                            </span>
                        </a >
                        <a class="btn"  href="https://www.dribbble.com/">
                            <span>
                                <i class="fab fa-dribbble"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="contact-us__form">
                    <h3 class="contact-title">LEAVE A MESSAGE</h3>
                    <form>
                        <div class="input-group">
                            <input type="text" placeholder="Name" name="name" value="" />
                        </div>
                        <div class="input-group">
                            <input type="email" placeholder="Email" name="email" value="" />
                        </div>
                        <div class="input-group">
                            <input type="text" placeholder="Website" name="website" value=""/>
                        </div>
                        <textarea name="message" cols="30" rows="8" placeholder="Message" >
                        </textarea>
                        <button  type="submit" class="btn contact">
                            <span>Send message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>