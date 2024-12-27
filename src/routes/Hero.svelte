<script>
  import { onMount } from "svelte";
  import * as main from "../lib/main.js";

  let { prod = {} } = $props();

  onMount(() => {
    main.setupSwiper();
  });
</script>

<header class="header py-8 shadow-lg">
  <div class="container rounded-3">
    <div class="row">
      <!-- style="background: linear-gradient(127deg, rgba(59, 232, 238, 0.884) 33.86%, hsl(275deg 14.1% 77.49% / 36%) 92.85%)" -->
      <h1 class="display-1 text-center my-3 fw-bolder p-2 wow animate__pulse">Hydron Healthcare Pvt. Ltd.</h1>
      <h4 class="display-5 mt-5 text-center">We Care for Your Health</h4>

      <p class="lead px-sm-5 px-lg-7 m-auto mb-4 fw-bold text-muted">
        Our mission is to improve health outcomes by developing and delivering safe, effective medications. Safety and
        quality are non-negotiable. Our state-of-the-art manufacturing facilities adhere to the highest industry
        standards. Every batch undergoes rigorous quality control to ensure efficacy and purity.
      </p>
      <div class="features">
        <h4 class="text-center mt-5 px-5 opacity-75">Our Associated Manufacturing Plant :</h4>
        <div class="d-flex justify-content-center pb-5">
          <ul class="list-unstyled list-group list-group-flush">
            <li
              class="fw-semibold list-group-item text-white rounded-pill px-3 px-sm-5 py-3 wow animate__bounceInLeft"
              data-wow-delay=".1s"
            >
              <i class="fa fa-check fa-1x fw-bold pe-3"></i>Ultra Modern Plant
            </li>
            <li
              class="fw-semibold list-group-item text-white rounded-pill px-3 px-sm-5 py-3 wow animate__bounceInLeft"
              data-wow-delay=".4s"
            >
              <i class="fa fa-check fa-1x fw-bold pe-3"></i>Modern Machinery and Laboratory
            </li>
            <li
              class="fw-semibold list-group-item text-white rounded-pill px-3 px-sm-5 py-3 wow animate__bounceInLeft"
              data-wow-delay=".6s"
            >
              <i class="fa fa-check fa-1x fw-bold pe-3"></i>ISO 9001 : 2015
            </li>
            <li
              class="fw-semibold list-group-item text-white rounded-pill px-3 px-sm-5 py-3 wow animate__bounceInLeft"
              data-wow-delay=".9s"
            >
              <i class="fa fa-check fa-1x fw-bold pe-3"></i>Quality Management System
            </li>
            <li
              class="fw-semibold list-group-item text-white rounded-pill px-3 px-sm-5 py-3 wow animate__bounceInLeft"
              data-wow-delay="1.3s"
            >
              <i class="fa fa-check fa-1x fw-bold pe-3"></i>W.H.O., GMP guidelines compliant
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>
