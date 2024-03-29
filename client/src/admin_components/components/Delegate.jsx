import React, { useEffect, useState } from 'react'

const Delegate = (props) => {
	const [selectedId, setSelectedId] = useState(null)
	const [openDetails, setOpenDetails] = useState(false)
	const [openDelegate, setOpenDelegate] = useState(false)
	const [selectedFrame, setSelectedFrame] = useState('all')
	const [selectedScope, setSelectedScope] = useState('all')
	const [selectedClass, setSelectedClass] = useState('all')
	const [selectedStatus, setSelectedStatus] = useState('all')
	const [selectedStaff, setSelectedStaff] = useState()
	const [selectedStaffIndex, setSelectedStaffIndex] = useState(null)

	const [staffs, setStaffs] = useState([])
	const [data, setData] = useState([])
	const [filteredData, setFilteredData] = useState([])
	const [dataLength, setDataLength] = useState(Number)

	const userData = props.userData
	
	useEffect(()=>{
		fetchIssues()
	}, [])

	const handleSelectChange1 = (e)=>{
		setSelectedFrame(e.target.value)
	}

	const handleSelectChange2 = (e) => {
		setSelectedScope(e.target.value)
	}

	const handleSelectChange3 = (e) => {
		setSelectedClass(e.target.value)
	}

	const handleSelectChange4 = (e) =>{
		setSelectedStatus(e.target.value)
	}

	const handleStaffOnChange = (e)=>{
		setSelectedStaff(e.target.value)
	}

	const fetchIssues = async()=>{
		const response = await fetch('https://odd22.onrender.com/issues', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},
			body: JSON.stringify({ department: userData.department })
		})

		const responseData = await response.json()
        console.log(responseData)
		if (responseData.transformedData) {
			setStaffs(responseData.staffs)
			setData(responseData.transformedData)
			setDataLength(data.length)
			setFilteredData(responseData.transformedData)

		}
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
	return (
		<div className='h-[100vh]'>
			{dataLength.length<1? (
				<div className=' text-black text-[12px] ml-[300px] px-[30px] py-[20px] justify-center items-center h-[500px]'>
					<div>No data yet</div>
				</div>
			):
			(
				<div>
						<div className='bg-black text-white text-[12px] ml-[300px] max-800:ml-0 px-[30px] py-[20px] rounded'>
							<span className='font-bold'>Filter by:</span>
							{/* <div className=''> */}
								<form onSubmit={handleSubmit} className=''>
									{/* <div className='hidden'> */}
										<div className='font-bold grid  grid-cols-2 justify-start items-center gap-5'>
											<div>
												<span className='mr-[10px]'>Status:</span>
												<select onChange={handleSelectChange4} className='rounded outline-none px-[5px] py-[5px] text-black'>
													<option value="all" selected>All</option>
													<option value="open">Open</option>
													<option value="closed">Closed</option>
													<option value="never attended">Never attended</option>
												</select>
											</div>
											<div>
												<span className='mr-[10px]'>Timeframe:</span>
												<select value={selectedFrame} onChange={handleSelectChange1} id="" className='outline-none px-[5px] py-[5px] rounded text-black'>
													<option value="all">All</option>
													<option value="1w">1W</option>
													<option value="1m">1M</option>
													<option value="1y">1Y</option>
												</select>
											</div>

											<div>
												<span className='mr-[10px]'>Catergory:</span>
												<select value={selectedScope} onChange={handleSelectChange2} className='outline-none px-[5px] py-[5px] rounded text-black'>
													<option value="all">All</option>
													<option value="fees">Fees</option>
													<option value="accademic">Accademic</option>
													<option value="others">Others</option>
												</select>
											</div>

											<div>
												<span className='mr-[10px]'>Scope:</span>
												<select value={selectedClass} onChange={handleSelectChange3} className='outline-none px-[5px] py-[5px] rounded text-black'>
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
						<div className='bottom-[50px] top-[270px] right-[50px] left-[350px] max-800:left-[50px] absolute max-800:border-none border-[1px] border-black rounded px-[10px] py-[10px] flex justify-center items-center'>
							<div className={`${openDetails ? '' :'shadow-xl'} w-[950px] h-[400px] rounded overflow-auto px-[20px] py-[20px]`}>

								<div>
									{filteredData?.map((s, i) => {
										return <div key={i} className='border-[1px] rounded px-[20px] py-[10px] text-[12px] font-bold mb-[10px]'>
											<div className='flex justify-between items-center'>
												<p>Name: {s.name}</p>
												<p>status: <div className={`${s.status == 'open' ? 'bg-green-500' : ''} ${s.status == 'closed' ? 'bg-yellow-400' : ''} ${s.status == 'never attended' ? 'bg-red-600' : ''} ml-[10px] h-[10px] w-[10px] inline-block`}></div>
													{s.status}</p>
											</div>
											<div className='text-[14px]'>Title: {s.title}</div>
											<div className='h-[20px] overflow-hidden'>{s.description}</div>
											<div className='flex justify-between items-center'>
												<div>{s.date?.substring(0, 10) + ' ' + s.date?.substring(11, 16)}</div>
												<div className='flex justify-end items-center gap-2'>
													<div className='cursor-pointer text-white bg-[#04314C] font-bold rounded px-[10px] py-[5px]' onClick={() => {
														setOpenDetails(!openDetails)
														setSelectedId(i)
													}}>Details</div>
													<div className='cursor-pointer text-white font-bold bg-green-600 rounded px-[10px] py-[5px]' onClick={() => {
														setOpenDelegate(!openDelegate)
														setSelectedId(i)
													}}>Delegate</div>
												</div>
											</div>

											{/*  */}
											<div className={`${selectedId == i && openDetails ? 'block' : 'hidden'} absolute right-0 bottom-0 left-0 top-[0px] text-[14px] px-[20px] py-[20px] flex justify-center items-center`}>
												<div className='px-[20px] py-[20px] border-[1px] bg-white shadow-xl'>
													<div className='md:w-[600px] max-800:h-[500px] h-[450px]'>
														<div className='flex justify-end items-center pr-[30px]'>
															<div className='font-bold border-[1px] px-[5px] py-[5px] w-[30px] rounded text-white text-center cursor-pointer bg-black'
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
																	<td><div className={`${s.status == 'open' ? 'bg-green-500' : 'bg-red-500'} h-[10px] w-[10px] inline-block`}></div>{s.status}</td>
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
															</table>
														</div>
														<div className='px-[30px] mt-[20px]'>
															<h2>TITLE: {s.title}</h2>
														</div>
														<div className='mt-[20px] px-[30px]'>
															<div>Description</div>
															<div className='border-[1px] rounded md:h-[200px] px-[20px] py-[20px] overflow-auto'>
																{s.description}
															</div>
														</div>
													</div>
												</div>
											</div>

											{/*deligate */}
											<div className={`${selectedId == i && openDelegate ? 'block' : 'hidden'} absolute z-10 rounded border-[1px] right-[100px] max-800:right-0 px-[20px] py-[20px] bg-white h-[300px] w-[350px]`}>
												<div className='h-full border-[1px] rounded px-[10px] py-[10px] font-bold'>
													<span>Delegate this task to:</span>
												
													<div className='h-[180px] mb-[5px] mt-[10px] overflow-auto rounded bg-gray-100 px-[10px] py-[10px] '>
														{staffs.map((s,i)=>{
															return <div className='flex justify-start items-center gap-3 mb-[5px]'>
																<div className='w-[30px] h-[30px] rounded-[50%] overflow-hidden flex justify-center items-center bg-white'>
																	<img src={'https://odd22.onrender.com/'+s.profileImg?.replace(/\\/g, '/')} className='w-[30px] h-[30px]' />
																</div> 
																<div className={`${selectedStaffIndex==i?'bg-yellow-300':''} cursor-pointer  px-[10px] rounded`} onClick={(e)=> {
																	setSelectedStaffIndex(i)
																	setSelectedStaff(s._id)
																	
																}}>{s.name}</div>
															</div>
														})}
													</div>
													<button className='rounded bg-[#04314C] px-[10px] py-[5px] block text-white font-bold' onClick={async () => {
														const response = await fetch('https://odd22.onrender.com/delegate', {
															method: 'POST',
															headers: {
																'Content-Type': 'application/json',
																// Add other headers if required
															},
															body: JSON.stringify({ deligated_to: selectedStaff, _id: s._id, department: s.department })
														})

														const responseData = await response.json()

														setData(responseData.transformedData)
														setSelectedId(null)
														setSelectedStaffIndex(null)
													}}>Done</button>

												</div>
											</div>
											<button className={`${openDelegate ? 'block' : 'hidden'} z-9 absolute top-0 right-0 w-full h-[100%]`} onClick={() => setOpenDelegate(!openDelegate)}></button>
										</div>
									})}
								</div>
							</div>
						</div>
				</div>
			)}
		</div>
	)
}

export default Delegate