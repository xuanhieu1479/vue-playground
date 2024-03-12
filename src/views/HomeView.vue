<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions(['logout']),
    },
    computed: {
      userProfile() {
        return this.$store.getters?.userProfile || '-';
      },
    },
  }
</script>

<template>
  <div>Home View</div>
  <div>{{ this.userProfile }}</div>
  <button @click="logout">Logout</button>
</template>