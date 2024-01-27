import React,{useState, useEffect} from 'react'
import LineChartCustom from '../LineChart'
import { User, BarChart, LineChart } from 'lucide-react'

import { DATA } from '../../constants'

const Workboard = () => {
	const [selectedId, setSelectedId] = useState(null)
	const [openDetails, setOpenDetails] = useState(false)
	const [showChart, setShowChart] = useState(false)
	const [selectedFrame, setSelectedFrame] = useState('all')
	const [selectedScope, setSelectedScope] = useState('all')
	const [selectedClass, setSelectedClass] = useState('all')
	const [selectedStatus, setSelectedStatus] = useState('all')
	const [data, setData] = useState([])

	useEffect(() => {
		setData(DATA)
	}, [])

	const handleSelectChange1 = (e) => {
		setSelectedFrame(e.target.value)
	}

	const handleSelectChange2 = (e) => {
		setSelectedScope(e.target.value)
	}

	const handleSelectChange3 = (e) => {
		setSelectedClass(e.target.value)
	}

	const handleSelectChange4 = (e) => {
		setSelectedStatus(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		let copyData = [...DATA]

		let filteredData = copyData.filter((d) => {
			return (
				(selectedFrame === 'all' || d.frame === selectedFrame) &&
				(selectedScope === 'all' || d.scope === selectedScope) &&
				(selectedClass === 'all' || d.category === selectedClass) &&
				(selectedStatus === 'all' || d.status === selectedStatus)
			);
		});

		setData(filteredData)

	}
	
  return (
	<div className='h-[100vh] ml-[300px]'>
		<div className='bg-red-100 text-[12px] px-[30px] py-[20px] rounded'>
			<span className='font-bold'>Filter by:</span>
			<div className=''>
			<form action="" onSubmit={handleSubmit}>
				<table className='w-full'>
						<tr className='font-bold'>
						<td>
							<span className='mr-[10px]'>Status:</span>
							<select onChange={handleSelectChange4} className='rounded outline-none px-[5px] py-[5px]'>
								<option value="all">All</option>
								<option value="open">Open</option>
								<option value="closed">Closed</option>
								<option value="never attended">Never attended</option>
							</select>
						</td>
						<td>
							<span className='mr-[10px]'>Timeframe:</span>
								<select value={selectedFrame} onChange={handleSelectChange1} id="" className='outline-none ml-[20px] px-[5px] py-[5px] rounded'>
								<option value="all">All</option>
								<option value="1w">1W</option>
								<option value="1m">1M</option>
								<option value="1y">1Y</option>
							</select>
						</td>

						<td>
							<span className='mr-[10px]'>Catergory:</span>
								<select value={selectedScope} onChange={handleSelectChange2} className='outline-none ml-[20px] px-[5px] py-[5px] rounded'>
								<option value="all">All</option>
								<option value="fees">Fees</option>
								<option value="accademic">Accademic</option>
								<option value="others">Others</option>
							</select>
						</td>

						<td>
							<span className='mr-[10px]'>Scope:</span>
								<select value={selectedClass} onChange={handleSelectChange3} className='outline-none ml-[20px] px-[5px] py-[5px] rounded'>
								<option value="all">All</option>
								<option value="od">OD</option>
								<option value="beng">BENG</option>
							</select>
						</td>
						<td>
							<button type='submit' className='ml-[20px] inline-block rounded bg-[#04314C] text-white font-bold cursor-pointer px-[10px] py-[5px]'>Apply</button>
						</td>
						<td>
							<div className='px=[5px] py-[5px] rounded-[15px] bg-white text-center'>compare in charts 
								<div className='ml-[15px] rounded-[15px] h-[20px] px-[5px] inline-block cursor-pointer bg-gray-100' onClick={()=>setShowChart(!showChart)}>
									<LineChart className='inline-block h-[15px]' />
								</div>
							</div>
						</td>

					</tr>
				</table>
			</form>	
		</div>
		</div>
		<div className='bottom-[50px] top-[140px] right-[50px] left-[350px] absolute border-[1px] rounded justify-start items-start gap-3 px-[10px] py-[10px] '>
			<div className={`${showChart?'hidden':'block'} h-full overflow-auto`}>
				{data?.map((s,i)=>{
					return <div className='border-[1px] rounded px-[20px] py-[10px] text-[12px] font-bold mb-[10px]'>
						<div className='flex justify-between items-center'>
							<p>{s.name}</p>
							<p>status: <div className={`${s.status == 'open' ? 'bg-green-500' : ''} ${s.status == 'closed' ? 'bg-yellow-400' : ''} ${s.status == 'never attended' ? 'bg-red-600' : ''} ml-[10px] h-[10px] w-[10px] inline-block`}></div>
								{s.status}</p>
						</div>
						<div>Title: {s.title}</div>
						<div className='h-[20px] overflow-hidden'>{s.desc}</div>
						<div className='flex justify-between items-center'>
							<div>{s.date}</div>
							<div className='flex justify-end items-center gap-2'>
								<div className='cursor-pointer px-[10px] py-[5px] bg-[#04314C] rounded text-white'
									onClick={() => {
										setOpenDetails(!openDetails)
										setSelectedId(i)
									}}
								>Details</div>
								<div className='cursor-pointer'>Delegated to {s.name}</div>
							</div>
						</div>
						{/*  */}
						<div className={`${selectedId == i && openDetails ? 'block' : 'hidden'} absolute h-full w-full text-[14px] top-0 left-0 px-[20px] py-[20px] bg-white`}>
							<div className='w-full h-full'>
								<div className='flex justify-end items-center'>
									<div className='font-bold border-[1px] px-[5px] py-[5px] w-[30px] rounded text-white text-center cursor-pointer bg-[#04314C]'
										onClick={() => {
											setSelectedId(null)
											setOpenDetails(!openDetails)
										}}
									>X</div>
								</div>
								<div className='px-[30px]'>
									<table className='w-[300px]'>
										<tr>
											<td>Status:</td>
											<td><div className={`${s.status == 'open' ? 'bg-green-500' : ''} ${s.status == 'solved' ? 'bg-yellow-400' : ''} ${s.status == 'never attended' ? 'bg-red-600' : ''} h-[10px] w-[10px] inline-block`}></div> {s.status}</td>
										</tr>
										<tr>
											<td>Name:</td>
											<td>{s.name}</td>
										</tr>
										<tr>
											<td>Registration:</td>
											<td>{s.regNo}</td>
										</tr>
										<tr>
											<td>Class:</td>
											<td>{s.clas}</td>
										</tr>
									</table>
								</div>
								<div className='px-[30px] mt-[20px] text-[15px]'>
									<h2>TITLE: {s.title.toLocaleUpperCase()}</h2>
								</div>
								<div className='mt-[20px] px-[30px]'>
									<div className=''>Description</div>
									<div className='border-[1px] rounded h-[200px] px-[20px] py-[20px]'>
										{s.desc}
									</div>
								</div>
							</div>
						</div>
					</div>
				})}
			</div>
			<div className={`${showChart?'block':'hidden'} h-full px-[20px] py-[20px]`}>
				<div className='flex justify-end items-center px-[20px]'>
					<div className='w-[20px] bg-[#04314C] text-white flex justify-center items-center rounded cursor-pointer' onClick={()=> setShowChart(!showChart)}>X</div>
				</div>
				<LineChartCustom />
			</div>
		</div>
	</div>
  )
}

export default Workboard