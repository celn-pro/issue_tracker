import React, {useState} from 'react'
import { DoughnutChart } from '../DoughnutChart'

import {useSelectedAdminSideBar} from '../../hooks/useSelectedAdminSideBar'

const Stats = () => {
	const [selectedTd, setSelectedTd] = useState('1W')
	const [selectedAdminSideBar, toggleSelectedAdminSideBar] = useSelectedAdminSideBar('Stats')
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
				  <span className='text-green-600 text-[20px] font-semibold'>+8%</span>
			  </div>

		  </div>
		  <div className='border-[2px] border-black w-[300px] mt-[20px] bg-black'>
			  <table className='w-full text-center'>
				  <tr className='cursor-pointer bg-white'>
					  <td className={`${selectedTd == '1W' ? 'text-white bg-black' : ''} px-[5px] py-[5px] border-[1px] border-r-black border-t-transparent border-l-black border-b-transparent`} onClick={() => setSelectedTd('1W')}>1W</td>
					  <td className={`${selectedTd == '1M' ? 'text-white bg-black' : ''} px-[5px] py-[5px] border-[1px] border-r-black border-t-transparent border-l-transparent border-b-transparent`} onClick={() => setSelectedTd('1M')} >1M</td>
					  <td className={`${selectedTd == '1Y' ? 'text-white bg-black' : ''} px-[5px] py-[5px] border-[1px] border-r-black border-t-transparent border-l-transparent border-b-transparent`} onClick={() => setSelectedTd('1Y')}>1Y</td>
					  <td className={`${selectedTd == 'ALL' ? 'text-white bg-black' : ''} px-[5px] py-[5px] border-t-transparent border-l-transparent border-b-transparent`} onClick={() => setSelectedTd('ALL')}>ALL</td>
				  </tr>
			  </table>
		  </div>
		  <div className="issues font-sans text-[15px]">
			  <h2 className='font-bold'>Open Issues: 30⚠</h2>

			  {/* Display List of Issues */}

			  <h2 className='font-bold'>Closed Issues: 80 ✔</h2>
			  <h2 className='font-bold'>Never attended: 7 🚫</h2>

			  {/* Display List of Closed Issues */}
			  <h2 className='font-bold'>On-progress: <span className='text-green-600'>100</span></h2>
		  </div>
	  </div>
  )
}

export default Stats