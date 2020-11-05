<template>
  <div class="list-page">
    <Lists class="lists-display"/>
    <Plans class="plans-display"/>
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
.list-page{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 10px;
}
.lists-display{
  width: 30%;
  margin-right: 2rem;
}
.plans-display{
  width: 70%;
}
@media screen and (max-width: 840px) {
  .lists-display{
    display: none;
  }
  .plans-display{
    width: 100%;
  }
}
</style>
