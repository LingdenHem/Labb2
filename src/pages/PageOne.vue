<template>
  <div>
    <CatFacts :limit="10" :character-limit="200" />
  </div>
</template>

<script>
  import CatFacts from '../components/CatFacts.vue';
  export default {
    components: {
      CatFacts
    },
    data() {
      return {
        selectedFact: ''
      };
    }
  };
</script>
