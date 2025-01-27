<script>
  import { onMount } from "svelte";
  import * as main from "../../lib/main.js";
  onMount(() => {
    new WOW({ live: false, animateClass: "animate__animated" }).init();
    main.setupStickyNavBar(true);
  });

  let prodList = [
    {
      Name: "Kanda Lasun Masala (Onion Garlic)",
      Image: "Kanda",
      Desc: "Elevate your dishes with the robust flavors of our Kanda Garlic powder, a perfect blend of onion and garlic that adds a savory depth to any recipe.",
    },

    {
      Name: "Goda Masala ",
      Image: "Goda",
      Desc: "Experience the authentic taste of Maharashtra with our aromatic Goda Masala, a perfect blend of spices that brings warmth and complexity to your culinary creations.",
    },
    {
      Name: "Garam Masala ",
      Image: "Garam",
      Desc: "Elevate your cooking with our exquisite Garam Masala, a harmonious blend of spices that adds a burst of flavor and aroma to every meal.",
    },
    {
      Name: "Halad (Turmeric Powder) ",
      Image: "Halad",
      Desc: "Infuse your dishes with the golden glow and health benefits of our pure Halad, a staple spice known for its vibrant color and earthy flavor.",
    },
    {
      Name: "Jeera (Cumin Seeds) ",
      Image: "Jeera",
      Desc: "Enhance your recipes with the nutty, peppery notes of our premium Jeera, a versatile spice that adds a distinctive taste to any cuisine.",
    },
    {
      Name: "Mirchi (Chili Powder) ",
      Image: "Mirchi",
      Desc: "Add a fiery kick to your dishes with our bold Mirchi powder, perfect for those who crave a touch of heat in their meals.",
    },
    {
      Name: "Bedagi (Byadgi Chili Powder) ",
      Image: "Bedagi",
      Desc: "Discover the rich, smoky flavor of our Bedagi chili powder, ideal for adding a mild heat and deep red color to your culinary creations.",
    },
    {
      Name: "Dhane (Coriander Seeds) ",
      Image: "Dhane",
      Desc: "Bring a burst of citrusy freshness to your dishes with our aromatic Dhane, a versatile spice that enhances both savory and sweet recipes.",
    },
    {
      Name: "Chicken Masala ",
      Image: "Chicken",
      Desc: "Create mouthwatering chicken dishes with our expertly crafted Chicken Masala, a blend of spices that delivers a perfect balance of flavor and aroma.",
    },
    {
      Name: "Pavbhaji Masala ",
      Image: "Pavbhaji",
      Desc: "Transform your pav bhaji into a culinary masterpiece with our flavorful Pavbhaji Masala, a blend that captures the essence of Mumbai's street food.",
    },
    {
      Name: "Biryani Masala ",
      Image: "Biryani",
      Desc: "Indulge in the rich, aromatic flavors of our Biryani Masala, a perfect blend of spices that brings the traditional taste of biryani to your kitchen.",
    },
    {
      Name: "Chaat Masala ",
      Image: "Chaat",
      Desc: "Add a tangy twist to your snacks with our zesty Chaat Masala, a unique blend of spices that elevates the flavor of any chaat or salad.",
    },
    {
      Name: "Chole Masala ",
      Image: "Chole",
      Desc: "Create delicious, authentic chole with our robust Chole Masala, a blend of spices that adds depth and richness to your chickpea curry.",
    },
    {
      Name: "Mutton Masala ",
      Image: "Mutton",
      Desc: "Savor the rich, hearty flavors of our Mutton Masala, a perfect blend of spices that enhances the taste of your mutton dishes, making them truly unforgettable.",
    },
  ];
</script>

<div class="container-fluid m-0 pb-5"> 
<header class="header-spices py-6 shadow-lg">
  <div class="container">
    <div class="row">
      <img class="card-img-bottom img-fluid w-75 h-75 mx-auto" src="./j_logo2.png" />
    </div>

    <div class="row pt-2 border-2 rounded-3 text-center">
      <h1 class="display-1 my-3 fw-bolder p-2">Jivala Masale</h1>
      <h4 class="display-4 my-4 fw-bolder fst-italic text-warning">Taste of Love</h4>

      <p class="display-6 px-md-8 fw-semibold text-white">
        At Jivala, we believe that life is too short for bland food. Our journey began in the heart of spice-loving
        kitchens, where we discovered the magic that a pinch of the right spice can bring to any dish.
      </p>

      <div class="features my-4">
        <div
          class="mt-1 card shadow-lg bg-dark bg-opacity-50 rounded-4 wow animate__fadeInLeftBig"
          data-wow-delay=".1s"
        >
          <div class="card-body d-flex">
            <i class="fa fa-wheat-awn fa-4x text-success align-content-center"></i>
            <div class="px-2 px-sm-4 text-start">
              <p class="lead fw-normal text-warning">
                <b>Sourced with Love :</b> We partner directly with farmers who nurture their spice crops like family. Quality
                and sustainability are our guiding stars.
              </p>
            </div>
          </div>
        </div>
        <div
          class="mt-1 card shadow-lg bg-dark bg-opacity-50 rounded-4 wow animate__fadeInLeftBig"
          data-wow-delay=".2s"
        >
          <div class="card-body d-flex">
            <i class="fa fa-pepper-hot fa-4x text-danger align-content-center"></i>
            <div class="px-2 px-sm-4 text-start">
              <p class="lead fw-normal text-warning">
                <b>Freshness Unleashed :</b> Our spices are ground in small batches to preserve their essence. When you open
                that jar, you’re inhaling pure magic.
              </p>
            </div>
          </div>
        </div>
        <div
          class="mt-1 card shadow-lg bg-dark bg-opacity-50 rounded-4 wow animate__fadeInLeftBig"
          data-wow-delay=".3s"
        >
          <div class="card-body d-flex">
            <i class="fa fa-medal fa-4x text-warning align-content-center"></i>
            <div class="px-2 px-sm-4 text-danger">
              <p class="lead fw-normal text-warning">
                <b>Quality Assurance :</b> Safety and quality are non-negotiable. Our state-of-the-art manufacturing facilities
                adhere to the highest industry standards. Every batch undergoes rigorous quality control to ensure efficacy
                and purity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  <div class="container-sm mt-6">
    <div class="row g-4 g-lg-5 p-2">
      {#each prodList as med, i}
        <div class="col-sm-6 col-md-4 wow animate__pulse">
          <div class="card shadow">
            <img class="card-img-left" src="./{med.Image}.jpg" />
            <div
              class="card-body"
              style="background: linear-gradient(157.59deg, hsla(0, 0%, 100%, 0.1) -2.85%, rgba(87, 67, 143, 0.1) 89.86%)"
            >
              <h4 class="card-title text-warning fw-bold">{med.Name}</h4>

              <div class="mt-4 d-flex align-items-center">
                <p class="">{med.Desc}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .container-fluid {
    background: linear-gradient(270deg, rgb(185 156 137 / 30%) 0%, rgb(253 186 100 / 58%) 100%) !important;
  }
</style>
