<script setup>
import { reactive, ref } from "vue";
import Alert from "./Alert.vue";

const search = reactive({
  city: "",
  country: "",
});

const error = ref("");

const emit = defineEmits(["get-weather"]);

const countries = [
  { code: "CO", name: "Colombia" },
  { code: "CR", name: "Costa Rica" },
  { code: "US", name: "Estados Unidos" },
  { code: "ES", name: "España" },
  { code: "PE", name: "Perú" },
  { code: "PT", name: "Portugal" },
  { code: "VE", name: "Venezuela" },
];

const checkWeather = () => {
  if (Object.values(search).includes("")) {
    error.value = "All Fields Are Required";
    return;
  }
  error.value = "";
  emit("get-weather", search);
};
</script>

<template>
  <form class="formulario" @submit.prevent="checkWeather">
    <Alert v-if="error">
      {{ error }}
    </Alert>
    <div class="campo">
      <label for="city">City</label>
      <input type="text" id="city" placeholder="City" v-model="search.city" />
    </div>
    <div class="campo">
      <label for="country">Country</label>
      <select id="country" v-model="search.country">
        <option value="">-- Select Country --</option>
        <option v-for="country in countries" :value="country.code">
          {{ country.name }}
        </option>
      </select>
      <input type="submit" value="Check Weather" />
    </div>
  </form>
</template>
