import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

const data = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	datasets: [
		{
			label: "Solved Issues",
			data: labels.map(() => faker.datatype.number({ min: 9, max: 100 })),
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		}
	]
}

const options = {
	responsive: true,
	maintainAspectRatio: false
}

export function DoughnutChart() {
	return <div className='h-[463px] mt-[10px] border-[1px] border-black rounded flex justify-center items-center'>
		<Doughnut data={data} />
	</div>;
}
