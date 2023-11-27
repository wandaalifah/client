<template>
    <Navbar />
        <slot></slot>
    <Footer />
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue'
  
  export default {
      name: 'DashboardLayout',
      components: {Navbar, Footer}
  }
  </script>
  
  <style>
  
  </style>