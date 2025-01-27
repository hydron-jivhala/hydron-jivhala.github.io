<script>
  import { onMount } from "svelte";
  import * as main from "../../lib/main.js";

  onMount(() => {
    main.setupSwiper();
    main.setupStickyNavBar(true);
    new WOW({ live: false, animateClass: "animate__animated" }).init();
  });
</script>
  

<div class="container-xl mt-7 mb-5">
  <h4 class="display-6 my-3 text-center text-muted fw-normal">Contact Us</h4>

  <p class="lead text-center text-light-emphasis w-75 m-auto">Any query related to product, service, order or delivery?</p>
  <p class="lead text-center text-light-emphasis w-75 m-auto mb-4">Get in touch with us, and we will get back to you!</p>
  <!-- <h4 class="text-center text-light-emphasis fw-normal"></h4> -->

  <div class="row">
    <div class="col-md-10 offset-md-1">
      <form action="">
        <div class="mb-3 input-group">
          <span class="input-group-text"> <i class="fa fa-user"></i> </span>
          <input type="text" class="form-control form-control-lg" name="name" placeholder="Full Name" />
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="mb-3 input-group">
              <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
              <input type="phone" class="form-control form-control-lg" name="mobile" placeholder="Mobile" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="mb-3 input-group">
              <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
              <input type="email" class="form-control form-control-lg" name="email" placeholder="Email" />
            </div>
          </div>
        </div>

        <div class="mb-3 input-group">
          <span class="input-group-text"> <i class="fa fa-list"></i> </span>
          <select class="form-select form-select-lg" placeholder="Email">
            <option>Select service</option>
            <option value="1">Hydron</option>
            <option value="2">Jivhala Masale</option>
            <option value="3">Other</option>
          </select>
        </div>

        <div class="mb-3 input-group">
          <textarea class="form-control form-control-lg" name="message" rows="4" placeholder="Message"></textarea>
        </div>

        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-lg btn-dark text-white mt-3 rounded-pill px-sm-6">Send Your Message</button>
        </div>
      </form>
    </div>
  </div>

  <hr class="mt-5" />

  <h4 class="display-6 my-3 text-center text-muted fw-normal">Our Location</h4>

  <div class="card text-bg-light bg-opacity-50 d-block d-sm-inline-block offset-sm-1 rounded-3 shadow my-4">
    <div class="card-body p-4 vstack link-underline-opacity-0">
      <h5 class="text-secondary-emphasis">Head Office Address :</h5>
      <p class="mb-2">
        <i class="fa fa-map-marker-alt me-3"></i>Om Ganesh Park, Shanivar Peth,<br />
        &nbsp; &nbsp; &nbsp; Pune-412207, Maharashtra, India.
      </p>
      <a class="link-dark fw-semibold mb-2" href="tel:919123456789"><i class="fa fa-phone me-3"></i>+91 9123 45 67 89</a>
      <a class="link-dark fw-semibold mb-2" href="tel:919123456789"><i class="fa fa-phone me-3"></i>+91 9123 45 67 89</a>
      <a class="link-dark fw-semibold mb-2" href="mailto:test.hydron@gmail.com"><i class="fa fa-envelope me-3"></i>test.hydron@gmail.com</a>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-10 offset-sm-1 text-center mt-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2267408216053!2d73.84772382621723!3d18.518653069230748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07a5772ee9d%3A0x5189b648eaddaf35!2sShaniwar%20Peth%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1737965795895!5m2!1sen!2sin"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>