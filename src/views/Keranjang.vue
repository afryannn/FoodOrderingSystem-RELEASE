<template>
<div class="keranjang">
  <navbar :setkrj="keranjangs"/>
  <div class="container">
    <div class="col">
      <div class="row">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link class="text-dark" to="/">FoodApp</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link class="text-dark" to="/food">Food</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Keranjang
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h2>Keranjang<strong>Saya</strong></h2>
        <div class="table-responsive" mt-3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Foto</th>
                <th scope="col">Makanan</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Harga</th>
                <th scope="col">Total Harga</th>
                <th scope="col">Hapus</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                <th scope="row">{{ index + 1 }}</th>        
                <td>
                  <img
                    :src="
                      require('../assets/images/' + keranjang.products.gambar)
                    "
                    width="255"
                    style="border-radius:15px;"
                     class="card-fluid shadow"
                  />
                </td>
                <td>{{ keranjang.products.nama }}</td>
                <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
                <td>{{ keranjang.jumlah_pemesanan }}</td>
                <td>
                  <strong>Rp{{ keranjang.products.harga }}</strong>
                </td>
                <td align="center">
                  <strong
                    >Rp{{
                      keranjang.products.harga * keranjang.jumlah_pemesanan
                    }}</strong
                  >
                </td>
                <td align="center">
                  <button class="btn btn-danger" @click="hapus(keranjang.id)">
                    Hapus
                  </button>
                </td>
              </tr>

              <tr colspan="6" align="right">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <strong>Rp.{{ totalharga }}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
import navbar from "@/components/Navbar.vue"
export default {
  name: "Keranjang",
  data() {
    return {
      keranjangs: [],
    };
  },
  components:{
navbar
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapus(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.success("Pesanan Dihapus...", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dimissible: true,
          });
        })
        .catch((err) => console.log(err));

      axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => {
          this.setKeranjangs(response.data);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => {
        this.setKeranjangs(response.data);
      })
      .catch((err) => console.log(err));
  },
  computed: {
    totalharga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>
