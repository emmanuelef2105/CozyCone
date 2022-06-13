<template>
  <div class="hello">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
           
            <b-nav-item href="/about">Salir</b-nav-item>
          </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="justify-content-between">
    
      <b-card title="Registro" >
        <template>
          <div>
            <b-table striped hover :items="items"></b-table>
          </div>
        </template>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
        return {
           created:function(){
           this.ConsultarVisitantes();
          },
           items: [
            { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { age: 38, first_name: 'Jami', last_name: 'Carney' }
          ]
        }
      },
         
      
       methods: {
        ConsultarVisitantes(){
          fetch('http://localhost:3000/api/visitantes').
          then(respuesta=>respuesta.json()).
          then((datosRespuesta)=>{
            console.log(datosRespuesta)
          }).catch(error=>{
            console.log(error)
          })
          }
        },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card{
  margin: 20px auto 0;
  width: 80%;
}
</style>
