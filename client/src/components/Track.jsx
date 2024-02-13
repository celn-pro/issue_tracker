import React, { useEffect, useState } from 'react'

const Track = () => {
	const [trackId, setTrackId] = useState('')
	const [warning, setWarning] = useState()
	const [message, setMessage] = useState()
	const [selectedId, setSelectedId] = useState(null)
	const [showTracks, setShowTracks] = useState(false)
	const [openDetails, setOpenDetails] = useState(false)
	const [myIssues, setMyIssues] = useState([])
	const [userName, setUserName] = useState()
	const [userId, setUserId] = useState()

	useEffect(()=>{
		setTimeout(()=>{
			setWarning(null)
		}, 4000)
	},[warning])

	const handleTrack = async () => {
		try {
			if(trackId){
				const response = await fetch('https://odd22.onrender.com/track', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						// Add other headers if required
					},
					body: JSON.stringify({ trackId: trackId }), // Send data as a JSON object
				});

				if (!response.ok) {
					throw new Error('Request failed');
				}

				const responseData = await response.json();
				console.log(responseData.transformedData)
				const fetchedIssues = responseData.transformedData

				if(fetchedIssues){
					setUserName(responseData.userName)
					setUserId(responseData.userId)
					setMyIssues(fetchedIssues)
					setShowTracks(true)
				}else if(responseData.message){
					setMessage(responseData.message)
					setWarning(true)
				}

			}else{
				setMessage('Please enter tracking key!')
				setWarning(true)
			}

		} catch (e) {
			console.error(e);
		}
	};
let name = 'name'
name.toLocaleUpperCase()


	const handleOnChange = (e)=>{
		const value = e.target.value
		setTrackId(value)
	}
  return (
	  <div className=' max-800:ml-[50px] h-[100vh]'>
      <div className='border-[1px] border-black max-800:border-none top-[130px] max-800:left-[50px] right-[50px] left-[300px] bottom-[50px] absolute rounded px-[20px] flex justify-center items-center'>
		<div className={`${showTracks?'block':'hidden'} text-[12px] font-bold h-[500px] w-[700px] border-[1px] rounded shadow-xl px-[20px] py-[20px]`}>
			<div className='px-[20px] text-white flex justify-end items-center mb-[10px]'>
				<div className='bg-black w-[20px] h-[20px] flex justify-center items-center rounded cursor-pointer'
					onClick={()=> setShowTracks(!showTracks)}
				>x</div>
			</div>
			<div className='text-[12px] px-[20px] font-bold inline-block mr-[10px] flex justify-between'>
				<div className='inline-block'>
					<div className='h-[25px] w-[25px] bg-red-200 rounded-[50%] flex justify-center items-center py-[5px] px-[5px]'>{userName?.substring(0,1).toLocaleUpperCase()}</div>
					<span className='text-[12px] font-bold inline-block'>{userName?.substring(0,1).toLocaleUpperCase() + userName?.substring(1, userName.length)}</span>
				</div>
				<div className='inline-block flex '>Re: {userId}</div>
			</div>

			<div className=' mt-[20px] px-[20px] h-[370px] pt-[10px] overflow-auto'>
				<div className=''>
					{myIssues.map((s,i)=>{
						// console.log(s,i)
						return <div className='border-[1px] rounded px-[20px] py-[10px] mb-[10px] '>
							<div className='flex justify-end items-center'>status: <div className={`${s.status =='never attended'?'bg-red-600':''}  
							${s.status == 'open' ? 'bg-green-500' : ''} ${s.status == 'closed' ? 'bg-yellow-400' : ''} 
							inline-block w-[10px] h-[10px] ml-[10px]`}></div> {s?.status}</div>
							<div>Title: {s.title}</div>
							<div className='h-[20px] overflow-hidden'>
								{s.description}
							</div>
							<div className='flex justify-between items-center'>
								<div>Date: {s.date?.substring(0, 10) + ' ' + s.date?.substring(11, 16)}</div>
								<div>
									<button className='bg-black text-white rounded px-[10px] ' onClick={()=>{
										setOpenDetails(!openDetails)
										setSelectedId(i)
									}}>Show</button>
								</div>
							</div>
							{/*  */}
							<div className={`${selectedId == i && openDetails ? 'block' : 'hidden'} absolute text-[12px] bottom-[50px] top-[50px] left-[250px] right-[250px] px-[20px] py-[20px] bg-white`}>
								<div className='flex justify-end items-center'>
									<div className='font-bold border-[1px] px-[5px] py-[5px] w-[20px] h-[20px] flex justify-center items-center rounded text-white text-center cursor-pointer bg-black'
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
									<h2>Title: {s.title?.substring(0,1).toLocaleUpperCase() + s.title?.substring(1, s.title.length)}</h2>
								</div>
								<div className='mt-[20px] px-[30px]'>
									<div className=''>Description</div>
									<div className='border-[1px] rounded h-[200px] px-[20px] py-[20px] text-[12px] overflow-auto'>
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
		<div className={`${showTracks?'hidden':'block'} h-[400px] w-[400px] rounded-xl border-[1px] shadow-xl px-[20px] py-[20px]`}>
			<div className='mt-[20px]'>
				<div>
				<div className='mb-[10px]'>
						<p className='font-bold text-[12px]'>TRACK:</p>
				</div>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<div className='w-full text-black text-[12px]'>
					<div>
						<input type="text" placeholder='Enter your tracking key'
							onChange={handleOnChange}
							className='w-full  px-[10px] py-[5px] mb-[10px] md:rounded focus:outline-none bg-white md:border-2 max-800:border-b-2 border-gray  font-medium'
						/>
					</div>
					<button 
						onClick={handleTrack}
						className=' text-white w-[100px] font-semibold rounded  font-medium px-[5px] py-[5px] bg-black'>Track
					</button>
					<div className={`${warning?'block':'hidden'} text-red-600`}>{message}</div>
				</div>
      		</div>
	  </div>
	  </div>
    </div>
  )
}

export default Track