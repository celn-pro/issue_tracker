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
	const [data, setData] = useState([])

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
		const response = await fetch('http://localhost:3000/issues', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},
			body: JSON.stringify({ department: userData.department })
		})

		const responseData = await response.json()

		if (responseData.transformedData) {
			setData(responseData.transformedData)
		}
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
		<div>
			<div className='bg-black text-white text-[12px] ml-[300px] px-[30px] py-[20px] h-[90px] rounded'>
				<span className='font-bold'>Filter by:</span>
				<div className='w-full'>
					<form onSubmit={handleSubmit}>
						<table className='w-[900px]'>
							<tr className='font-bold'>
								<td>
									<span className='mr-[10px]'>Status:</span>
									<select onChange={handleSelectChange4} className='rounded outline-none px-[5px] py-[5px] text-black'>
										<option value="all">All</option>
										<option value="open">Open</option>
										<option value="closed">Closed</option>
										<option value="never attended">Never attended</option>
									</select>
								</td>
								<td>
									<span className='mr-[10px]'>Timeframe:</span>
									<select value={selectedFrame} onChange={handleSelectChange1} id="" className='outline-none px-[5px] py-[5px] rounded text-black'>
										<option value="all">All</option>
										<option value="1w">1W</option>
										<option value="1m">1M</option>
										<option value="1y">1Y</option>
									</select>
								</td>

								<td>
									<span className='mr-[10px]'>Catergory:</span>
									<select value={selectedScope} onChange={handleSelectChange2} className='outline-none px-[5px] py-[5px] rounded text-black'>
										<option value="all">All</option>
										<option value="fees">Fees</option>
										<option value="accademic">Accademic</option>
										<option value="others">Others</option>
									</select>
								</td>

								<td>
									<span className='mr-[10px]'>Scope:</span>
									<select value={selectedClass} onChange={handleSelectChange3} className='outline-none px-[5px] py-[5px] rounded text-black'>
										<option value="all">All</option>
										<option value="od">OD</option>
										<option value="beng">BENG</option>
									</select>
								</td>
								<td>
									<button type='submit' className='ml-[20px] w-[100px] inline-block rounded bg-white text-black font-bold cursor-pointer px-[10px] py-[5px]'>Apply</button>
								</td>

							</tr>
						</table>
					</form>
					
				</div>
			</div>
			<div className='bottom-[50px] top-[160px] right-[50px] left-[350px] absolute border-[1px] border-black rounded px-[10px] py-[10px] flex justify-center items-center '>
				<div className='w-[950px] h-[500px] rounded shadow-xl overflow-auto px-[20px] py-[20px]'>
				
				<div>
					{data?.map((s,i) => {
						return <div key={i} className='border-[1px] rounded px-[20px] py-[10px] text-[12px] font-bold mb-[10px]'>
							<div className='flex justify-between items-center'>
								<p>{s.name}</p>
								<p>status: <div className={`${s.status == 'open' ? 'bg-green-500' : ''} ${s.status == 'closed' ? 'bg-yellow-400' : ''} ${s.status == 'never attended' ? 'bg-red-600' : ''} ml-[10px] h-[10px] w-[10px] inline-block`}></div>
									{s.status}</p>
							</div>
							<div className='text-[14px]'>Title: {s.title}</div>
							<div className='h-[20px] overflow-hidden'>{s.description}</div>
							<div className='flex justify-between items-center'>
								<div>{s.date?.substring(0, 10) + ' ' + s.date?.substring(11, 16)}</div>
								<div className='flex justify-end items-center gap-2'>
									<div className='cursor-pointer text-white bg-[#04314C] font-bold rounded px-[10px] py-[5px]' onClick={()=>{
										setOpenDetails(!openDetails)
										setSelectedId(i)
									}}>Details</div>
									<div className='cursor-pointer text-white font-bold bg-green-600 rounded px-[10px] py-[5px]' onClick={()=>{
										setOpenDelegate(!openDelegate)
										setSelectedId(i)
									}}>Delegate</div>
								</div>
							</div>

							{/*  */}
							<div className={`${selectedId == i&& openDetails?'block':'hidden'} absolute h-full w-full text-[14px] top-0 left-0 px-[20px] py-[20px] bg-white flex justify-center items-center`}>
								<div className='px-[20px] py-[20px] border-[1px] shadow-xl'>
								<div className='w-[600px] h-[450px]'>
									<div className='flex justify-end items-center pr-[30px]'>
										<div className='font-bold border-[1px] px-[5px] py-[5px] w-[30px] rounded text-white text-center cursor-pointer bg-black'
											onClick={()=>{
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
										<div className='border-[1px] rounded h-[200px] px-[20px] py-[20px] overflow-auto'>
											{s.description}
										</div>
									</div>
								</div>
								</div>
							</div>

							{/*  */}
							<div className={`${selectedId == i&&openDelegate? 'block':'hidden'} absolute z-10 rounded border-[1px] right-[100px] px-[20px] py-[20px] bg-white h-[200px]`}>
								<div className='h-full border-[1px] rounded px-[10px] py-[10px] font-bold'>
									<span>Delegate this task to:</span>
									<select className='outline-none' onChange={handleStaffOnChange}>
										<option value="">select</option>
										<option value="Gift Msigwa">Gift Msigwa</option>
										<option value="Idrissa Muhammad">Idrissa Muhammad</option>
										<option value="Ramadhan Salehe">Ramadhan Salehe</option>
									</select>
									<button className='rounded bg-[#04314C] px-[10px] py-[5px] block text-white font-bold' onClick={async() => {
											const response = await fetch('http://localhost:3000/delegate', {
												method: 'POST',
												headers: {
													'Content-Type': 'application/json',
													// Add other headers if required
												},
												body: JSON.stringify({deligated_to: selectedStaff, _id: s._id, department: s.department })
											})

											const responseData = await response.json()

											setData(responseData.transformedData)
											setSelectedId(null)
										}}>Done</button>

								</div>
							</div>
							<button className={`${openDelegate?'block':'hidden'} z-9 absolute top-0 right-0 w-full h-[100%]`} onClick={()=>setOpenDelegate(!openDelegate)}></button>
						</div>
					})}
				</div>
			</div>
			</div>
		</div>
	)
}

export default Delegate