<script setup lang="ts">
import { ref } from "vue";

import QRCodeScanner from "../components/QRCodeScanner.vue";

// Variable used as a flag to show/hide the QR code scanner
const scanQR = ref<boolean>(false);
</script>

<template>
  <div class="center">
    <div class="columns is-multiline">
      <!-- Only load/show QR Code Scanner modal when requested -->
      <div v-if="scanQR" class="column is-full">
        <!-- Close QR Code scanner once code has been detected or if user closed the camera -->
        <QRCodeScanner
          v-on:close-camera="scanQR = false"
          v-on:qrcode-detected="scanQR = false"
        />
      </div>

      <div class="column is-full">
        <button
          v-if="scanQR"
          class="button is-light is-fullwidth is-warning py-6 is-size-4"
          @click="scanQR = false"
        >
          Close QR Scanner
        </button>

        <button
          v-else
          class="button is-light is-fullwidth is-warning py-6 is-size-4"
          @click="scanQR = true"
        >
          Scan HazMatrix QR code
        </button>
      </div>

      <div class="column is-full">
        <router-link
          :to="{ name: 'search' }"
          class="button is-light is-fullwidth is-success py-6 is-size-4"
        >
          Chemical
        </router-link>
      </div>

      <div class="column is-full">
        <router-link
          :to="{ name: 'search-equipment' }"
          class="button is-light is-fullwidth is-warning py-6 is-size-4"
        >
          Equipment
        </router-link>
      </div>

      <div class="column is-full">
        <router-link
          :to="{ name: 'foam-calculator' }"
          class="button is-light is-fullwidth is-success py-6 is-size-4"
        >
          Foam Calculator
        </router-link>
      </div>

      <div class="column is-full">
        <router-link
          :to="{ name: 'about' }"
          class="button is-light is-fullwidth"
        >
          About / Help
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
