<template>
  <!-- Fixed styles to ensure that the build time string it not too long and extend pass the mobile components -->
  <div
    class="level"
    style="font-size: 0.7em; position: fixed; bottom: 1em; max-width: 30em"
  >
    <!-- @todo
      Pre-fill the form with version number and build time info
      https://guide.form.gov.sg/AdvancedGuide.html#pre-fill
    -->
    <a
      class="has-text-link is-size-6"
      href="https://go.gov.sg/hazmatopsmatrix"
      target="_blank"
    >
      Feedback Form
    </a>
    <br />

    Version: {{ gitBranch + " " + commitHash.slice(0, 6).toString() }}
    <br />
    Build Time: {{ buildTime }}
  </div>
</template>

<script>
export default {
  name: "version",

  data() {
    // Environment variables injected in by webpack, configured in vue.config.js
    return {
      // buildTime is ISO string format, so convert to Date and remove singapore string part after converting to user's locale (assumed to be SG)
      buildTime: new Date(process.env.buildTime)
        .toString()
        .replace(" (Singapore Standard Time)", ""),

      commitHash: process.env.commitHash,
      gitBranch: process.env.gitBranch,
    };
  },
};
</script>
