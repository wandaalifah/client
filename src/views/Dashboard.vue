<template>
  <DashboardLayout>
    <div class="relative mx-36 mt-32 pt-10">
        <h1 class="font-semibold text-6xl text-blue-900 w-2/3">SISTEM REKOMENDASI <br> HILIRISASI MITRA <br> RISET DAN MAGANG</h1>
        <router-link :to="{name: 'Magang'}">
          <button class="mt-8 bg-purple-200 text-purple-700 py-2 px-4 rounded-sm font-medium">
            Dapatkan Rekomendasi
          </button>
        </router-link>
        <div class="absolute top-0 right-0">
          <img src="/src/assets/amico.svg" alt="icon" class="flex justify-end">
        </div>
      </div>
  </DashboardLayout>
</template>

<script>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Colors } from 'chart.js';
import { ref } from 'vue';
import ChartComponent from '../components/chartComponent.vue';
import DashboardLayout from '../layouts/DashboardLayout.vue'

ChartJS.register(Title, Tooltip, Legend, Colors, BarElement, CategoryScale, LinearScale)

export default {
  name: 'Dashboard',
  components: { ChartComponent, DashboardLayout },
  setup() {
    const chartData = ref({
      labels: ['January', 'February', 'March'],
      datasets: [{
        label: 'Sample Data',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }]
    })

    return {chartData}
  }
}
</script>

<style>

</style>