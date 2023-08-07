<template>
  <div>    
    <header class="header-section ">
      <div class="container-fluid">
        <div class="header-wrapper">
          <a href="" class="header-logo">
            <img src="../src/assets/images/logo.png" alt="logo" >
          </a>
          <!-- <nav>
            <div class="container-fluid">
              <ul>
              <li class="nav-item active">
                <a href="">Home</a>
                <ul class="dropdown-menu">
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
              <li class="nav-item">
                <a href="">Blog</a>
                <ul class="dropdown-menu">
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
              <li class="nav-item">
                <a href="">Pages</a>
                <ul class="dropdown-menu">
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
                <a href="">About</a>               
              </li>
              <li class="nav-item">
                <a href="">Contact</a>               
              </li>
            </ul>
            </div>
            
          </nav>  -->
          <!-- end nav  -->
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
          <div class="header-icon">
            <button class="btn -weight--regular -size--regular -variant--link -color--primary header-icons__search header-icons__item">
              <span><font-awesome-icon icon="magnifying-glass" /></span>
            </button>
            <div class="social">
              <div spacing="20" class="sc-beqWaB eqkiKY social-block">
                <a class="btn -weight--regular -size--regular -variant--link -color--primary sc-gueYoa cRNJoD header-icons__item" href=""><span><font-awesome-icon :icon="['fas', 'facebook']" /></span></a>
                <a class="btn -weight--regular -size--regular -variant--link -color--primary sc-gueYoa cRNJoD header-icons__item" href="https://www.twitter.com/"><span><font-awesome-icon icon="twitter" /></span></a>
                <a class="btn -weight--regular -size--regular -variant--link -color--primary sc-gueYoa cRNJoD header-icons__item" href="https://www.instagram.com/"><span><font-awesome-icon icon="instagram" /></span></a>
                <a class="btn -weight--regular -size--regular -variant--link -color--primary sc-gueYoa cRNJoD header-icons__item" href="https://www.dribbble.com/"><span><font-awesome-icon icon="dribbble" /></span></a>
              </div>
              <button class="btn -weight--regular -size--regular -variant--link -color--primary header-icons__item header-icons__menu-controller">
                <span><font-awesome-icon icon="bars" /></span>
              </button>
            </div>
          </div>
          <!-- end header-icon  -->
        </div>
      </div>
    </header>
    <!-- end header  -->
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
    
</template>
