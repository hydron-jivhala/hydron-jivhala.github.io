<script>
  import { onMount } from "svelte";
  import * as main from "../lib/main.js";

  import { selectedItem, medList } from "./data.svelte.js";

  const prod = $derived(medList.find((e) => e.Item == selectedItem.item));

  onMount(() => {
    main.setupSwiper();
  });
</script>

<style lang="scss">

/* .header-prod {
  min-height: 100vh;
  background: linear-gradient(to bottom right, rgba(212, 249, 253, 0.911), rgba(237, 253, 251, 0.959)),
    url("{prod.Item}_med.jpeg") center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: rgb(41, 0, 39) !important;
  h1 {
    text-shadow: 0px 2px 2px rgba(176, 185, 183, 0.4);
  }
  .features li {
    border-color: #1a485e;
    background-image: linear-gradient(109.6deg, rgba(15, 2, 2, 1) 11.2%, rgba(36, 163, 190, 1) 91.1%);
    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(15, 146, 148) 0%, rgb(76, 163, 115) 90%);
  }
} */

</style>

<div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content">
    <div class="modal-header py-1">
      <h2 class="">Gabadron-NT</h2>
      <a class="ms-auto px-2 text-black-50" href="#" data-bs-dismiss="modal"><i class="fa fa-close fa-2x"></i></a>
    </div>

    <div class="modal-body p-0">
      <div class="header-prod p-2 rounded-1" id="product" style="background: linear-gradient(to bottom right, rgba(212, 249, 253, 0.811), rgba(237, 253, 251, 0.859)),
    url('{prod.Item}_med.jpeg') center center no-repeat;">
        <div class="container">
          <div class="row d-flex mt-3 gy-3">
            <div class="col-lg-6 h-100 align-self-center text-center">
              <img src="./{prod.Item}_med.jpeg" alt="" class="img-fluid shadow-lg rounded-2" />
            </div>
            <div class="col-lg-6 my-5">
              <div class="text-center mt-4">
                <h1 class="display-3 text-center fw-bolder m-0 mt-3 text-success">
                  <sup><i class="fa fa-prescription fs-5"></i></sup>
                  {prod.Name}
                </h1>

                {#each prod.Composition as comp}
                  <li><small class="lead fw-normal">{comp}</small></li>
                {/each}


                <h2 class="m-0 p-0 mt-3 fst-italic">Your <span class="text-success">masterstroke</span> for</h2>
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
                  <h5 class="ps-2"><i class="fas fa-hand-holding-medical text-success"></i> Diabetic Neuropathy</h5>
                </li>
                <li class="list-group-item py-3">
                  <h5 class="ps-2"><i class="fas fa-hand-holding-medical text-success"></i> Peripherial Neuropathy</h5>
                </li>
                <li class="list-group-item py-3">
                  <h5 class="ps-2"><i class="fas fa-hand-holding-medical text-success"></i> Diabetic Neuropathy</h5>
                </li>
              </ul>
            </div>

            <div class="col-lg-6 h-100 align-self-center text-center">
              <img src="sciattica.jpg" alt="" class="img-fluid shadow-lg rounded-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
