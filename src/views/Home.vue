<template>
  <div class="home">
    <Lists/>
  </div>
</template>

<script>
import Lists from "@/components/Lists";
import {mapActions, mapState} from "vuex";

export default {
  name: 'Home',
  components: {
    Lists
  },
  computed:{
    ...mapState(['lists'])
  },
  methods:{
    ...mapActions(['GetLists', 'CreateList', 'CreatePlan']),

  }
}
</script>
