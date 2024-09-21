<script setup>
const countries = [
  { code: "CO", name: "Colombia" },
  { code: "CR", name: "Costa Rica" },
  { code: "US", name: "Estados Unidos" },
  { code: "ES", name: "España" },
  { code: "PE", name: "Perú" },
  { code: "PT", name: "Portugal" },
  { code: "VE", name: "Venezuela" },
];
</script>

<template>
  <form class="formulario">
    <div class="campo">
      <label for="city">City</label>
      <input type="text" id="city" placeholder="City" />
    </div>
    <div class="campo">
      <label for="country">Country</label>
      <select id="country">
        <option value="">-- Select Country --</option>
        <option v-for="country in countries" :value="country.code">
          {{ country.name }}
        </option>
      </select>
      <input type="submit" value="Check Weather" />
    </div>
  </form>
</template>
