<template>
    <div>
        <div class="container">
            <div>
                <swiper
                    :spaceBetween="30"
                    :centeredSlides="true"
                    :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                    }"
                    
                    :navigation="false"
                    :modules="modules"
                    class="swiper-img"
                >
                    <swiper-slide>
                        <div class="d-flex">
                            <div class="slick-card">
                                <img src="../assets/images/insta-1.png" alt="">
                                <div class="slick-content">
                                    <h5>Gtute_News</h5>
                                </div>
                            </div>
                            <div class="slick-card">
                                <img src="../assets/images/insta-3.png" alt="">
                                <div class="slick-content">
                                    <h5>Gtute_News</h5>
                                </div>
                            </div>
                            <div class="slick-card">
                                <img src="../assets/images/insta-4.png" alt="">
                                <div class="slick-content">
                                    <h5>Gtute_News</h5>
                                </div>
                            </div>
                            <div class="slick-card">
                                <img src="../assets/images/insta-2.png" alt="">
                                <div class="slick-content">
                                    <h5>Gtute_News</h5>
                                </div>
                            </div>
                            <div class="slick-card">
                                <img src="../assets/images/insta-1.png" alt="">
                                <div class="slick-content">
                                    <h5>Gtute_News</h5>
                                </div>
                            </div>
                        </div> 
                        
                    </swiper-slide>
                    <swiper-slide>
                        <div class="d-flex">
                            <div class="slick-card">
                                <img src="../assets/images/insta-2.png" alt="">
                                <div class="slick-content">
                                    <h5>Gtute_News</h5>
                                </div>
                            </div>
                            <div class="slick-card">
                                <img src="../assets/images/insta-4.png" alt="">
                                <div class="slick-content">
                                    <h5>Gtute_News</h5>
                                </div>
                            </div>
                            <div class="slick-card">
                                <img src="../assets/images/insta-2.png" alt="">
                                <div class="slick-content">
                                    <h5>Gtute_News</h5>
                                </div>
                            </div>
                            <div class="slick-card">
                                <img src="../assets/images/insta-3.png" alt="">
                                <div class="slick-content">
                                    <h5>Gtute_News</h5>
                                </div>
                            </div>
                            <div class="slick-card">
                                <img src="../assets/images/insta-1.png" alt="">
                                <div class="slick-content">
                                    <h5>Gtute_News</h5>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
