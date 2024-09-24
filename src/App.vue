<script setup>
import Form from "./components/Form.vue";
import Weather from "./components/Weather.vue";
import useWeather from "./composables/useWeather";
import Alert from "./components/Alert.vue";
import Spinner from "./components/Spinner.vue";

const { getWeather, weather, showWeather, loading, error } = useWeather();
</script>

<template>
  <h1 class="titulo">ClimaCheck</h1>
  <div class="contenedor buscador-clima">
    <Form @get-weather="getWeather" />
    <Spinner v-if="loading" />
    <Alert v-if="error">{{ error }}</Alert>
    <Weather v-if="showWeather" :weather="weather" />
  </div>
</template>
