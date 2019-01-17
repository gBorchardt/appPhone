<template>
  <v-app id="inspire" style="background: #3399ff" >
    <v-content>
      <v-container fill-height>
        <v-layout align-center justify-space-around />

        <v-flex xs4>
          <PhoneCard :imagens="phone.Imagens"/>
        </v-flex>

        <v-flex xs4>
          <DetailsCard/>
        </v-flex>

        <v-flex xs3 offset-xs1 text-xs-center>
           <AdCard/>
        </v-flex>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PhoneCard from "../components/PhoneCard.vue";
import DetailsCard from "../components/DetailsCard.vue";
import AdCard from "../components/AdCard.vue";
import { mapState } from 'vuex';

export default {
  data() {
    return {
      imgBG: require('../viewer/bg.png')
    };
  },
  components: {
    PhoneCard,
    DetailsCard,
    AdCard
  },
  computed: {
    ...mapState({
      phone: state => state.phone
    })
  }
};
</script>