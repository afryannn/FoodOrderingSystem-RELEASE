<template>
<div class="food">
  <navbar/>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h2>Daftar<strong>Makanan</strong></h2>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <div class="input-group flex-nowrap">
          <input
            v-model="search"
            @keyup="SearchFood"
            type="text"
            class="form-control"
            placeholder="Cari Makanan sekarang..."
            aria-label="Cari"
            aria-describedby="addon-wrapping"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">Cari</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
        <CardProduct :product="product" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "food",
  components: {
    navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    SearchFood() {
      axios
        .get("http://localhost:3000/products?q="+this.search)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log("Fail : ", error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Fail : ", error));
  },
};
</script>

<style scoped>
</style>