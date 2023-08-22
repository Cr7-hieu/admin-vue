<template>
    <div>
        <div class="container distance">
            <div class="row ">
                <div class="col-8">
                    <div class="row">
                        <div class="col-6">
                            <div class="post-card">
                                <a href="" class="card-cover">
                                    <img src="../assets/images/1.png" alt="">
                                </a>
                                <div class="card-content">
                                    <h5 class="category">Design</h5>
                                    <a href="" class="content-title">
                                        Designers in Residence explores mental health in black British communities
                                    </a>
                                    <div class="content-info">
                                        <div class="content-info_item content-info_item-author">
                                            <i class="fa-solid fa-user"></i>
                                            <a href="">Mini Busson</a>
                                        </div>
                                        <div class="content-info_item ">
                                            <i class="fa-regular fa-clock"></i>
                                            <p>02/11/2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="post-card">
                                <a href="" class="card-cover">
                                    <img src="../assets/images/2.png" alt="">
                                </a>
                                <div class="card-content">
                                    <h5 class="category">Design</h5>
                                    <a href="" class="content-title">
                                        Government seeks expressions of interest for design of £5m obesity app
                                    </a>
                                    <div class="content-info">
                                        <div class="content-info_item content-info_item-author">
                                            <i class="fa-solid fa-user"></i>
                                            <a href="">Mini Busson</a>
                                        </div>
                                        <div class="content-info_item">
                                            <i class="fa-regular fa-clock"></i>
                                            <p>02/11/2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="post-card">
                                <a href="" class="card-cover">
                                    <img src="../assets/images/3.png" alt="">
                                </a>
                                <div class="card-content">
                                    <h5 class="category">Design</h5>
                                    <a href="" class="content-title">
                                        Motion Design Spotlight — Sam Burton
                                    </a>
                                    <div class="content-info">
                                        <div class="content-info_item content-info_item-author">
                                            <i class="fa-solid fa-user"></i>
                                            <a href="">Mini Busson</a>
                                        </div>
                                        <div class="content-info_item">
                                            <i class="fa-regular fa-clock"></i>
                                            <p>02/11/2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="post-card">
                                <a href="" class="card-cover">
                                    <img src="../assets/images/6.png" alt="">
                                </a>
                                <div class="card-content">
                                    <h5 class="category">Design</h5>
                                    <a href="" class="content-title">
                                        DixonBaxi unifies Hulu’s identity in rebrand
                                    </a>
                                    <div class="content-info">
                                        <div class="content-info_item content-info_item-author">
                                            <i class="fa-solid fa-user"></i>
                                            <a href="">Mini Busson</a>
                                        </div>
                                        <div class="content-info_item">
                                            <i class="fa-regular fa-clock"></i>
                                            <p>02/11/2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="col">
                        <div class="post-card">
                            <a href="" class="card-cover">
                                <swiper
                                    :pagination="{
                                    type: 'progressbar',
                                    }"
                                    :navigation="true"
                                    :modules="modules"
                                    class=""
                                >
                                <swiper-slide><img src="../assets/images/3.png" alt=""></swiper-slide>
                                <swiper-slide><img src="../assets/images/4.png" alt=""></swiper-slide>
                                </swiper>                                
                            </a>
                            <div class="card-content">
                                <h5 class="category">Design</h5>
                                <a href="" class="content-title">
                                    Product design’s gender crisis: “If businesses don’t adapt they’ll become obsolete
                                </a>
                                <div class="content-info">
                                    <div class="content-info_item content-info_item-author">
                                        <i class="fa-solid fa-user"></i>
                                        <a href="">Mini Busson</a>
                                    </div>
                                    <div class="content-info_item">
                                        <i class="fa-regular fa-clock"></i>
                                        <p>02/11/2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="post-card">
                                <a href="" class="card-cover">
                                    <img src="../assets/images/4.png" alt="">
                                </a>
                                <div class="card-content">
                                    <h5 class="category">Design</h5>
                                    <a href="" class="content-title">
                                        Metus sapien ut nunc vestibulum ante ipsum primis in faucibus
                                    </a>
                                    <div class="content-info">
                                        <div class="content-info_item content-info_item-author">
                                            <i class="fa-solid fa-user"></i>
                                            <a href="">Mini Busson</a>
                                        </div>
                                        <div class="content-info_item">
                                            <i class="fa-regular fa-clock"></i>
                                            <p>02/11/2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>    
            </div>
            <div class="qwt">
                <button class="btn this-home">
                    <span>Load more posts</span>
                </button>
            </div>
        </div>       
    </div>
</template>
<script>
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>