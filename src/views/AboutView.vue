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
        <li class="breadcrumb-item active" aria-current="page">About</li>
        
      </ol>
    </nav>
    <div class="about-us">
      <div class="row align-items-center">
        <div class="col-12 col-sm-8 col-md-6 mx-auto">
          <div class="about-us__image">
            <img src="../assets/images/about.png" alt="About us image">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="about-us__content">
            <h3>Thank you for visit out my website.</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores sit amet vel facilisis beatae vitae dicta sunt.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.
                  </p>
              <div class="follow">
                <p>Follow us:</p>
                <div spacing="10" class="sc-beqWaB cwkjOA social-block">
                  <a class="btn " href="">
                    <span>
                      <i class="fab fa-facebook-f"></i>
                    </span>
                  </a>
                  <a class="btn " href="">
                    <span>
                      <i class="fab fa-twitter"></i>
                    </span>
                  </a>
                  <a class="btn " href="">
                    <span>
                      <i class="fab fa-instagram"></i>
                    </span>
                  </a>
                  <a class="btn " href="">
                    <span>
                      <i class="fab fa-dribbble"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="subcribe-bar">
          <div class="row align-items-center">
            <div class="col-12 col-md-6">
              <div class="subcribe-bar__content">
                <h5>Don’t miss our future updates!</h5>
                <h3>Get Subscribe today!</h3>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <form class="subcribe-bar__form">
                <input type="text" name="email" placeholder="You email"  >
                
                <button type="submit" class="btn btn-about"  >
                  <span>Subcribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
    <Slide></Slide>
  </div>
</template>
<script setup>
import Slide from '../components/Slide.vue'

</script>

