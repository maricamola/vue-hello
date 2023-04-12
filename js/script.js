const {createApp} = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      image: "https://images2.corriereobjects.it/methode_image/2017/12/14/Tecnologia/Foto%20Tecnologia/3oKIPsx2VAYAgEHC12.gif?v=201712151212"
    }
  },

  methods: {

    click(){
      console.log("Hai cliccato!")
    }

  }

}).mount("#app")


