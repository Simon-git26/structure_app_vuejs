<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg fixed-top py-3 shadow-lg border-bottom border-danger">
      <div class="container-fluid">
        <a class="nav-link px-0" href="/">
          <!-- Logo -->
          <img class="fit-picture" src="../../assets/logo.png" style="width: 70px" alt="Logo du festival de film de plein air" />

          <!-- Menu Burger Responsiv -->
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right">
            <i class="fa fa-bars"></i>
          </button>
        </a>

        <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav ml-auto">
             <!-- Actualitée -->
            <li class="nav-item active">
              <a class="nav-link ml-2 text-uppercase font-weight-bold" style="font-size: 1.2rem" href="Actualite">Actualitée</a>
            </li>

             <!-- Contact -->
            <li class="nav-item">
              <a class="nav-link ml-2 text-uppercase font-weight-bold" style="font-size: 1.2rem" href="Contact">Contact</a>
            </li>

             <!-- Selection Film -->
            <li class="nav-item">
              <a class="nav-link ml-2 text-uppercase font-weight-bold" style="font-size: 1.2rem" href="films" >Selection Films</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: "Nav_component",

 
};
</script>
