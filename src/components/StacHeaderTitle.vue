<template>
  <div class="header-title">
    <div class="logo">{{ displayCatalogTitle }}</div>
    <div class="text">
      <a href="https://sitn.ne.ch">SITN<span class="text-full-name"> – Système d'Information du Territoire Neuchâtelois</span></a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'StacHeaderTitle',
  components: {},
  computed: {
    ...mapGetters(['displayCatalogTitle']),
  },
  methods: {
  }
};
</script>