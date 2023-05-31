import { defineComponent, h, PropType,ref, computed  } from 'vue'
import {useStore} from 'vuex'
import { Doughnut } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(
  Title, 
  Tooltip, 
  Legend, 
  ArcElement, 
  CategoryScale
)

export default defineComponent({
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  props: {
    width: {
      type: Number,
      default:50 
    },
    height: {
      type: Number,
      default: 50
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      default: () => {}
    },
  },
  setup(props) {
    var store =useStore()
    var income_data = computed(()=>store.state.incomeData)
    var income_label = computed(()=>store.state.incomeLabel)

    console.log('income 차트!!!',income_data, income_label)
    const chartData = {
      labels: income_label.value,
      datasets: [
        {
          backgroundColor: ['#FF7E66','#FFBD60','#A7B901','#00A29B','#EEE8AC','#E9DF56'],
          data: income_data.value,
        },
      ],
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins:{
        legend: {
          display: false,
          position:'right' as const,
          align	: 'start' as const,
          labels : {
            padding: 10,
            usePointStyle: true,
            boxWidth:20,
            boxHeight:10,
            color:'#223354'
          }
        },
      },
      
      scales:{
        x:{
          display:false,
          grid:{
            display:false
          }
        },
        y:{
          display:false,
          grid:{
            display:false
          }
        },
      },
      cutout: '0',
      borderWidth:0
    }
    
    return () =>
      h(Doughnut, {
        chartData,
        chartOptions
      })  
  }
})