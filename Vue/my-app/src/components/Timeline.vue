<script setup lang="ts">
import { ref } from "vue";
  const periods = ["Today","This Week","This Month"];
  let currentSelected = ref("Today");
  function selectPeriod(period:string){
    currentSelected.value = period ;
    switch (period) {
        case "Today": currentSelected.value = `${currentSelected.value} ${new Date().toLocaleDateString()}` ;break 

        case "This Week": currentSelected.value =  `${currentSelected.value} ${new Date().getDay() }` ;break  ; 

        
    }
  }
</script>
<template>
    <nav class="is-primary panel">
        <span class="panel-tabs" style="width:100%; background-color: aqua;">
          <div style="width:100%; background-color: aqua; " :key="period" v-for="period of periods">
            <a  v-on:click="selectPeriod(period)">{{ period }}</a><br/>
          </div>
          <br/>
          
       <!-- <a :key="period" v-for="period of periods">{{ period }}</a> -->
        </span>
        <div>{{ currentSelected }}</div>
       
    </nav>  
</template>
<style>
</style>