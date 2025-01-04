<script>
  import { onMount } from "svelte";
  import * as main from "../lib/main.js";
  import Hero from "./Hero.svelte";
  import { selectedItem, medList } from "./data.svelte.js";
  import scriptSrc2 from "wowjs/dist/wow.js?url";

  const startMed = medList.filter((m) => m.Item < 5);
  let wowLoaded = false;
  onMount(() => {
    main.setupSwiper();

    const myModal = document.getElementById("productModal");
    myModal.addEventListener("show.bs.modal", function (event) {
      const card = event.relatedTarget; // Button that triggered the modal
      selectedItem.item = card.getAttribute("data-bs-item"); // Extract info from data-bs-* attributes
    });

    setTimeout(() => {
      console.log("in page.svelete setTimeout");
      wowLoaded = true;
      new WOW({ live: false, animateClass: "animate__animated" }).init();

    }, 100);
    console.log("in page.svelete");
    //new WOW({ live: false, animateClass: "animate__animated" }).init();
  });
</script>

<svelte:head>
  <script src={scriptSrc2}></script>
</svelte:head>

  <Hero></Hero>

<div class="container-xl my-5 pt-3"  >
  <div class="display-5 my-5 text-center text-info-emphasis fw-bold">Our Popular Star Products</div>
  <!-- Slider main container -->
  <div class="swiper">
    <div class="swiper-wrapper">
      {#each startMed as med}
        <div class="swiper-slide rounded-pillZ">
          <div
            class="row border-4"
            style="background: linear-gradient(194deg, hsl(166.11deg 100% 97.57%) -2.85%, rgb(181 232 236) 100.86%)"
          >
            <div class="col-sm-8">
              <img class="card-img-bottom img-fluid" src="./{med.Item}_med.jpeg" />
            </div>
            <div class="col-sm-4 d-flex align-self-center">
              <div class="p-3 me-md-5">
                <h5 class="card-title">{med.Name}</h5>
                <h6 class="text-body-secondary">{med.Composition}</h6>
                <p class="card-text text-body-secondary small">
                  {med.KeyPoint}
                </p>
                <div class="text-center">
                  <a
                    class="btn stretched-link btn-outline-success p-0 pe-2 rounded-2 text-nowrap"
                    data-bs-toggle="modal"
                    data-bs-target="#productModal"
                    data-bs-item={med.Item}
                  >
                    <span
                      class="d-inline-block position-relative start-0 bg-black bg-opacity-25 rounded-start-2 py-1 px-2"
                    >
                      <i class="fa fa-arrow-right"></i>
                    </span>
                    &nbsp; Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev text-dark-emphasis"></div>
    <div class="swiper-button-next text-dark-emphasis"></div>
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>

  <!-- All Products cards -->
  <div class="display-6 mt-6 text-center text-info-emphasis fw-bold">Explore All Products</div>
  <div class="row mt-4 g-4">
    {#each medList as med, i}
      <div class="col-sm-6 col-md-4 wow animate__backInUp">
        <div class="card shadow">
          <img class="card-img-top" src="./{med.Item}_med.jpeg" />
          <div
            class="card-body"
            style="background: linear-gradient(157.59deg, hsla(0, 0%, 100%, 0.1) -2.85%, rgba(87, 67, 143, 0.1) 89.86%)"
          >
            <h4 class="card-title">{med.Name}</h4>
            <!-- <h6 class="text-body-secondary">{med.Composition.map((e) => e.concat(" "))}</h6> -->
            <!-- <ul>
              {#each med.Composition as comp}
              <li>
                <h6 class="text-body-secondary">{comp}</h6>
              </li>
              {/each}
            </ul> -->
            {#each med.Composition as comp}
              <li><span class="text-dark-emphasis small fst-italic">{comp}</span></li>
            {/each}

            <p class="card-text text-success">
              {med.KeyPoint.map((e) => "  " + e)}
            </p>
            <div class="mt-4 d-flex align-items-center">
              <!-- <div class=""><a href="#" class="fw-semibold text-dark text-decoration-none stretched-link">Read more ></a></div> -->
              <a
                class="btn stretched-link btn-outline-success p-0 pe-2 rounded-2 text-nowrap"
                data-bs-toggle="modal"
                data-bs-target="#productModal"
                data-bs-item={med.Item}
              >
                <span class="d-inline-block position-relative start-0 bg-black bg-opacity-25 rounded-start-2 py-1 px-2">
                  <i class="fa fa-arrow-right"></i>
                </span>
                &nbsp; Read more
              </a>
              <div class="ms-auto text-end">
                <span class="badge badge-lg bg-warning">New</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
