import React, { useEffect, useState } from 'react'

const Track = () => {
	const [trackId, setTrackId] = useState('')
	const [warning, setWarning] = useState()
	const [message, setMessage] = useState()
	const [showTracks, setShowTracks] = useState(false)
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
				const response = await fetch('http://localhost:3000/track', {
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
				const fetchedIssues = responseData.fetchedIssues

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
	  <div className='ml-[300px] h-[100vh]'>
      <div className='border-[1px] border-black top-[130px] right-[50px] left-[300px] bottom-[50px] absolute rounded px-[20px] flex justify-center items-center'>
		<div className={`${showTracks?'block':'hidden'} text-[12px] font-bold h-[500px] w-[700px] border-[1px] rounded shadow-xl px-[20px] py-[20px]`}>
			<div className='px-[20px] text-white flex justify-end items-center mb-[10px]'>
				<div className='bg-black w-[20px] h-[20px] flex justify-center items-center rounded cursor-pointer'
					onClick={()=> setShowTracks(!showTracks)}
				>x</div>
			</div>
			<div className='text-[12px] px-[20px] font-bold inline-block mr-[10px] flex justify-between'>
				<div className='inline-block'>
					<div className='h-[20px] w-[20px] bg-red-200 rounded-[50%] flex justify-center items-center py-[5px] px-[5px]'>{userName?.substring(0,1).toLocaleUpperCase()}</div>
					<span className='text-[12px] font-bold inline-block'>{userName?.substring(0,1).toLocaleUpperCase() + userName?.substring(1, userName.length)}</span>
				</div>
				<div className='inline-block flex '>Re: {userId}</div>
			</div>

			<div className=' mt-[20px] px-[20px] h-[370px] pt-[10px] overflow-auto'>
				<div className=''>
					{myIssues.map((s)=>{
						return <div className='border-[1px] rounded px-[20px] py-[10px] mb-[10px] '>
							<div className='flex justify-end items-center'>status: <div className={`${s.status =='never attended'?'bg-red-600':''}  
							${s.status == 'open' ? 'bg-green-500' : ''} ${s.status == 'closed' ? 'bg-yellow-400' : ''} 
							inline-block w-[10px] h-[10px] ml-[10px]`}></div> {s.status}</div>
							<div>Title: {s.title}</div>
							<div className='h-[20px] overflow-hidden'>
								{s.description}
							</div>
							<div className='flex justify-between items-center'>
								<div>Date: {s.date.substring(0, 10) + ' ' + s.date.substring(11, 16)}</div>
								<div>
									<button className='bg-black text-white rounded px-[10px] '>Show</button>
								</div>
							</div>
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
							className='w-full  px-[10px] py-[5px] mb-[10px] rounded focus:outline-none bg-white border-2 border-black  font-medium'
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