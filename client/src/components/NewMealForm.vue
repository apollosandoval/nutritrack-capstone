<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-select
          v-model="mealtime"
          :items="times"
          outline
          prepend-inner-icon="kitchen"
          label="Select Your Meal"
        ></v-select>
        <v-text-field
          v-model="item1"
          prepend-inner-icon="search"
          label="Item 1"
          placeholder="Enter an item"
        ></v-text-field>
        <v-text-field
          v-model="item2"
          prepend-inner-icon="search"
          label="Item 2"
          placeholder="Enter an item"
        ></v-text-field>
        <v-text-field
          v-model="item3"
          prepend-inner-icon="search"
          label="Item 3"
          placeholder="Enter an item"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="submit">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      times: ["Snack", "Breakfast", "Lunch", "Dinner"],
      mealtime: null,
      item1: '',
      item2: '',
      item3: '',
    }
  },
  methods: {
    submit: function() {
      const date = new Date();
      this.$emit('closeDialogEvent');
      this.$store.dispatch('postDineIn', {
        meal: {
          item1: this.item1,
          item2: this.item2,
          item3: this.item3,
        },
        mealtime: this.mealtime,
        user: this.$store.getters.auth,
        date: date.toDateString(),
      });
      this.clearForm();
    },
    clearForm: function() {
      this.mealtime= null;
      this.item1= '';
      this.item2= '';
      this.item3= '';
    },
  },
}
</script>