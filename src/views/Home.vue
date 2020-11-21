<template>
  <div class="home">
    <navbar/>
    <div class="container">
      <Hero />

      <div class="row mt-4">
        <div class="col">
          <h2>
            Best
            <strong>Foods</strong>
          </h2>
        </div>

        <div class="col">
          <router-link to="/food" class="btn btn-success float-right">Lihat Semua</router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product"/>
        </div>
      </div>
    </div>
    <!-- container -->
  </div>
</template>

<script>
import axios from "axios";
import Hero from "@/components/Hero.vue";
import navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Home",
  components: {
    Hero,
    CardProduct,
    navbar
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Fail : ", error));
  },
};
</script>