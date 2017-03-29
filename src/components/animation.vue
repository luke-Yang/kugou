<template lang="html">
  <div class="animation-container">
     <div class="round-container">
       <div class="round-1">

       </div>
       <div class="round-2">

       </div>
       <!-- <div class="round-2-2">

       </div> -->
       <div class="round-3">

       </div>
       <div class="round-4">

       </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
.animation-container {
    width: 300px;
    padding-top: 115px;
    height: 300px;
    margin: 0 auto;
    text-align: center;
}
.round-container {
    text-align: center;
    position: relative;
    height: 300px;
    width: 300px;
}
.round-1 {
    height: 280px;
    width: 280px;
    border-radius: 50%;
    border: 1px solid blue;
    position: absolute;
    left: 10px;
    top: 10px;
    animation: round-1 1.5s ease-in-out 1.5s infinite
}
@keyframes round-1 {
   0%{
    transform: scale(1);
   }
   100%{
    transform: scale(3);
   }
}
@keyframes round-2 {
   0%{
    transform: scale(1);
   }
   100%{
    transform: scale(1.28);
   }
}
@keyframes round-3 {
   0%{
    transform: scale(1);
   }
   100%{
    transform: scale(1.45);
   }
}
.round-2 {
    height: 220px;
    width: 220px;
    border-radius: 50%;
    border: 1px solid blue;
    position: absolute;
    left: 40px;
    top: 40px;
    animation: round-2 1.5s ease-in-out 1.5s infinite
}
.round-2-2 {
    height: 220px;
    width: 220px;
    border-radius: 50%;
    border: 1px solid blue;
    position: absolute;
    left: 40px;
    top: 40px;
    /*animation: round-2 1.5s ease-in-out 1.5s infinite*/
}
.round-3 {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 1px solid blue;
    position: absolute;
    left: 75px;
    top: 75px;
      animation: round-3 1.5s ease-in-out infinite
}
.round-4 {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 1px solid blue;
    position: absolute;
    left: 75px;
    top: 75px;
}
</style>
