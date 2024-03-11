<script>
  import Button from 'primevue/button';

  export default {
    components: {
      CustomButton: Button,
    },
    data() {
      return {
        message: 'Hello Vue!',
      }
    },
    created() {
      this.name = this.$store.state.userProfile.name;
    },
  }
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <CustomButton label="Submit" />
  </div> 
</template>