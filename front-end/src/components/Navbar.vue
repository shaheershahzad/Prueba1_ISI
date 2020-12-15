Vue.Component('Navbar', {
<template>
  <div class="navbar">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">siges</div>

      <v-tabs centered>
        <v-tab to="/darDeAltaSolicitud">Dar de alta nueva solicitud</v-tab>
        <v-tab to="/aprobarSolicitud">Aprobar solicitud</v-tab>
        <v-tab to="/gestionarNiveles">Gestionar niveles</v-tab>
        <v-tab to="/promocionarFotografo">Promocionar fotografo</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <div></div>
    </v-main>
  </div>
</template>

<script>
import router from "../router.js";

export default {
  props: ["userName"],
  data() {
    return {};
  },
  methods: {
    logOut: async function() {
      console.log("CLicked cerrar sesion");
      router.push({ name: "login" });
    },
  },
};
</script>

<style></style>
})
