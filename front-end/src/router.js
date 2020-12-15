import Vue from "vue";
import VueRouter from "vue-router";
import DarDeAltaSolicitud from "./views/DarDeAltaSolicitud.vue";
import AprobarSolicitud from "./views/AprobarSolicitud.vue";
import GestionarNiveles from "./views/GestionarNiveles.vue";
import PromocionarFotografo from "./views/PromocionarFotografo.vue";

Vue.use(VueRouter);

const routes = [
      {
        path: "/darDeAltaSolicitud",
        name: "darDeAltaSolicitud",
        component: DarDeAltaSolicitud,
      },
      {
        path: "/aprobarSolicitud",
        name: "aprobarSolicitud",
        component: AprobarSolicitud,
      },
      {
        path: "/gestionarNiveles",
        name: "gestionarNiveles",
        component: GestionarNiveles,
      },
      {
        path: "/promocionarFotografo",
        name: "promocionarFotografo",
        component: PromocionarFotografo,
      },
    
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
