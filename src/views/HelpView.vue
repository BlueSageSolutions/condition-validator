<template>
  <v-container>
    <v-row class="mt-2">
      <v-col class="v-col-3 mt-10 left-col">
        <p><a href="#theme">Light and Dark themes</a></p>
        <p><a href="#review">Reviewing Conditions</a></p>
        <p><a href="#report">Reporting a Problem</a></p>
      </v-col>
      <v-col class="v-col-9 right-col">
        <div class="text-h4 border-b-thin">Help</div>
        <div class="text-h5 mt-5" id="theme">Light and Dark themes</div>
        <p>
          Blue Sage's Condition Validator will attempt to match your computer's preferences for
          either a light or dark theme, but you can change this yourself too.
        </p>
        <p>
          In the top menu bar, there will either be a moon with stars (when in dark mode) or a sun
          (when in light mode). By clicking this icon, you can toggle the modes, and your
          preferences will be stored in the browser for next time.
        </p>

        <div class="text-h5 mt-5" id="review">Reviewing Conditions</div>
        <div class="text-h5 mt-5" id="report">Reporting a Problem</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .left-col p {
    margin-bottom: 0.5em;
  }
  .right-col p {
    margin: 0.5em 0;
  }
</style>
