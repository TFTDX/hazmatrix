<template>
  <div class="center">
    <div style="width: 90vw">
      <!-- Only load/show scanning UI when requested -->
      <!-- Close QR Code scanner once code has been detected -->
      <QRCodeScanner v-if="scanQR" v-on:qrcode-detected="scanQR = false" />
      <br />

      <!-- Allow multiple line in desktop / landscape mode -->
      <div class="columns is-multiline">
        <div class="column">
          <button
            v-if="scanQR"
            class="button is-light is-fullwidth is-warning py-6"
            @click="scanQR = false"
          >
            Close QR Scanner
          </button>

          <button
            v-else
            class="button is-light is-fullwidth is-warning py-6"
            @click="scanQR = true"
          >
            Scan QR
          </button>
        </div>

        <div class="column">
          <router-link
            :to="{ name: 'search' }"
            class="button is-light is-fullwidth is-success py-6"
          >
            Chemical
          </router-link>
        </div>

        <div class="column">
          <router-link
            :to="{ name: 'search-equipment' }"
            class="button is-light is-fullwidth is-warning py-6"
          >
            Equipment
          </router-link>
        </div>
      </div>

      <version />
    </div>
  </div>
</template>

<script>
// @todo Only import QR Code Scanner when needed?
import QRCodeScanner from "./QRCodeScanner";
import version from "./Version";

export default {
  name: "home",

  components: { version, QRCodeScanner },

  data() {
    return {
      scanQR: false,
    };
  },
};
</script>
