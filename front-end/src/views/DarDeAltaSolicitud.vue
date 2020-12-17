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

        <v-select
          v-model="fotografoSeleccionado"
          :items="listaFotografos"
          item-text="nombre"
          item-value="dni"
          label="Fotografo"
          return-object

          required
        ></v-select>
                <template v-if="listaFotografos==null"> <v-progress-circular indeterminate color="primary"></v-progress-circular></template>

        <template>
          <v-btn block :loading="anadiendoSolicitud" @click="anadirSolicitud">
            Guardar
          </v-btn>

          

    <v-dialog
      v-model="dialog"
    
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Crear fotografo
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Crear fotografo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
          <v-text-field
          v-model="dniFotografo"
          label="DNI"
          required
        ></v-text-field>
        <v-text-field
          v-model="nombreFotografo"
          label="Nombre"
          required
        ></v-text-field>
        <v-text-field
          v-model="apellidosFotografo"
          label="Apellidos fotografo"
          required
        ></v-text-field>
        <v-text-field
          v-model="direccionFotografo"
          label="Direccion"
          required
        ></v-text-field>
        <v-text-field
          v-model="ciudadFotografo"
          label="Ciudad"
          required
        ></v-text-field>
        <v-text-field
          v-model="codigoPostalFotografo"
          label="Codigo postal"
          required
        ></v-text-field>
        <v-text-field
          v-model="telefonoFotografo"
          label="Telefono"
          required
        ></v-text-field>
                
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="crearFotografo"
          >
            Crear fotografo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
    listaFotografos: null,
    fotografoSeleccionado: null,
    descripcionEquipo: "",
    resumenCV: "",
    dniFotografo:"",
    nombreFotografo:"",
    apellidosFotografo:"",
    direccionFotografo:"",
    ciudadFotografo:"",
    codigoPostalFotografo:"",
    telefonoFotografo:"",
          dialog: false,

    anadiendoSolicitud: false,
  }),

mounted(){
    crud.obtenerSolicitudes((listaSolicitudes)=>{this.historicoSolicitudes=listaSolicitudes},(error)=>{});

    crud.obtenerFotografos((listaFotografos)=>{this.listaFotografos=listaFotografos},(error)=>{})


},

  methods: {
    anadirSolicitud() {
      this.anadiendoSolicitud = true;
      console.log(this.fotografoSeleccionado.dni)
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

    crearFotografo() {
      crud.crearFotografo(this.dniFotografo,this.nombreFotografo,this.apellidosFotografo,
      this.direccionFotografo,this.ciudadFotografo,this.codigoPostalFotografo,this.telefonoFotografo,() => {
          //this.anadiendoSolicitud = false;
          //this..push(new (id, nombre));
          //var fotografo = new Fotografo
          //this.listaFotografos.push(foto);
              crud.obtenerFotografos((listaFotografos)=>{this.listaFotografos=listaFotografos},(error)=>{})

          this.dialog=false;
        },(error) => {})
    },
  },
};
</script>

<style>
</style>