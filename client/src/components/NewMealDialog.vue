<template>
  <v-card>
    <v-tabs>

      <v-tab>Eating Out</v-tab>
      <v-tab>Dining In</v-tab>

      <v-tab-item>Search Bar</v-tab-item>
      <v-tab-item>
        <new-meal-form />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import NewMealForm from "@/components/NewMealForm"

export default {
  components: {
    'new-meal-form': NewMealForm,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>
