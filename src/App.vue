<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg header-wrapper">
        <div class="container"> 
          <a class="navbar-brand logo" href="#">
            <router-link to="/">
              <img src="../src/assets/images/logo.png" alt="logo" />
            </router-link>
          </a>
          <div class="collapse navbar-collapse this-list" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
              
                <router-link :to="{name:'home.content'}"  class="nav-link active dropdown-toggle"  >
                  Home
                </router-link>
                
                <ul class="dropdown-menu text-decoration-none is-menu">
                  <li>
                    <a href="">Homepage</a>
                  </li>
                  <li>
                    <a href="">Homepage</a>
                  </li>
                  <li>
                    <a href="">Homepage</a>
                  </li>
                  <li>
                    <a href="">Homepage</a>
                  </li>
                  <li>
                    <a href="">Homepage</a>
                  </li>
                  <li>
                    <a href="">Homepage</a>
                  </li>
                  <li>
                    <a href="">Homepage</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                
                <router-link :to="{name:'blogs.content'}" class="nav-link dropdown-toggle">
                  Blogs
                </router-link>
                
                
                <ul class="dropdown-menu is-menu">
                  <li>
                    <a href="">Blogs category gird</a>
                  </li>
                  <li>
                    <a href="">Blogs category gird</a>
                  </li>
                  <li>
                    <a href="">Blogs category gird</a>
                  </li>
                  <li>
                    <a href="">Blogs category gird</a>
                  </li>
                  <li>
                    <a href="">Blogs category gird</a>
                  </li>
                  <li>
                    <a href="">Blogs category gird</a>
                  </li>
                  <li>
                    <a href="">Blogs category gird</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown ">
                
                  <router-link :to="{name:'pages.content'}" class="nav-link dropdown-toggle">
                    Pages
                  </router-link>
                
                <ul class="dropdown-menu is-menu">
                  <li>
                    <a href="">Author</a>
                  </li>
                  <li>
                    <a href="">Author</a>
                  </li>
                  <li>
                    <a href="">Author</a>
                  </li>
                  <li>
                    <a href="">Author</a>
                  </li>
                  <li>
                    <a href="">Author</a>
                  </li>
                  <li>
                    <a href="">Author</a>
                  </li>
                  <li>
                    <a href="">Author</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">

                  <router-link :to="{name:'about.content'}" class="nav-link">About</router-link>             
              </li>
              <li class="nav-item">
                <router-link :to="{name:'contact.content'}" class="nav-link">Contact</router-link>
              </li>
            </ul>
            <form
              class="d-flex flex-row align-items-center justify-content-center"
              role="search">
              <button
                class="btn " @click.prevent="search">           
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
              </button>
              <div id="search-box" >
                <div class="container">
                  <form action="" method="POST">
                    <input type="text" v-show="showSearch" placeholder="Searching for news">
                    <button>
                      <i class="fas fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>

              <div spacing="20" class=" social-block">
                <a
                  class="btn -"
                  href=""
                >
                  <span> <i class="fa-brands fa-facebook"></i></span>
                </a>

                <a
                  class="btn"
                  href=""
                >
                  <span><i class="fa-brands fa-twitter"></i></span>
                </a>
                <a
                  class="btn "
                  href=""
                  ><span><i class="fa-brands fa-instagram"></i></span>
                </a>
                <a
                  class="btn "
                  href=""
                >
                  <span><i class="fa-brands fa-dribbble"></i></span>
                </a>
              </div>
              <button
                class="btn"
              >
                <span><font-awesome-icon icon="bars" /></span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <!-- end header  -->
    <div class="container-fluid">
      <router-view />
    </div>
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="footer-col -about footer-text">
                <div class="center-line-title">
                  <h5>About us</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida lacus vel facilisis.
                </p>
                <div class="contact-method">
                  <p>
                    <i class="fas fa-map-marker-alt"></i>5 South Main Street Los
                    Angeles, ZZ-96110 USA
                  </p>
                  <p>
                    <i class="far fa-mobile-android"></i>125-711-811 | 125-668-886
                  </p>
                  <p>
                    <i class="fas fa-headphones-alt"></i
                    >Support.hosting@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="footer-col">
                <div class="center-line-title">
                  <h5>Feature posts</h5>
                </div>
                <div class="post-card-tiny card-ai">
                  <a class="card-cover" href="/author/1">
                    <img
                      src="../src/assets/images/1.png"
                      alt="Designers in Residence explores mental health in black British communities"
                    />
                  </a>
                  <div class="card-content">
                    <h5 class="card-content-category">Design</h5>
                    <a class="card-content-title" href="/post/1"
                      >Designers in Residence explores mental health in black
                      British communities
                    </a>                
                    <div class="card-content-info">
                      <div class="info-time">
                        <i class="far fa-clock"></i>
                        <p>02/11/2020</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-card-tiny card-ai">
                  <a class="card-cover" href="/author/1">
                    <img
                      src="../src/assets/images/2.png"
                      alt="Government seeks expressions of interest for design of £5m obesity app"
                    />
                  </a>
                  <div class="card-content">
                    <h5 class="card-content-category">Design</h5>
                    <a class="card-content-title" href="/post/3"
                      >Government seeks expressions of interest for design of
                      £5m obesity app</a
                    >
                    <div class="card-content-info">
                      <div class="info-time">
                        <i class="far fa-clock"></i>
                        <p>10/09/2020</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-card-tiny card-ai">
                  <a class="card-cover" href="/author/1"
                    ><img
                      src="../src/assets/images/3.png"
                      alt="Motion Design Spotlight — Sam Burton"
                  /></a>
                  <div class="card-content">
                    <h5 class="card-content-category">Design</h5>
                    <a class="card-content-title" href="/post/5"
                      >Motion Design Spotlight — Sam Burton</a
                    >
                    <div class="card-content-info">
                      <div class="info-time">
                        <i class="far fa-clock"></i>
                        <p>18/06/2020</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-12">
                  <div class="footer-col until">
                    <div class="center-line-title">
                      <h5>Tag clouds</h5>
                    </div>
                    <div class="tags-group">
                      <a  class="btn tags-fa" href="/#">
                        <span> Gutenews</span>
                      </a>
                      <a  class="btn tags-fa"  href="/#">
                        <span>Life style</span>
                      </a>
                      <a class="btn tags-fa"  href="/#">
                        <span>Fashion</span>
                      </a>
                      <a class="btn tags-fa" href="/#">
                        <span>Food</span>
                      </a>
                      <a class="btn tags-fa"  href="/#">
                        <span>Travel</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-12">
                  <div class="footer-col">
                    <div class="center-line-title">
                      <h5>FOLLOW US</h5>
                    </div>
                    <div spacing="10" class="social is-social social-block">
                      <a  class="btn social-icon jqk" href="">
                        <span>
                          <i class="fab fa-facebook-f"></i>
                        </span>
                      </a>
                      <a class="btn  social-icon jqk"  href="">
                        <span>
                          <i class="fab fa-twitter"></i>
                        </span>
                      </a>
                      <a class="btn  social-icon jqk"  href="">
                        <span>
                          <i class="fab fa-instagram"></i>
                        </span>
                        </a>
                      <a class="btn  social-icon jqk" href="">
                        <span>
                          <i class="fab fa-dribbble"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>
            © 2021, GuteNews - News Magazine ReactJs Theme. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const showSearch = ref(false);

    const search = () => {
      showSearch.value = !showSearch.value;
    };

  
</script>
