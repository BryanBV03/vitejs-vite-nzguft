import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid d-flex justify-content-between ">
        <a class="navbar-brand" href="https://github.com/BryanBV03">BryanBV03</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Sobre Mi</a>
            <a class="nav-link" href="#">Experiencia Profesional</a>
            <a class="nav-link" href="#">Proyectos</a>
            <a class="nav-link" href='#'>Habilidades</a>
            <a class="nav-link" href='#'>Contactame</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
