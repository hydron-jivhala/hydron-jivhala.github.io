<script>
  import { onMount } from "svelte";
  import * as main from "../../lib/main.js";

  onMount(() => {
    main.setupSwiper();
    main.setupStickyNavBar(true);
    new WOW({ live: false, animateClass: "animate__animated" }).init();
  });
</script>

<div class="container-xl my-8">
  <h4 class="display-4 my-5 text-center text-muted fw-normal">About Hydron Healthcare Pvt. Ltd.</h4>

  <div class="mt-5 card shadow-lg bg-body-secondary bg-gradient">
    <div class="card-body d-flex">
      <!-- <img src="./assets/pharma.jpg" alt="" class="card-img-top img-thumbnail shadow" style="width: 200px; height: 200px" /> -->
      <div class="row px-2 px-sm-4 text-center">
        <div class="card-title h4 fw-medium">Our Mission</div>
        <!--  <div class="card-title fw-semibold lead">Empowering Health, Enriching Lives:</div> -->
        <p class="fw-normal text-muted">

          Hydron Healthcare Pvt Ltd is a dedicated pharmaceutical company based in Pune, India, 
          dedicated to improving health and well-being through innovative, high-quality medicines. 
          With a strong commitment to research, safety, and patient care, Hydron Healthcare delivers 
          a wide range of trusted pharmaceutical products across India. 
          Our mission is to make advanced healthcare accessible and affordable for all, 
          while upholding the highest standards of quality and integrity.
          Hydron is a healthcare solutions company that aims to provide exceptional services to its clients.
          We are committed to delivering innovative and customized solutions that meet your specific health needs.
        </p>
        <p class="fw-normal text-muted">
          We’re not just a pharmaceutical company; we’re a mission-driven force committed to ensuring that life-changing
          medications reach every corner, every patient.
        </p>
      </div>
    </div>
  </div>

  <div class="mt-5 card shadow-lg bg-body-secondary bg-gradient">
    <div class="card-body d-flex">
      <div class="row px-2 px-sm-4 text-center">
        <div class="card-title h4 fw-medium">Empowering Health, Enriching Lives</div>
        <p class="fw-normal text-muted">
          Our mission is simple yet profound: to improve global health outcomes by developing and delivering safe,
          effective medications. We strive to be at the forefront of medical advancements, addressing unmet needs and
          enhancing quality of life.
        </p>
      </div>
    </div>
  </div>

  <div class="mt-5 card shadow-lg bg-body-secondary bg-gradient">
    <div class="card-body d-flex">
      <!-- <img src="./assets/pharma.jpg" alt="" class="card-img-top img-thumbnail shadow" style="width: 200px; height: 200px" /> -->
      <div class="row px-2 px-sm-4 text-center">
        <div class="card-title h4 fw-medium">Our Story</div>
        <p class="fw-normal text-muted">
          At Hydron, we believe in a healthier, brighter future. Our journey began 15 years ago with a vision: to
          transform lives through innovative pharmaceutical solutions. Since then, we've remained steadfast in our
          commitment to excellence, research, and patient well-being.
        </p>
      </div>
    </div>
  </div>

  <div class="mt-5 card shadow-lg bg-body-secondary bg-gradient">
    <div class="card-body d-flex">
      <!-- <img src="./assets/pharma.jpg" alt="" class="card-img-top img-thumbnail shadow" style="width: 200px; height: 200px" /> -->
      <div class="row px-2 px-sm-4">
        <div class="card-title text-center h4 fw-medium">What Sets Us Apart</div>
        <ul class="list-group-flush border-0 fw-normal text-muted">
          <li class="list-group-item">
            <b> Scientific Excellence : </b>Our dedicated team work tirelessly to unravel the mysteries of disease.
          </li>
          <li class="list-group-item">
            <b> Patient-Centric Approach : </b>Patients are at the heart of everything we do. We listen, empathize, and
            collaborate with healthcare professionals to develop therapies that make a difference. Our commitment
            extends beyond molecules—it's about improving lives.
          </li>
          <li class="list-group-item">
            <b> Quality Assurance : </b> Safety and quality are non-negotiable. Our state-of-the-art manufacturing facilities
            adhere to the highest industry standards. Every batch undergoes rigorous quality control to ensure efficacy and
            purity.
          </li>
          <li class="list-group-item">
            <b> Wide Impact : </b> From rural clinics to bustling cities, our products reach many. We're proud to contribute
            to healthier communities.
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mt-5 card shadow-lg bg-body-secondary bg-gradient">
    <div class="card-body">
      <div class="row px-2 px-sm-4">
        <div class="card-title text-center h4 fw-medium">Our Values</div>
        <ul class="list-group-flush border-0 fw-normal text-muted">
          <li class="list-group-item">
            <b> Integrity : </b> We operate transparently, guided by ethical principles. Trust is our currency.
          </li>
          <li class="list-group-item">
            <b> Innovation : </b> Curiosity fuels progress. We embrace novel ideas and challenge conventions.
          </li>
          <li class="list-group-item">
            <b> Collaboration : </b> We believe in synergy. Partnerships with healthcare providers, researchers, and patient
            advocacy groups drive meaningful change.
          </li>
          <li class="list-group-item">
            <b> Resilience : </b> The path to discovery is rarely smooth. We persist, adapt, and learn from setbacks.
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mt-5 card shadow-lg bg-body-secondary bg-gradient">
    <div class="card-body d-flex">
      <div class="row px-2 px-sm-4 text-center">
        <div class="card-title h4 fw-medium">Join Our Journey</div>
        <p class="fw-normal text-muted">
          Whether you're a healthcare professional, investor, or simply curious, we invite you to explore our website,
          learn about our products, services and connect with us. Together, we can rewrite the future of healthcare.
        </p>
      </div>
    </div>
  </div>

  <div class="mt-5 card shadow-lg bg-body-secondary bg-gradient">
    <div class="card-body d-flex">
      <div class="row px-2 px-sm-4 text-center">
        <!--div class="card-title h4 fw-medium">Join Our Journey</div-->
        <p class="fw-normal text-muted">
          <b>HYDRON HEALTHCARE PRIVATE LIMITED </b> (CIN: U24119PN2010PTC138076) is a Private company incorporated on 23
          Dec 2010. It is classified as Non-government company and is registered at Registrar of Companies, Pune.
        </p>
        <p class="fw-normal text-muted">
          <b>Registered address : </b> S. No. 404/1, 404/2, Srihari Apartment, Wing A, 1st Fl.,Office no. 5, Shaniwar Peth,
          , Pune, Maharashtra, India - 411030.
        </p>
      </div>
    </div>
  </div>

  <h2 class="text-center mt-7">Meet Our Leadership</h2>

  <div class="container-xl row my-3 justify-content-center flex-sm-nowrap gap-2 m-sm-2">
    <div class=" col-sm-3 my-3 card shadow-lg border-0">
      <div class="">
        <div class="card-body">
          <!-- <div class="text-center">
            <img
              style="width: 35%"
              class="rounded-circle shadow card-img-top"
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt="Team member"
            />
          </div> -->
          <div class="card-text pt-1">
            <h5 class="member-name mb-0 text-center text-primary font-weight-bold">Ajay Sarda</h5>
            <div class="mb-3 text-muted text-center">Director</div>
            <div>A visionary leader with a passion for innovation, driving the company’s global expansion and mission of accessible healthcare</div>
          </div>

          <!-- <div class="card-footer border-0 text-center mt-2">
            <ul class="social-list list-inline mb-0 mx-auto">
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-twitter fs-5"></i> </a>
              </li>
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-facebook-f fs-5"></i> </a>
              </li>
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-instagram fs-5"></i> </a>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>

    <div class=" col-sm-3 my-3 card shadow-lg border-0 mr-2">
      <div class="">
        <div class="card-body">
          <!-- <div class="text-center">
            <img
              style="width: 35%"
              class="rounded-circle shadow card-img-top"
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt="Team member"
            />
          </div> -->
          <div class="card-text pt-1">
            <h5 class="member-name mb-0 text-center text-primary font-weight-bold">Girish Shinde</h5>
            <div class="mb-3 text-muted text-center">Director</div>
            <div>Visionary co-founder who transformed the company into a leading pharma provider through a commitment to affordable, quality healthcare</div>
          </div>

          <!-- <div class="card-footer border-0 text-center mt-2">
            <ul class="social-list list-inline mb-0 mx-auto">
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-twitter fs-5"></i> </a>
              </li>
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-facebook-f fs-5"></i> </a>
              </li>
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-instagram fs-5"></i> </a>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
    <div class=" col-sm-3 my-3 card shadow-lg border-0">
      <div class="">
        <div class="card-body">
          <!-- <div class="text-center">
            <img
              style="width: 35%"
              class="rounded-circle shadow card-img-top"
              src="https://bootdey.com/img/Content/avatar/avatar8.png"
              alt="Team member"
            />
          </div> -->
          <div class="card-text pt-1">
            <h5 class="member-name mb-0 text-center text-primary font-weight-bold">Poonam Sarda</h5>
            <div class="mb-3 text-muted text-center">Director</div>
            <div>A trailblazer in drug development, committed to advancing medical science.</div>
          </div>

          <!-- <div class="card-footer border-0 text-center mt-2">
            <ul class="social-list list-inline mb-0 mx-auto">
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-twitter fs-5"></i> </a>
              </li>
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-facebook-f fs-5"></i> </a>
              </li>
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-instagram fs-5"></i> </a>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
    <div class=" col-sm-3 my-3 card shadow-lg border-0">
      <div class="">
        <div class="card-body">
          <!-- <div class="text-center">
            <img
              style="width: 35%"
              class="rounded-circle shadow card-img-top"
              src="https://bootdey.com/img/Content/avatar/avatar8.png"
              alt="Team member"
            />
          </div> -->
          <div class="card-text pt-1">
            <h5 class="member-name mb-0 text-center text-primary font-weight-bold">Nilima Shinde</h5>
            <div class="mb-3 text-muted text-center">Director</div>
            <div>Leader driving innovation and global growth in spice manufacturing, exports, and organic cultivation.</div>
          </div>

          <!-- <div class="card-footer border-0 text-center mt-2">
            <ul class="social-list list-inline mb-0 mx-auto">
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-twitter fs-5"></i> </a>
              </li>
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-facebook-f fs-5"></i> </a>
              </li>
              <li class="list-inline-item px-2">
                <a class="text-dark" href="#"> <i class="fab fa-instagram fs-5"></i> </a>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </div>

   <div class="row" style="position: absolute; left: -9999px;">
      <p>
      Press Release
      Hydron Healthcare Pvt Ltd: Advancing Health and Wellness in India
      Pune, India – Hydron Healthcare Pvt Ltd, a premier pharmaceutical company, is proud to announce its continued commitment to delivering innovative and high-quality healthcare solutions. Based in Pune, Hydron Healthcare specializes in the research, development, and distribution of a wide range of medicines designed to improve patient outcomes and quality of life.
      With a focus on safety, efficacy, and affordability, Hydron Healthcare has established itself as a trusted name in the Indian pharmaceutical industry. The company’s state-of-the-art manufacturing facilities and rigorous quality control processes ensure that every product meets the highest standards.
      “We believe that everyone deserves access to safe and effective healthcare,” said Girish Shinde, Director of Hydron Healthcare Pvt Ltd. “Our mission is to empower communities by providing reliable medicines and fostering a culture of health and wellness.”
      For more information, visit https://hydron-jivhala.github.io/ or contact us at hydronhealthcare@gmail.com.

      Add the intro paragraph to your homepage for immediate SEO and branding benefit.
      Share the press release with local news outlets, pharma directories, and on your social media channels.
      </p> 
    </div>

</div>
