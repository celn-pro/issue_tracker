import React, {useEffect, useState} from 'react'
import {DoughnutChart} from '../DoughnutChart'

import {statsDatas} from '../../constants/index'

const Stats = (props) => {
	const [selectedTd, setSelectedTd] = useState('')

	const [closed , setClosed] = useState()
	const [open, setOpen] = useState()
	const [neverAttended, setNeverAttended] = useState()
	const [percentageChange, setPercentageChange] = useState()

	const [stats, setStats] = useState([])

	const userData = props.userData

	const statsData = [...statsDatas]

	useEffect(()=>{
		fetchStatsData()
	}, [])

	const handleWeekChange = ()=>{

		let weekOpen = stats.filter((i) => {
			const oneWeekAgo = new Date()

			oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

			const iDate = new Date(i.date)

			if (i.status == 'open') {
				return iDate >= oneWeekAgo
			}

		})

		let weekClosed = stats.filter((i) => {
			const oneWeekAgo = new Date()

			oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

			const iDate = new Date(i.date)

			if (i.status == 'closed') {
				return iDate >= oneWeekAgo
			}

		})

		let weekNeverAtended = stats.filter((i) => {
			const oneWeekAgo = new Date()

			oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

			const iDate = new Date(i.date)
			
			if (i.status == 'never attended'){
				return iDate >= oneWeekAgo
			}

		})

		setClosed(weekClosed.length)
		setOpen(weekOpen.length)
		setNeverAttended(weekNeverAtended.length)
		setPercentageChange(statsData[0].w.change)
	}

	const handleMonthChange = ()=>{

		let monthOpen = stats.filter((i) => {
			const oneMonthAgo = new Date()

			oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

			const iDate = new Date(i.date)

			if (i.status == 'open') {
				return iDate >= oneMonthAgo
			}

		})

		let monthClosed = stats.filter((i) => {
			const oneMonthAgo = new Date()

			oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

			const iDate = new Date(i.date)

			if (i.status == 'closed') {
				return iDate >= oneMonthAgo
			}

		})

		let monthNeverAttended = stats.filter((i) => {
			const oneMonthAgo = new Date()

			oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

			const iDate = new Date(i.date)

			if (i.status == 'never attended') {
				return iDate >= oneMonthAgo
			}

		})

		setClosed(monthClosed.length)
		setOpen(monthOpen.length)
		setNeverAttended(monthNeverAttended.length)
		setPercentageChange(statsData[0].m.change)
	}
	
	const handleYearChange = ()=>{

		let yearOpen = stats.filter((i) => {
			const oneYearAgo = new Date()

			oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

			const iDate = new Date(i.date)

			if (i.status == 'open') {
				return iDate >= oneYearAgo
			}

		})

		let yearClosed = stats.filter((i) => {
			const oneYearAgo = new Date()

			oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

			const iDate = new Date(i.date)

			if (i.status == 'closed') {
				return iDate >= oneYearAgo
			}

		})

		let yearNeverAttended = stats.filter((i) => {
			const oneYearAgo = new Date()

			oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

			const iDate = new Date(i.date)

			console.log(oneYearAgo)

			if (i.status == 'never attended') {
				return iDate >= oneYearAgo
			}

		})

		setClosed(yearClosed.length)
		setOpen(yearOpen.length)
		setNeverAttended(yearNeverAttended.length)
		setPercentageChange(statsData[0].y.change)
	}

	const handleAllChange = ()=>{

		let allOpen = stats.filter(i => i.status =='open')
		let allClosed = stats.filter(i => i.status == 'closed')
		let allNeverAttended = stats.filter(i => i.status == 'never attended')

		setClosed(allClosed.length)
		setOpen(allOpen.length)
		setNeverAttended(allNeverAttended.length)
		setPercentageChange(statsData[0].all.change)

	}

	const fetchStatsData = async()=>{
		const response = await fetch('http://localhost:3000/stats', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},
			body: JSON.stringify({department: userData.department})
		})

		const responseData = await response.json()

		if(responseData.stats){
			setStats(responseData.stats)
		}
	}


  return (
	  <div className="dashboard h-[100vh] ml-[300px]">
		  <h1 className='font-bold'>Quick Stats:</h1>
			<h1 className='text-[28px] font-semibold'>{userData.department} DEPARTMENT</h1>
		  <div className="metrics">
			  <div>
				  <span className='font-sans'>Percentage change over</span>
				  <select className='outline-none'>
					  <option value="">7 days</option>
					  <option value="">last month</option>
					  <option value="">last year</option>
				  </select>
				  <span className='text-green-600 text-[20px] font-semibold'>+{percentageChange}%</span>
			  </div>

		  </div>
		  <div className='border-[1px] border-black w-[300px] mt-[20px] bg-black'>
			  <table className='w-full text-center'>
				  <tr className='cursor-pointer bg-white'>
					  <td onClickCapture={handleWeekChange} className={`${selectedTd == '1W' ? 'text-white bg-black' : ''} px-[5px] py-[5px] border-[1px] border-r-black border-t-transparent border-l-black border-b-transparent`} onClick={() => setSelectedTd('1W')}>1W</td>
					  <td onClickCapture={handleMonthChange} className={`${selectedTd == '1M' ? 'text-white bg-black' : ''} px-[5px] py-[5px] border-[1px] border-r-black border-t-transparent border-l-transparent border-b-transparent`} onClick={() => setSelectedTd('1M')} >1M</td>
					  <td onClickCapture={handleYearChange} className={`${selectedTd == '1Y' ? 'text-white bg-black' : ''} px-[5px] py-[5px] border-[1px] border-r-black border-t-transparent border-l-transparent border-b-transparent`} onClick={() => setSelectedTd('1Y')}>1Y</td>
					  <td onClickCapture={handleAllChange} className={`${selectedTd == 'ALL' ? 'text-white bg-black' : ''} px-[5px] py-[5px] border-t-transparent border-l-transparent border-b-transparent`} onClick={() => setSelectedTd('ALL')}>ALL</td>
				  </tr>
			  </table>
		  </div>
		  <div className="issues font-sans text-[15px]">

			  <h2 className='font-bold'>Closed Issues: {closed} </h2>
			  <h2 className='font-bold'>Never attended: {neverAttended} </h2>

			  <h2 className='font-bold'>On-progress: <span className='text-green-600'>{open}</span></h2>
		  </div>
		  <DoughnutChart />

	  </div>
  )
}

export default Stats