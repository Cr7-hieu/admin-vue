<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg header-wrapper">
        <div class="container-fluid"> 
          <a class="navbar-brand logo" href="#">
            <router-link to="/">
              <img src="../src/assets/images/logo.png" alt="logo" />
            </router-link>
          </a>
          <div class="collapse navbar-collapse this-list" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link active dropdown-toggle"
                  aria-current="page"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                <router-link :to="{name:'home.content'}">
                  Home
                </router-link>
                </a>
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
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blogs
                </a>
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
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
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
                <a class="nav-link">
                  <router-link :to="{name:'about.content'}">About</router-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Contact</a>
              </li>
            </ul>
            <form
              class="d-flex flex-row align-items-center justify-content-center"
              role="search"
            >
              <button
                class="btn -weight--regular -size--regular -variant--link -color--primary header-icons__search header-icons__item"
              >
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
              </button>

              <div spacing="20" class="sc-beqWaB eqkiKY social-block">
                <a
                  class="btn -weight--regular -size--regular -variant--link -color--primary sc-gueYoa cRNJoD header-icons__item"
                  href=""
                >
                  <span> <i class="fa-brands fa-facebook"></i></span>
                </a>

                <a
                  class="btn -weight--regular -size--regular -variant--link -color--primary sc-gueYoa cRNJoD header-icons__item"
                  href=""
                >
                  <span><i class="fa-brands fa-twitter"></i></span>
                </a>
                <a
                  class="btn -weight--regular -size--regular -variant--link -color--primary sc-gueYoa cRNJoD header-icons__item"
                  href=""
                  ><span><i class="fa-brands fa-instagram"></i></span>
                </a>
                <a
                  class="btn -weight--regular -size--regular -variant--link -color--primary sc-gueYoa cRNJoD header-icons__item"
                  href=""
                >
                  <span><i class="fa-brands fa-dribbble"></i></span>
                </a>
              </div>
              <button
                class="btn -weight--regular -size--regular -variant--link -color--primary header-icons__item header-icons__menu-controller"
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
      <div class="container-fluid">
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
                <div class="post-card -tiny">
                  <a class="card-cover" href="/author/1">
                    <img
                      src="../src/assets/images/1.png"
                      alt="Designers in Residence explores mental health in black British communities"
                    />
                  </a>
                  <div class="card-content">
                    <h5 class="card-content__category">Design</h5>
                    <a class="card-content__title" href="/post/1"
                      >Designers in Residence explores mental health in black
                      British communities</a
                    >
                    <div class="card-content__info">
                      <div class="info__time">
                        <i class="far fa-clock"></i>
                        <p>02/11/2020</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-card -tiny">
                  <a class="card-cover" href="/author/1">
                    <img
                      src="../src/assets/images/2.png"
                      alt="Government seeks expressions of interest for design of £5m obesity app"
                    />
                  </a>
                  <div class="card-content">
                    <h5 class="card-content__category">Design</h5>
                    <a class="card-content__title" href="/post/3"
                      >Government seeks expressions of interest for design of
                      £5m obesity app</a
                    >
                    <div class="card-content__info">
                      <div class="info__time">
                        <i class="far fa-clock"></i>
                        <p>10/09/2020</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-card -tiny">
                  <a class="card-cover" href="/author/1"
                    ><img
                      src="../src/assets/images/3.png"
                      alt="Motion Design Spotlight — Sam Burton"
                  /></a>
                  <div class="card-content">
                    <h5 class="card-content__category">Design</h5>
                    <a class="card-content__title" href="/post/5"
                      >Motion Design Spotlight — Sam Burton</a
                    >
                    <div class="card-content__info">
                      <div class="info__time">
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
                  <div class="footer-col -util">
                    <div class="center-line-title">
                      <h5>Tag clouds</h5>
                    </div>
                    <div class="tags-group">
                      <a
                        class="btn -weight--light -size--small -variant--contained -color--light sc-dmqHEX evIEeF"
                        href="/#"
                      >
                        <span> Gutenews</span>
                      </a>
                      <a
                        class="btn -weight--light -size--small -variant--contained -color--light sc-dmqHEX evIEeF"
                        href="/#"
                      >
                        <span>Life style</span>
                      </a>
                      <a
                        class="btn -weight--light -size--small -variant--contained -color--light sc-dmqHEX evIEeF"
                        href="/#"
                      >
                        <span>Fashion</span>
                      </a>
                      <a
                        class="btn -weight--light -size--small -variant--contained -color--light sc-dmqHEX evIEeF"
                        href="/#"
                      >
                        <span>Food</span>
                      </a>
                      <a
                        class="btn -weight--light -size--small -variant--contained -color--light sc-dmqHEX evIEeF"
                        href="/#"
                      >
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
                    <div spacing="10" class="sc-beqWaB cwkjOA social-block">
                      <a
                        class="btn -shape--circle -weight--regular -size--small -variant--contained -color--light sc-gueYoa kAQqKm"
                        href="https://www.facebook.com/"
                      >
                        <span><i class="fab fa-facebook-f"></i></span>
                      </a>
                      <a
                        class="btn -shape--circle -weight--regular -size--small -variant--contained -color--light sc-gueYoa kAQqKm"
                        href="https://www.twitter.com/"
                      >
                        <span><i class="fab fa-twitter"></i></span>
                      </a>
                      <a
                        class="btn -shape--circle -weight--regular -size--small -variant--contained -color--light sc-gueYoa kAQqKm"
                        href="https://www.instagram.com/"
                        ><span><i class="fab fa-instagram"></i></span></a
                      ><a
                        class="btn -shape--circle -weight--regular -size--small -variant--contained -color--light sc-gueYoa kAQqKm"
                        href="https://www.dribbble.com/"
                      >
                        <span><i class="fab fa-dribbble"></i></span>
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
