$(document).ready(function(){ 

  $(function () {
    $('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );
      if( target.length ) {
      event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 100);
      }
    }); 
  }); 
});

$(document).ready(function(){
  var flag = false;
  var scroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 0){
      if(!flag){
        $(".navbar").css({"background-color": "#000"});
        $(".navbar-nav li a").css({"color": "#fff"});
        $(".navbar-nav .dropdown-menu li a").css({"color": "#ABC566"});
        $(".navbar-nav li a.active").css({"color": "#ABC566"});
        flag = true;
      }
    } 
    else{
      if(flag){
        $(".navbar").css({"background-color": "rgba(0, 0, 0, 0)"});
        $(".navbar-nav li a").css({"color": "#fff"});
        $(".navbar-nav .dropdown-menu li a").css({"color": "#ABC566"});
        flag = false;
      }
    }       
  });
});

  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('.navbar').addClass('scrolled');
    }
    if ($(window).scrollTop() < 1) {
      $('.navbar').removeClass('scrolled');
    }
  });

/*Efecto botón hamburger*/
$(document).ready(function(){
  var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });    

    menu.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  }); 


  $('.customer-logos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  }); 
});



//MENÚ
sup=`
<nav class="navbar navbar-default" data-target=".navbar-collapse" data-toggle="collapse">
    <div class="container">
      <a class="navbar-brand" href="distribuidores.html"><img src="imagenes/logo/ecodeck-logo.png" alt="logo Ecodeck"></a>
      <button class="hamburger hamburger--emphatic" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">            
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div id="menu">
        <ul class="nav navbar-nav">
          <li data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
            <a class="nav-link" href="#inicio"><i class="bi bi-house-door-fill icono-home"></i></a>
          </li>
          <li data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
            <a class="nav-link" href="#productos">Productos</a>
          </li> 
          <li class="nav-item-contacto" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
            <a id="nav-contacto" class="nav-link" href="#contacto">Contactanos</a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </nav>
`;
document.write(sup);


//FOOTER
sup=`
  <footer>  
    <div class="bg-dark">
      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-12">
              <div class="logo-footer">
                <img src="imagenes/logo/ecodeck-logo.png" alt="logo Ecodeck">
                <p>Somos Distribuidores oficiales de Ecodeck para Mar del Plata y la Costa Atlántica. Brindamos asesoramiento.</p>
                <a class="boton-transparente btn-default btn animate__animated animate__slideInUp" href="#" role="button" data-bs-toggle="modal" data-bs-target="#ModalForm">Suscribite<i class="bi bi-arrow-right-circle-fill"></i></a>                
              </div><!-- cierra logo-footer-->
            </div><!-- cierra col-->
            <div class="col-lg-3 col-md-12"> 
                <h4>PRODUCTOS</h4>
                <ul>       
                <li><a class="nav-link" href="#productos"><i class="bi bi-caret-right-fill"></i> Incienso</a></li>
                <li><a class="nav-link" href="#productos"><i class="bi bi-caret-right-fill"></i> Blanco Smoke</a></li>
                <li><a class="nav-link" href="#productos"><i class="bi bi-caret-right-fill"></i> Maple</a></li>
                <li><a class="nav-link" href="#productos"><i class="bi bi-caret-right-fill"></i>Gris Mirage</a></li>
              </ul>
            </div><!-- cierra col-->
            <div class="col-lg-4 col-md-12">  
                <h4>CONTACTO</h4>
                <ul class="contacto-footer">
                  <li><a class="footer-direccion" href="https://goo.gl/maps/pG6BBr4cebvdmBFX9" target="_blank"><i class="bi bi-geo-alt"></i><span>Dirección:</span> Mar del Plata </a></li>                
                  <li><a href=""><i class="bi bi-phone-vibrate"></i> <span>Celular:</span> 2235425010</a></li>
                  <li><a href=""><i class="bi bi-envelope"></i> <span>E-mail:</span> mardelplata@ecodeck.com.ar</a></li>        
                </ul>
                <div class="redes-sociales">
                  <ul>
                    <li><a href="https://www.facebook.com/Ecodeck.mdq/" target="_blank"><i class="bi bi-facebook" title="Encontranos en Facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/ecodeck.mdq/" target="_blank"><i class="bi bi-instagram" title="Encontranos en Instagram"></i></a></li>
                  </ul>
                </div><!-- cierra redes-sociales-->
              </div><!-- cierra col-->
            </div><!-- cierra row-->
          </div> <!-- cierra container-->  
        </div> <!-- cierra py-3-->  
      </div><!-- cierra bg-dark -->       
    </footer>
`;
document.write(sup);


//DERECHOS RESERVADOS
sup=`
  <div class="footer-bottom">
      <p class="copyright">Copyright &copy; <script>document.write(new Date().getFullYear())</script> Ecodeck. Todos los derechos reservados.</p>
    </div><!-- cierra footer-bottom -->
  `;
document.write(sup);


/*MODAL SUSCRIPCION*/
sup=`
<div class="modal fade" id="ModalForm" tabindex="-1" aria-labelledby="ModalFormLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="form-area">
          <h4 class="text-center" id="ModalFormLabel">Completá los campos para suscribirte</h4>
          <form>
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="exampleInputName1" required>
            </div><!-- cierra mb -->
            <div class="mb-3 mt-4">
              <label for="exampleInputEmail1" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
            </div><!-- cierra mb -->
            <button type="submit" class="btn animate__animated animate__slideInUp">ENVIAR <i class="bi bi-envelope-fill"></i></button>
          </form>
        </div><!-- cierra form-area-->  
      </div><!-- cierra modal-body-->  
    </div><!-- cierra modal-content-->  
  </div><!-- cierra modal-dialog-->  
</div><!-- cierra modal-->  
`;
document.write(sup);

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
  }  
});
