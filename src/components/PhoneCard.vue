<template>  
  <v-card>  
    <v-carousel hide-controls>
      <v-carousel-item
        v-for="(image,i) in imagens" 
        :key="i" 
        :src="getImagem(image)"
        
        >
      </v-carousel-item> 
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  props: {
    imagens: Array
  },
  data() {
    return {
    };
  },
  methods: {
    getImagem: function(imagem)
    {
      return require('../viewer/' + imagem + '.png');
    }
  },
};
</script>

