import React, {useEffect, useState} from 'react'
import { DoughnutChart } from '../DoughnutChart'

import {useSelectedAdminSideBar} from '../../hooks/useSelectedAdminSideBar'

import { statsDatas} from '../../constants/index'

const Stats = () => {
	const [selectedTd, setSelectedTd] = useState('1W')
	const [selectedAdminSideBar, toggleSelectedAdminSideBar] = useSelectedAdminSideBar('Stats')

	const [closed , setClosed] = useState()
	const [open, setOpen] = useState()
	const [neverAttended, setNeverAttended] = useState()
	const [percentageChange, setPercentageChange] = useState()

	const statsData = [...statsDatas]

	useEffect(()=>{

		setClosed(statsData[0].w.closed)
		setOpen(statsData[0].w.on_progress)
		setNeverAttended(statsData[0].w.never_attended)
		setPercentageChange(statsData[0].w.change)
	}, [])

	const handleWeekChange = ()=>{
		setClosed(statsData[0].w.closed)
		setOpen(statsData[0].w.on_progress)
		setNeverAttended(statsData[0].w.never_attended)
		setPercentageChange(statsData[0].w.change)
	}

	const handleMonthChange = ()=>{
		setClosed(statsData[0].m.closed)
		setOpen(statsData[0].m.on_progress)
		setNeverAttended(statsData[0].m.never_attended)
		setPercentageChange(statsData[0].m.change)
	}
	
	const handleYearChange = ()=>{
		setClosed(statsData[0].y.closed)
		setOpen(statsData[0].y.on_progress)
		setNeverAttended(statsData[0].y.never_attended)
		setPercentageChange(statsData[0].y.change)
	}

	const handleAllChange = ()=>{
		setClosed(statsData[0].all.closed)
		setOpen(statsData[0].all.on_progress)
		setNeverAttended(statsData[0].all.never_attended)
		setPercentageChange(statsData[0].all.change)

	}


  return (
	  <div className="dashboard h-[100vh] ml-[300px]">
		  <h1 className='font-bold'>Quick Stats:</h1>

		  <div className="metrics">
			  <DoughnutChart />
			  <div>
				  <span className='font-sans'>Percentage change over</span>
				  <select name="" id="" className='outline-none'>
					  <option value="">7 days</option>
					  <option value="">last month</option>
					  <option value="">last year</option>
				  </select>
				  <span className='text-green-600 text-[20px] font-semibold'>+{percentageChange}%</span>
			  </div>

		  </div>
		  <div className='border-[2px] border-black w-[300px] mt-[20px] bg-black'>
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

			  {/* Display List of Issues */}
			  <h2 className='font-bold'>Closed Issues: {closed} ✔</h2>
			  <h2 className='font-bold'>Never attended: {neverAttended} 🚫</h2>

			  {/* Display List of Closed Issues */}
			  <h2 className='font-bold'>On-progress: <span className='text-green-600'>{open}</span></h2>
		  </div>
	  </div>
  )
}

export default Stats