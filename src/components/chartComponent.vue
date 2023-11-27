<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

export default {
  props: {
    chartData: Object, // Pass your chart data as a prop
  },
  setup(props) {
    const chartCanvas = ref(null);
    let myChart = null;

    onMounted(() => {
      // Initialize the Chart.js chart when the component is mounted
      Chart.register(...registerables); // Register any chart types or plugins you plan to use

      myChart = new Chart(chartCanvas.value, {
        type: 'bar', // Change this to your desired chart type
        data: props.chartData, // Pass your chart data here
      });
    });

    return {
      chartCanvas,
    };
  },
};
</script>