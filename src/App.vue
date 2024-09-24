<script setup>
import Form from "./components/Form.vue";
import Weather from "./components/Weather.vue";
import useWeather from "./composables/useWeather";
import Spinner from "./components/Spinner.vue";

const { getWeather, weather, showWeather, loading } = useWeather();
</script>

<template>
  <h1 class="titulo">ClimaCheck</h1>
  <div class="contenedor buscador-clima">
    <Form @get-weather="getWeather" />
    <Spinner v-if="loading" />
    <Weather v-if="showWeather" :weather="weather" />
  </div>
</template>
