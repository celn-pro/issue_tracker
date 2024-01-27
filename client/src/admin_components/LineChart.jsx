import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import { DATA } from '../constants';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Line Chart Comparison',
		},
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Never attended',
			data: labels.map(() => faker.datatype.number({ min: 5, max: 50 })),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Open',
			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			borderColor: 'rgb(0, 140,0)',
			backgroundColor: 'rgba(0, 140, 0)',
		},
		{
			label: 'Closed',
			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			borderColor: 'rgb(255,255,20)',
			backgroundColor: 'rgba(255,255,20)',
		},
	],
};

export default function LineChartCustom() {
	return <div className=''>
		<Line options={options} data={data} />
	</div>;
}
