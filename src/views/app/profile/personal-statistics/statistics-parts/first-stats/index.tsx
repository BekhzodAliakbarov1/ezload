import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const FirstStats = () => {
  return (
    <Doughnut
      data={{
        datasets: [
          {
            label: 'My First Dataset',
            data: [349, 164, 51],
            backgroundColor: ['#EA694D', '#4FBC9F', '#6B7C82'],
            hoverOffset: 4,
            borderAlign: 'inner',
          },
        ],
      }}
    />
  );
};

export default FirstStats;
