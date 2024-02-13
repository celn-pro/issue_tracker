import React, { useState, useEffect } from 'react'

const Workboard = (props) => {
	const [selectedId, setSelectedId] = useState(null)
	const [openDetails, setOpenDetails] = useState(false)
	const [swich, setSwich] = useState(false)
	const [selectedFrame, setSelectedFrame] = useState('all')
	const [selectedScope, setSelectedScope] = useState('all')
	const [selectedClass, setSelectedClass] = useState('all')
	const [selectedStatus, setSelectedStatus] = useState('all')
	const [data, setData] = useState([])
	const [filteredData, setFilteredData] = useState([])
	const [dataLength, setDataLength] = useState(Number)
	const [status, setStatus] = useState({_id: String, status: String})

	const userData = props.userData

	useEffect(() => {
		
		if( swich){
			updateStatus()
			window.location.reload()
		}
		else{
			fetchIssues()
		}

	}, [status])

	const handleSelectedFrame = (e) => {
		setSelectedFrame(e.target.value)
	}

	const handleSelectedCategory = (e) => {
		setSelectedScope(e.target.value)
	}

	const handleSelectedScope = (e) => {
		setSelectedClass(e.target.value)
	}

	const handleSelectedStatus = (e) => {
		setSelectedStatus(e.target.value)

	}

	const handleSubmit = (e) => {
		e.preventDefault()

		let copyData = [...data]

		let filteredData = copyData.filter((d) => {
			return (
				(selectedFrame === 'all' || d.frame === selectedFrame) &&
				(selectedScope === 'all' || d.scope === selectedScope) &&
				(selectedClass === 'all' || d.category === selectedClass) &&
				(selectedStatus === 'all' || d.status === selectedStatus)
			);
		});
		setFilteredData(filteredData)


	}

	const fetchIssues = async () => {
		const response = await fetch('https://odd22.onrender.com/issues', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},
			body: JSON.stringify({ deligated_to: userData._id })
		})

		const responseData = await response.json()
		if (responseData.staffData) {
			setData(responseData.staffData)
			setDataLength(data.length)
			setFilteredData(responseData.staffData)
		}
	}

	const handleRadioChange = async(e)=>{
		setStatus(e.target.value)
	}

	const updateStatus = async()=> {
		const response = await fetch('https://odd22.onrender.com/update_status', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',

			},
			body: JSON.stringify({_id: status._id, status: status.status})
		})

		console.log('Hey i was triggered')

	}

	return (
		<div>
			{dataLength.length < 1 ? (
				<div className=' text-black text-[12px] ml-[300px] max-800:ml-0 px-[30px] py-[20px] flex justify-center items-center h-[500px]'>
					<div>No data yet</div>
				</div>
			) :
				(
					<div>
						<div className=' ml-[300px] max-800:ml-0 bg-black text-white text-[12px] px-[30px] py-[20px] rounded'>
							<span className='font-bold'>Filter by:</span>
							{/* <div className='w-full'> */}
								<form onSubmit={handleSubmit}>
									{/* <div className='w-[900px]'> */}
										<div className='font-bold grid grid-cols-2 gap-3'>
											<div>
												<span className=''>Status:</span>
												<select onChange={handleSelectedStatus} className='rounded outline-none px-[5px] py-[5px] text-black'>
													<option value="all" selected>All</option>
													<option value="open">Open</option>
													<option value="closed">Closed</option>
													<option value="never attended">Never attended</option>
												</select>
											</div>
											<div>
												<span className=''>Timeframe:</span>
												<select value={selectedFrame} onChange={handleSelectedFrame} id="" className='outline-none px-[5px] py-[5px] rounded text-black'>
													<option value="all">All</option>
													<option value="1w">1W</option>
													<option value="1m">1M</option>
													<option value="1y">1Y</option>
												</select>
											</div>

											<div>
												<span className=''>Catergory:</span>
												<select value={selectedScope} onChange={handleSelectedCategory} className='outline-none px-[5px] py-[5px] rounded text-black'>
													<option value="all">All</option>
													<option value="fees">Fees</option>
													<option value="accademic">Accademic</option>
													<option value="others">Others</option>
												</select>
											</div>

											<div>
												<span className='mr-[10px]'>Scope:</span>
												<select value={selectedClass} onChange={handleSelectedScope} className='outline-none px-[5px] py-[5px] rounded text-black'>
													<option value="all">All</option>
													<option value="od">OD</option>
													<option value="beng">BENG</option>
												</select>
											</div>
											<div>
												<button type='submit' className=' w-[100px] inline-block rounded bg-white text-black font-bold cursor-pointer px-[10px] py-[5px]'>Apply</button>
											</div>
										</div>
									{/* </div> */}
								</form>
							{/* </div> */}
						</div>
						<div className='h-[100vh] ml-[300px] max-800:ml-0'>
							<div className='absolute left-[350px] max-800:left-[50px] top-[220px] right-[50px] bottom-[50px] max-800:border-none border-[1px] border-black rounded px-[10px] py-[10px] flex justify-center items-center'>
								<div className='w-[950px] h-[450px] rounded shadow-xl overflow-auto px-[20px] py-[20px]'>

									<div className={``}>
										{filteredData?.map((s, i) => {
											return <div className='border-[1px] rounded px-[20px] py-[10px] text-[12px] font-bold mb-[10px]'>
												<div className='flex justify-between items-center'>
													<p>Name: {s.name}</p>
													<p>status: <div className={`${s.status == 'open' ? 'bg-green-500' : ''} ${s.status == 'closed' ? 'bg-yellow-400' : ''} ${s.status == 'never attended' ? 'bg-red-600' : ''} ml-[10px] h-[10px] w-[10px] inline-block`}></div>
														{s.status}</p>
												</div>
												<div>Title: {s.title}</div>
												<div className='h-[20px] overflow-hidden'>{s.description}</div>
												<div className='flex justify-start items-center gap-5 '>
													Marked as:

													<div className={`${s.status === 'open' ? 'block' : 'hidden'}`}>
														<input type="radio" checked={s.status === 'open'} name="" id="" />delivered
													</div>
													<div className={`${s.status === 'never attended' || s.status == 'closed' ? 'block' : 'hidden'}`}>
														<input type="radio" name="" value='open' id="" onChange={(e) => {
															setSwich(true)
															setStatus((prevStatus) => {
																let updatedStatus = { ...prevStatus, _id: s._id, status: e.target.value }

																return updatedStatus
															})
														}} />delivered
													</div>
													<div className={`${s.status === 'closed' ? 'block' : 'hidden'}`}>
														<input type="radio" checked={s.status === 'closed'} name="" id="" />closed
													</div>
													<div className={`${s.status === 'never attended' || s.status == 'open' ? 'block' : 'hidden'}`}>
														<input type="radio" name="" value='closed' id="" onChange={(e) => {
															setSwich(true)
															setStatus((prevStatus) => {
																let updatedStatus = { ...prevStatus, _id: s._id, status: e.target.value }

																return updatedStatus
															})
														}} />closed
													</div>

												</div>
												<div className='flex justify-between items-center'>
													<div>{s.date?.substring(0, 10) + ' ' + s.date?.substring(11, 16)}</div>
													<div className='flex justify-end items-center gap-2'>
														<div className='cursor-pointer px-[10px] py-[5px] bg-black rounded text-white'
															onClick={() => {
																setOpenDetails(!openDetails)
																setSelectedId(i)
															}}
														>Details</div>
														{/* <div className='cursor-pointer'>Delegated to {s.deligated_to}</div> */}
													</div>
												</div>
												{/*  */}

												<div className={`${selectedId == i && openDetails ? 'block' : 'hidden'} absolute text-[14px] top-[30px] max-800:right-0 right-[50px] max-800:left-0 left-[50px] bottom-[20px] px-[20px] py-[20px] bg-white`}>
													<div className='flex justify-end items-center'>
														<div className='font-bold border-[1px] px-[5px] py-[5px] w-[20px] h-[20px] rounded text-white flex justify-center items-center cursor-pointer bg-black'
															onClick={() => {
																setSelectedId(null)
																setOpenDetails(!openDetails)
															}}
														>x</div>
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
																<td>{s.registrationId}</td>
															</tr>
															<tr>
																<td>Class:</td>
																<td>{s.class}</td>
															</tr>
															<tr>
																<td>Contact:</td>
																<td>{s.contacts}</td>
															</tr>
														</table>
													</div>
													<div className='px-[30px] mt-[20px] text-[15px]'>
														<h2>Title: {s.title}</h2>
													</div>
													<div className='mt-[20px] px-[30px]'>
														<div className=''>Description</div>
														<div className='border-[1px] rounded md:h-[200px] h-[300px] px-[20px] py-[20px] overflow-auto'>
															{s.description}
														</div>
													</div>
												</div>
												{/*  */}
											</div>
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
		</div>
	)
}

export default Workboard