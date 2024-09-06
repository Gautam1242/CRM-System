import {
    Chart as ChartJS,
    ArcElement,       // Import the ArcElement
    Tooltip,
    Legend
  } from 'chart.js';
  import { Pie } from 'react-chartjs-2';
  
  // Register ArcElement along with Tooltip and Legend
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
  );
  
  const data = {
    labels: ['Leads', 'Conversions', 'Bounced'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
        borderWidth: 1,
      },
    ],
  };
  
  export default function PieChart({ stats }) {
    const data = {
      labels: ['Leads', 'Conversions', 'Bounced'],
      datasets: [
        {
          label: '# of Statistics',
          data: [stats.leads, stats.conversions, stats.bounced], // Use the passed stats data
          backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
          borderColor: ['#2980b9', '#27ae60', '#c0392b'],
          borderWidth: 1,
        },
      ],
    };
  
    return <Pie data={data} />;
  }
  