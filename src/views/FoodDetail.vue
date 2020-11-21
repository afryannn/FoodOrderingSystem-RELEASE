<template>
  <div class="food-detail">
    <navbar/>
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img
            style="border-radius: 15px"
            :src="require('../assets/images/' + product.gambar)"
            width="100%"
            class="card-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga : <strong>Rp.{{ product.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent="pemesanan">
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pemesanan"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan spt : manis"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success">Pesan</button>
          </form>
        </div>
      </div>
    </div>
    <!--container -->
  </div>
</template>

<script>
import axios from "axios";
import navbar from "@/components/Navbar.vue";
export default {
  name: "FoodDetail",
  components: {
    navbar
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/keranjang" });
            this.$toast.success("Success Masuk Keranjang", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dimissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Tolong Masukan Jumlah", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dimissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>