import React, {useEffect, useState} from 'react'
import {File, Check, Trash} from 'lucide-react'

const Aunthenticate = (props) => {
	const [generatedKey, setGeneratedKey] = useState(null)
	const [showCopied, setShowCopied] = useState(false)
	const [copiedId, setCopiedId] = useState(null)
	const [authKeys, setAuthKeys] = useState([])

	const userData = props.userData

	useEffect(()=>{
		fetchedKeys()

		if(showCopied){
			setTimeout(() => {
				setShowCopied(!showCopied)
				setCopiedId(null)
			}, 3000)
		}
	}, [showCopied])

	const generateRandomKey = (length)=>{
		let PHRASE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		var key = []

		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * PHRASE.length)
			key += PHRASE.charAt(randomIndex)
		}
		let key1 = key.substring(0,4) + '-'
		let key2 = key.substring(4,8) + '-' + key.slice(8,12)
		key = 'dit-' + key1 + key2

		return key
	}

	const copyToClipBoard = (text)=>{
		navigator.clipboard.writeText(text)
	}

	const fetchedKeys = async()=>{
		const response = await fetch('http://localhost:3000/keys',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},
			body: JSON.stringify({generated_by: userData._id})
		})

		const responseData = await response.json()

		setAuthKeys(responseData.keys)

	}
	
	const popstdKeys = async () => {
		const response = await fetch('http://localhost:3000/post_keys', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},
			body: JSON.stringify({ generated_by: userData._id, key: generatedKey })
		})

		const responseData = await response.json()

		setAuthKeys(responseData.keys)
		setGeneratedKey('')
	}

  return (
	<div className='h-[100vh] ml-[300px] text-black text-[13px] font-bold'>
		<h2>You can always generate keys to let the staff members signup</h2>
		<button className='border-[1px] rounded bg-black text-white font-bold px-[10px] py-[5px]' onClick={()=> setGeneratedKey(generateRandomKey(12))}>Generate</button>
		<div className='flex justify-start items-center gap-5'>
			<div className='flex justify-center items-center  w-[200px] border-[1px] rounded h-[35px]'>
				{generatedKey}
			</div> <button className='inline-block px-[10px] h-[35px] rounded text-white font-bold bg-black cursor-pointer'
				onClick={popstdKeys}
			>Use</button>
		</div>
		<div className='rounded border-[1px] border-black absolute bottom-[50px] top-[150px] right-[50px] left-[350px] '> 
			<div className='w-full h-full flex justify-center items-center'>
				  <div className=' rounded border-[1px] px-[20px] py-[20px] shadow-xl w-[500px] h-[450px] flex justify-center items-center overflow-auto '>
					<div className='mt-[20px] px-[20px] py-[20px] w-[450px]'>
					{authKeys.length>0?(<table className='w-full'>
						{authKeys.map((t, i) => {
							return <tr className=''>
								<td className='border-[1px] w-[50px] px-[10px]'>{i + 1}</td>
								<td className='border-[1px] px-[10px] py-[10px]'>{t.key}
									<span className='cursor-pointer h-[20px] pt-[5px] w-[20px] bg-gray-200 rounded-[15px] inline-block'
									
									onClick={() => {
										setCopiedId(i)
										copyToClipBoard(t.key)
										setShowCopied(!showCopied)
									}}>
										{showCopied && copiedId==i ? <Check className='h-[10px] text-center' /> :<File className='h-[10px] text-center' />}
									</span>
									<span className='inline-block h-[20px] ml-[10px] w-[20px] pt-[5px] bg-gray-200 cursor-pointer rounded-[50%]'
										onClick={async() => {
											const response = await fetch('http://localhost:3000/delete_key', {
												method: 'POST',
												headers: {
													'Content-Type': 'application/json',
													// Add other headers if required
												},
												body: JSON.stringify({key: t.key })
											})

											const responseData = await response.json()

											setAuthKeys(responseData.keys)
										}}
									>
										<Trash className='h-[10px]' />
									</span>
								</td>
								<div className={`${showCopied && copiedId ==i?'block':'hidden'} absolute w-[100px] h-[30px] pt-[10px] bg-black text-white text-center ml-[10px] rounded text-[12px]`}>copied</div>
							</tr>
						})}
					</table>): (<div>No keys yet, you can generate one!</div>)}
					</div>
				</div>
			</div>
		</div>
	</div>
	
  )
}

export default Aunthenticate