<template>  
    <v-card height="500px">    
        <v-container fluid>
            <v-layout row>
            <v-flex xs3>
                <v-card-text><b>Modelo:</b></v-card-text>
            </v-flex>   
            <v-flex xs8>
                <v-select
                    :items="models"
                    v-model="selectedValue"
                    item-text="Nome"
                    item-value="Id"
                    single-line>
                </v-select>
            </v-flex>
            </v-layout>
            <br/>
            <v-card-text><b>Escolha a cor do seu galaxy</b></v-card-text>
            <v-radio-group row v-model="radios" :mandatory="false">
                <v-radio label="Preto" color="black" value="1"></v-radio>
                <v-radio label="Azul" value="3"></v-radio>
                <v-radio label="Dourado" color="#C1B4A5" value="2"></v-radio>
                <v-radio label="Rosa" color="#D39A8D" value="4"></v-radio>
            </v-radio-group>
            <hr><br/><br/><b class="grey--text">{{ getValorOriginal() }}</b>
            <br/><h1>{{ getValorPromo() }}</h1><br/><br/>
            <hr><br/>            
            <v-btn round color="#0925DE" class="white--text" href="#">COMPRAR</v-btn>
        </v-container>  
    </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
  },
  data() {
    return {
      selectedValue:null,
      radios:null
    };
  },
  watch: {
    selectedValue(newValue) {
      if(newValue == "0") {
        this.fetchModels();
      } else {
        this.radios="1";
        this.getPhones(this.selectedValue,this.radios);
      }
    },
    radios(newValue)
    {
      if(this.selectedValue !== null)
        this.getPhones(this.selectedValue,newValue);
    }
  },
  computed: {
    ...mapState({
      models: state => state.models,
      phone: state => state.phone
    })
  },
  methods: {
    ...mapActions({
      fetchModels: 'fetchModels',
      filterPhone: 'filterPhone'
    }),
    getPhones: function(val1,val2)
    {
      this.filterPhone({val1,val2});
    },
    getValorOriginal: function()
    {
      if(this.selectedValue === null || this.radios === null)
        return ''
      else
        if(this.phone === null)
          return ''
        else
          return 'de R$ ' + this.phone.ValorOriginal + ',00';
    },
    getValorPromo: function()
    {
      if(this.selectedValue === null || this.radios === null)
        return ''
      else
        if(this.phone === null)
          return ''
        else
          return 'por R$  ' + this.phone.ValorPromo + ',00';
    }
  },
  
  created(){
    this.fetchModels();
  }
};
</script>