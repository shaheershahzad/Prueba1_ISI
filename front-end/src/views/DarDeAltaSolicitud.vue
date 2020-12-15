<template>
  <v-container>
    <v-row no-gutters
      ><v-col class="pa-4"
        ><h1>Historico solicitudes</h1>
        <template v-if="historicoSolicitudes==null"> <v-progress-circular indeterminate color="primary"></v-progress-circular></template>
      


        <template v-else>
        <v-virtual-scroll :items="historicoSolicitudes" item-height="200px" item-width="200px">
          <template v-slot:default="{ item }">
            <v-card :key="componentKey" class="pa-4" outlined>
              <p class="display-1 text--primary">
                {{ item.fecha }}
              </p>
              <div class="text--primary">ID: {{ item.id }}</div>
              <div class="text--primary">Resumen CV: {{ item.resumenCv }}</div>
            </v-card>
          </template>
        </v-virtual-scroll>
        </template>
      </v-col>
      <v-col class="pa-4"
        ><h1>Crear solicitud</h1>
        <v-text-field
          v-model="descripcionEquipo"
          label="Descripcion equipo"
          required
        ></v-text-field>

        <v-text-field
          v-model="resumenCV"
          label="Resumen CV"
          required
        ></v-text-field>

<v-text-field
          v-model="idFotografo"
          label="Id fotografo"
          required
        ></v-text-field>

        <template>
          <v-btn block :loading="anadiendoSolicitud" @click="anadirSolicitud">
            Guardar
          </v-btn>
        </template></v-col
      ></v-row
    ></v-container
  >
</template>

      </v-col>
       </v-row
  ></v-container>
</template>

<script>
import * as crud from "../database/Crud.js";
export default {
  data: () => ({
    historicoSolicitudes: null,
    descripcionEquipo: "",
    resumenCV: "",
    idFotografo:"",
    anadiendoSolicitud: false,
  }),

mounted(){
    crud.obtenerSolicitudes((listaSolicitudes)=>{this.historicoSolicitudes=listaSolicitudes},(error)=>{});


},

  methods: {
    anadirSolicitud() {
      this.anadiendoSolicitud = true;
      crud.crearSolicitud(
        this.descripcionEquipo,
    this.resumenCV,
    this.idFotografo,
        () => {
          this.anadiendoSolicitud = false;
          //this..push(new (id, nombre));
        },
        (error) => {this.anadiendoSolicitud = false;}
      );
    },
  },
};
</script>

<style>
</style>