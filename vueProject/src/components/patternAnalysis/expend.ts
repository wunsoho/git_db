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
  registerables

} from 'chart.js'

ChartJS.register(
  Title, 
  Tooltip, 
  Legend, 
  ArcElement, 
  CategoryScale,
  ...registerables,
  
)
import axios from 'axios'

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
 
    var expend_data = computed(()=>store.state.expendData)
    var expend_label = computed(()=>store.state.expendLabel)

    const chartData = {
      labels:expend_label.value,
      datasets: [
        {
          label: '',
          backgroundColor: ['#FF7E66','#FFBD60','#A7B901','#00A29B','#EEE8AC','#E9DF56'],
          data:expend_data.value,
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
            padding: 30,
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