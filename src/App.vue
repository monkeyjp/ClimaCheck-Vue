<script setup>
import Form from "./components/Form.vue";
import useWeather from "./composables/useWeather";

const { getWeather } = useWeather();
</script>

<template>
  <h1 class="titulo">ClimaCheck</h1>
  <div class="contenedor buscador-clima">
    <Form @get-weather="getWeather" />
  </div>
</template>
