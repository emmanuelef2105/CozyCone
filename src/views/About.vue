<template class="body">
  <div class="about">
  <!--navbar-->
      <div>
        <b-navbar toggleable="lg" type="dark" variant="transparent">
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <template #button-content>
                  <em><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icono"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"/></svg>
                  </em>
                </template>
                <b-dropdown-item @click="login()" href="#">Iniciar sesión</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
      </div>
  <!--/navbar-->

  <!--botones-->
      <div class="d-flex justify-content-center col-md-12">
        <b-button @click="openModalR()" variant="success" class="btnI Success">Registrarse</b-button>
        <b-button @click="openModalS()" variant="danger" class="btnI danger">Salir</b-button>
      </div>
  <!--/botones-->

      <!-- Modales -->
        <div class="justify-content-center">
        <!-- Modal Registro -->
          <b-modal id="registro" title="Registrarse">
            <p class="my-4">Bienvenido a <i>El Cono Amigo</i>, ingresa tu placa</p>
            <p>
              <b-form-group label="" label-for="name">
                <b-form-input id="name" v-model="name" placeholder="XXX###"></b-form-input>
              </b-form-group>
            </p>
            <template slot="modal-footer">
              <b-button @click="registrar()" variant="primary">Consultar</b-button>
              <b-button @click="closeModalR()" variant="danger">Cancelar</b-button>
            </template>
          </b-modal>
        <!--/Modal Registro -->

        <!--Modal que consulta si hay habitaciones disponibles-->
          <b-modal id="consulta" title="Disponibilidad">
          <p class="my-4">Puedes hospedarte en el cono #</p>
            <template slot="modal-footer">
              <b-button @click="closeModalC()" variant="danger">Cerrar</b-button>
            </template>
          </b-modal>
        <!--Modal que consulta si hay habitaciones disponibles-->

        <!--Modal para hacer check-out-->
          <b-modal id="salir" title="Checkout">
            <p class="my-4">Digita tu placa</p>
            <p>
              <b-form-group label="" label-for="name">
                <b-form-input id="name" v-model="name" placeholder="XXX###"></b-form-input>
              </b-form-group>
            </p>
            <template slot="modal-footer">
              <b-button @click="salir()" variant="primary">Consultar</b-button>
              <b-button @click="closeModalS()" variant="danger">Cancelar</b-button>
            </template>
          </b-modal>
        <!--/Modal para hacer check-out-->

        <!--Modal que calcula el total a pagar-->
          <b-modal id="cobro" title="valor">
            <p class="my-4">El cobro es de</p>
            <template slot="modal-footer">
              <b-button @click="closeModalV()" variant="danger">Cerrar</b-button>
            </template>
          </b-modal>
        <!--/Modal que calcula el total a pagar-->

        <!--/Modal para iniciar sesión-->
          <b-modal id="login" title="Inicio de sesión">
            <p class="my-4">Nombre de usuario</p>
            <p>
              <b-form-group label="" label-for="name">
                <b-form-input id="name" v-model="name" placeholder="XXX###"></b-form-input>
              </b-form-group>
            </p>
            <p>Digita la contraseña</p>
            <p>
              <b-form-group label="" label-for="password">
                <b-form-input id="password" v-model="password" type="password" placeholder="********"></b-form-input>
              </b-form-group>
            </p>
            
            <template slot="modal-footer">
              <b-button @click="ingresar()" variant="primary">Ingresar</b-button>
              <b-button @click="closeModall()" variant="danger">Cerrar</b-button>
            </template>
          </b-modal>
        <!--/Modal para iniciar sesión-->
        </div>
      <!--/Modales-->
  </div>
</template>
<style >
  .btnI {
    height: 50px;
    width: 200px;
    font-size: 20px;
  }
  .Success {
    background-color: #42b983;
    color: white;
    margin-right: 200px;
  }
  .danger {
    background-color: #f44336;
    color: white;
    margin-left: 200px;
  }
  .modal-dialog {
    max-width: 650px !important;
    margin: 9rem auto !important;
  }
  .icono{
    width: 25px;
    height: 25px;
    /*cambior el color del icono*/
    
  }
  .icono:hover{
    fill: #f44336;
  }
  .d-flex{
    margin-top: 35%;
  }
 

</style>
<script>
  export default {
    name: 'About',
    data() {
      return {
        name: '',
      }
    },
    
    methods: {

     
    /*  registrar(){
        var registro = {
          name: this.name,
          hora: this.horaRegistro()
        }
        this.$http.post('/registro', registro).then(response => {
          console.log(response.body);
          this.closeModalR();
          this.openModalC();
        });
      },*/
      openModalR() {
          this.$bvModal.show('registro')
      },
      openModalS() {
          this.$bvModal.show('salir')
      },
      closeModalR() {
          this.$bvModal.hide('registro')
      },
      closeModalS() {
          this.$bvModal.hide('salir')
      },
      closeModalC() {
         this.$bvModal.hide('consulta')
         
      },
      closeModalV() {
           this.$bvModal.hide('cobro')
      },
     registrar() {
        console.log(this.name);
        this.closeModalR();
        this.$bvModal.show('consulta')
      },
      salir() {
        console.log(this.name);
        this.closeModalS();
        this.$bvModal.show('cobro')
      },
      login() {
        this.$bvModal.show('login')
      },
      closeModall() {
        this.$bvModal.hide('login')
      },
      //el metodo ingresar me debe llevar a la vista home
      ingresar() {
        this.closeModall();
        this.$router.push('/#')
      },
      //Calcular cobro
    /*  horaIngreso(){
      fechaIngreso = new Date();
      console.log(fechaIngreso)
      this.$bvModal.hide('consulta')
      },
      horaSalida(){
      fechaSalida = new Date();
      console.log(fechaSalida)
      
      
      let calcularEstadia = fechaSalida.getTime() - fechaIngreso.getTime()

      cantidadHoras=Math.round((calcularEstadia/ (1000*60*60)))
      console.log('Horas: ' + cantidadHoras)

      tiempo=cantidadHoras;
      dia=tiempo/24;
      tarifa=null;


      if(tiempo<24){
          if(tiempo<5){
          tarifa=5000
          }
          else if (tiempo>=5 && tiempo<10){
          tarifa=7000
          }
          else if(tiempo>=10 && tiempo<24){
              tarifa=10000
          }
      }
      else if(tiempo>=24){
          diaR=Math.round(dia)
          if(dia<diaR){
          tarifa=11000 * (diaR-1)
          }
          else{
              tarifa=11000*diaR
          }
          
      }

      console.log(Math.round(dia))
      console.log('dia '+ dia)
      console.log('cobro: '+tarifa)

      }
      */

    },

  }
</script>