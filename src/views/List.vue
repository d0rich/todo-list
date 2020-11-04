<template>
  <div class="row no-gutters">
    <Lists class="col"/>
    <Plans class="col"/>
  </div>
</template>

<script>
import Lists from "@/components/Lists";
import Plans from "@/components/Plans";
export default {
name: "List",
  components:{
    Lists, Plans
  }
}
</script>

<style scoped>

</style>
