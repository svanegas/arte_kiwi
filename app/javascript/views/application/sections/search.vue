<template>
<section>
  <nav class='w-full flex justify-center' style="max-height: 150px;">
    <img class='object-contain w-48 md:w-56 lg:w-64 sm:my-8' src='img/logo.png'>
  </nav>

  <v-row align="center">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn small>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn small disabled>Disabled</v-btn>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn disabled>Disabled</v-btn>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn large>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn large disabled>Disabled</v-btn>
      </div>
    </v-col>
  </v-row>
</section>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
  })
}
</script>
