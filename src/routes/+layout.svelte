<script>
  import { onMount } from "svelte";
  import * as main from "../lib/main.js";
  import wowJsSrc from "wowjs/dist/wow.js?url";
  import Product from "./Product.svelte";

  import { page } from "$app/state";
  // import scriptSrc from "bootstrap/dist/js/bootstrap.bundle.min.js?client";
  import * as collapse from "bootstrap/js/dist/collapse.js?client";
  import * as bsModal2 from "bootstrap/js/dist/modal.js?client";

  //import * as wow from "wowjs/dist/wow.js?client";
  //import WOW from 'wowjs?client';

  /*    import "/style.scss";   */
  /*  import { Tooltip, Toast, Popover } from 'bootstrap'; */
  /*   import * as bootstrap from "./node_modules/bootstrap"; // Import all of Bootstrap's JS */

  let { children } = $props();

  onMount(async () => {
    //const { doThing } = await import("wowjs");
    setTimeout(() => {
      //new WOW({ live: false, animateClass: "animate__animated111" }).init();
    }, 2111);

    main.setupScrollBtn();
    console.log(page.url.pathname);
    //new WOW({ live: false, animateClass: "animate__animated" }).init();
  });
</script>

<svelte:head>
  <!--   <script src={scriptSrc}></script> -->
  <script src={wowJsSrc}></script>
  <!-- <link href="./node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet" /> -->

  <title>Hydron Healthcare Pvt. Ltd.</title>
  <meta name="description" content="Hydron Medical products and Jivhala Masale" />
</svelte:head>

<nav class="navbar navbar-expand-sm fixed-top p-0 shadow bg-secondary">
  <div class="container-xl">
    <a class="navbar-brand rounded-pill" href="./">
      <img id="logo" style="height: 5rem" src="./hydron_logo.png" alt="Hydron" /></a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a
            class="nav-link btn btn-outline-secondary rounded-pill fw-semibold active"
            class:active={page.url.pathname == "/"}
            href="./">Hydron</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link btn btn-outline-secondary rounded-pill fw-semibold"
            class:active={page.url.pathname.includes("spices")}
            href="./spices">Jivala Masale</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link btn btn-outline-secondary rounded-pill fw-semibold"
            class:active={page.url.pathname.includes("contact")}
            href="./contact">Contact Us</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link btn btn-outline-secondary rounded-pill fw-semibold"
            class:active={page.url.pathname.includes("about")}
            href="./about">About Us</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>

{@render children()}

<section class="footer link-underline-opacity-0">
  <!-- Back to top button -->
  <button
    class="btn btn-success btn-lg position-fixed rounded-pill shadow"
    id="btn-back-to-top"
    style="bottom: 20px; right: 20px; z-index: 1050"
  >
    <i class="fas fa-arrow-up"></i>
  </button>

  <div
    class="container-fluid sticky-bottom text-black fs-6 border-top shadow-lg py-5 mt-3 mt-md-5"
    style="background-image: linear-gradient(11deg, #00c2e9 0%, #80d0c7 100%)"
  >
    <div class="container-xl">
      <div class="row gy-3 py-2">
        <div class="col-sm-4">
          <h5 class="opacity-75">Connect with us</h5>
          <ul class="list-inline link-underline-opacity-75-hover">
            <li class="list-inline-item">
              <a href=""><i class="fa-brands fa-square-facebook fs-1 link-dark"></i></a>
            </li>
            <li class="list-inline-item">
              <a href=""><i class="fa-brands fa-square-twitter fs-1 link-dark"></i></a>
            </li>
            <li class="list-inline-item">
              <a href=""><i class="fa-brands fa-square-youtube fs-1 link-dark"></i></a>
            </li>
            <li class="list-inline-item">
              <a href=""><i class="fa-brands fa-square-instagram fs-1 link-dark"></i></a>
            </li>
          </ul>

          <div class="vstack mt-3">
            <a class="link-dark fw-semibold" href="tel:919123456789"
              ><i class="fa fa-phone me-2"></i>+91 9123 45 67 89</a
            >
            <a class="link-dark fw-semibold" href="tel:919123456789"
              ><i class="fa fa-phone me-2"></i>+91 9123 45 67 89</a
            >
            <a class="link-dark fw-semibold" href="mailto:test.hydron@gmail.com"
              ><i class="fa fa-envelope me-2"></i>test.hydron@gmail.com</a
            >
          </div>
        </div>
        <div class="col-sm-4 border-sm-0 border-start border-dark border-opacity-25 ps-md-5">
          <h5 class="opacity-75">Quick Links</h5>
          <div class="vstack gap-1 link-underline-opacity-75-hover">
            <a class="link-dark fw-semibold" href="./"><i class="fa fa-home me-2"></i>Home</a>
            <a class="link-dark fw-semibold" href="./"><i class="fa fa-rectangle-list me-2"></i>Products</a>
            <a class="link-dark fw-semibold" href="./spices"><i class="fa fa-mortar-pestle me-2"></i>Jivala Masale</a>
            <a class="link-dark fw-semibold" href="./media"><i class="fa fa-photo-film me-2"></i>Media</a>
          </div>
        </div>
        <div class="col-sm-4 border-sm-0 border-start border-dark border-opacity-25 ps-md-5">
          <h5 class="opacity-75">We want to hear from you.</h5>
          <div class="vstack gap-1 link-underline-opacity-75-hover">
            <a class="link-dark fw-semibold" href="./contact"><i class="fa fa-address-card me-2"></i>Contact Us</a>
            <a class="link-dark fw-semibold" href=""><i class="fa fa-people-roof me-2"></i>About Us</a>
            <!-- <a class="link-dark fw-semibold" href=""><i class="fa fa-comments me-2"></i>Feedback</a> -->
          </div>
        </div>
      </div>

      <div class="row mt-5 link-underline-opacity-75-hover" style="font-size: 0.8rem">
        <hr />
        <div class="d-sm-flex justify-content-between">
          <div>
            <a class="link-dark fw-semibold" href="#">Terms and Conditions</a>
          </div>
          <div>
            <a class="link-dark fw-semibold" href="#">Privacy Policy</a>
          </div>
          <div>
            <a class="link-dark fw-semibold" href="#">Copyrights 2024 @ Hydron Healthcare Pvt. Ltd.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--  product modal -->

<div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <Product></Product>
</div>

<!-- <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header py-1">
        <h2 class="">Gabadron-NT</h2>
        <a class="ms-auto px-2 text-black-50" href="#" data-bs-dismiss="modal"><i class="fa fa-close fa-2x"></i></a>
      </div>

      <div class="modal-body p-0">
        <div class="header-prod p-2 rounded-1" id="product">
          <div class="container">
            <div class="row d-flex mt-3 gy-3">
              <div class="col-lg-6 h-100 align-self-center text-center">
                <img src="/medcine.jpg" alt="" class="img-fluid shadow-lg rounded-2" />
              </div>
              <div class="col-lg-6 my-5">
                <div class="text-center mt-4">
                  <h1 class="display-3 text-center fw-bolder m-0 mt-3">
                    <sup><i class="fa fa-prescription fs-5"></i></sup>
                    Gabadron<span class="text-success">-NT</span>
                  </h1>
                  <small class="lead fw-normal">Pregabaline 75 mg, Nortriptyline Hydrochloride 10mg</small>
                  <h2 class="m-0 p-0 mt-3 fst-italic">
                    Your <span class="text-success">masterstroke</span> for
                  </h2>
                  <h2 class="m-0 p-0 fst-italic">All types of neuropathy pain</h2>
                </div>

                <div class="row mt-5 gy-3">
                  <div class="col-sm-6">
                    <div class="card shadow h-100">
                      <div class="card-header text-center text-bg-success lead fw-semibold">Pregabalin 75mg</div>
                      <div class="card-body">
                        is Alpha 2 delta ligand. Decreases the pain by modulating calcium channel activity of the nerve
                        cells.
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card shadow">
                      <div class="card-header text-center text-bg-success lead fw-semibold">Nortriptyline 10mg</div>
                      <div class="card-body">
                        is a tricyclic antidepressant. Increases the levels of serotonin and noradrenaline. Stop the
                        movement of pain signals in the brain.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-lg mb-4">
            <div class="row d-flex mt-2 gy-2">
              <div class="col-lg-6 my-5">
                <div class="text-center mb-3">
                  <div class="btn-group">
                    <span class="btn btn-success fs-3 rounded-start-5 fst-italic">Effective In</span>
                    <span class="btn btn-warning fs-3 rounded-end-5 fw-lighter">Neuropathy Pain</span>
                  </div>
                </div>

                <ul class="list-group list-group-flush text-center rounded-2 shadow-lg">
                  <li class="list-group-item py-3">
                    <h5 class="ps-2">
                      <i class="fas fa-hand-holding-medical text-success"></i> Neuropathic Pain Associated with:
                    </h5>
                    <ul class="list-unstyled mt-3 gy-2">
                      <li class="px-3 mx-3 rounded-pill text-bg-warning d-inline-block">Spondylitis</li>
                      <li class="px-3 mx-3 rounded-pill text-bg-warning d-inline-block">Arthritis</li>
                      <li class="px-3 mx-3 rounded-pill text-bg-warning d-inline-block">Sciatica</li>
                    </ul>
                  </li>
                  <li class="list-group-item py-3">
                    <h5 class="ps-2">
                      <i class="fas fa-hand-holding-medical text-success"></i> Diabetic Neuropathy
                    </h5>
                  </li>
                  <li class="list-group-item py-3">
                    <h5 class="ps-2">
                      <i class="fas fa-hand-holding-medical text-success"></i> Peripherial Neuropathy
                    </h5>
                  </li>
                  <li class="list-group-item py-3">
                    <h5 class="ps-2">
                      <i class="fas fa-hand-holding-medical text-success"></i> Diabetic Neuropathy
                    </h5>
                  </li>
                </ul>
              </div>

              <div class="col-lg-6 h-100 align-self-center text-center">
                <img src="/sciattica.jpg" alt="" class="img-fluid shadow-lg rounded-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 -->
