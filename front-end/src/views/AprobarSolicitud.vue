<template>
  <div>
    <h1>AprobarSolicitud</h1>

    <template v-if="historicoSolicitudes == null">
      <v-progress-circular indeterminate color="primary"></v-progress-circular
    ></template>

    <template v-else>
      <v-virtual-scroll
        :items="historicoSolicitudes"
        item-height="200px"
        item-width="200px"
      >
        <template v-slot:default="{ item }">
          <v-card :key="componentKey" class="pa-4" outlined>
            <p class="display-1 text--primary">
              {{ item.dniFotografo }}
            </p>
            <div class="text--primary">Fecha: {{ item.createdDate }}</div>
            <div class="text--primary">Resumen CV: {{ item.resumenCV }}</div>
            <div class="text--primary">
              Fescripcion equipo: {{ item.descripcionEquipo }}
            </div>
            <v-row>
              <v-btn
                block
                :loading="anadiendoSolicitud"
                @click="aceptarSolicitud(item.id)"
              >
                Aceptar
              </v-btn>

              <v-btn
                block
                :loading="anadiendoSolicitud"
                @click="anadirSolicitud(item.id)"
              >
                Rechazar
              </v-btn>
            </v-row>
          </v-card>
        </template>
      </v-virtual-scroll>
    </template>
  </div>
</template>

<script>
import * as crud from "../database/Crud.js";

export default {
  data: () => ({
    historicoSolicitudes: null,
  }),

  mounted() {
    crud.obtenerSolicitudesQueAprobar(
      (listaSolicitudes) => {
        this.historicoSolicitudes = listaSolicitudes;
      },
      (error) => {}
    );
  },



  methods: {
    rechazarSolicitud(solicitudId) {
      console.log(solicitudId)
    },

    aceptarSolicitud(solicitudId) {
            console.log(solicitudId)

    },
  },
};
</script>

<style>
</style>