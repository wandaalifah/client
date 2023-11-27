<template>
  <DashboardLayout>
    <div id="home" class="relative mx-36 mt-32 pt-10">
      <h1 class="font-semibold text-6xl text-blue-900 w-2/3">SISTEM REKOMENDASI <br> HILIRISASI MITRA <br> RISET</h1>
      <button class="mt-8 bg-purple-200 text-purple-700 py-2 px-4 rounded-sm font-medium"><a href="#rekomendasi">Dapatkan Rekomendasi</a></button>
      <div class="absolute top-0 right-0">
        <img src="src/assets/cuate.svg" alt="icon" class="flex justify-end">
      </div>
    </div>
    <!-- Statistik -->
    <div id="statistik" class="mt-80 mx-36 mb-10 pt-20">
      <!-- <h2 class="font-semibold text-blue-900 text-3xl flex justify-center">Statistik Riset dan Magang</h2>
       <div class="w-1/2 m-auto">
       <chart-component :chartData="chartData"></chart-component>
      </div> -->
    </div>
    <!-- Rekomendasi -->
    <div id="rekomendasi" class="mx-36 mb-24">
      <h2 class="font-semibold text-blue-900 text-3xl flex justify-center">Rekomendasi Mitra Riset</h2>
        <div class="mt-20">
          <div class="flex justify-center ">
            <p>Tuliskan NIP anda</p>
          </div>
          <div class="flex justify-center">
            <input v-model="nip" class="border-2 border-purple-400 rounded h-10 w-60 p-4" placeholder="199408062022032015">
          </div>
        </div>
        <div class="flex justify-center mt-4">
          <button class="bg-purple-550 text-white font-normal py-2 px-6 rounded" @click="processRec()">INPUT</button>
        </div>
        <p class="flex justify-center mt-2 text-green-500">{{ successMessage }}</p>
      </div>
      <div class="mx-36 mb-32">
        <h2 class="font-semibold text-blue-900 text-3xl flex justify-center">{{ hasilMessage }}</h2>
        <div v-for="mitra in recs" :key="mitra">
          <div class="border-2 border-gray-800 p-10 rounded-lg w-1/2 mx-auto my-2">
            <h6 class="text-2xl font-semibold uppercase">{{ mitra[0] }}</h6>
            <p class="text-md font-normal uppercase">{{ mitra[1] }}</p>
          </div>
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
  import { useMitraStore } from '../store/mitra'
  
  ChartJS.register(Title, Tooltip, Legend, Colors, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'Riset',
    components: { ChartComponent, DashboardLayout },
    setup() {
      const nip = ref('')
      const recs = ref([])
      const successMessage = ref('')
      const hasilMessage = ref('')
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
  
      const mitraStore = useMitraStore()
      const processRec = () => {
        mitraStore.getRisetRecommendation(nip.value).then(result => {
          recs.value = result
          successMessage.value = 'Berhasil memperoleh rekomendasi!';
          hasilMessage.value = 'Hasil Rekomendasi'
        })
      }
  
      return {nip, recs, successMessage, hasilMessage, processRec, chartData}
    }
  }
  </script>
  
  <style>
  
  </style>