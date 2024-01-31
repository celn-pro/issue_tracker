import React, {useEffect, useState} from 'react'
import {File, Check} from 'lucide-react'

import {textList} from '../../constants'

const Aunthenticate = () => {
	const [generatedKey, setGeneratedKey] = useState(null)
	const [showCopied, setShowCopied] = useState(false)
	const [copiedId, setCopiedId] = useState(null)
	const texts = [...textList]

	useEffect(()=>{
		setTimeout(()=>{ 
		setShowCopied(!showCopied)
		setCopiedId(null)
	}, 3000)
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
	

  return (
	<div className='h-[100vh] ml-[300px] text-black text-[13px] font-bold'>
		<h2>You can always generate keys to let the staff members signup</h2>
		<button className='border-[1px] rounded bg-black text-white font-bold px-[10px] py-[5px]' onClick={()=> setGeneratedKey(generateRandomKey(12))}>Generate</button>
		<div>
			<ul>
				<li>{generatedKey}</li>
			</ul>
		</div>
		<div className='rounded border-[1px] border-black absolute bottom-[50px] top-[150px] right-[50px] left-[350px] '> 
			<div className='w-full h-full flex justify-center items-center'>
				<div className=' rounded border-[1px] px-[20px] py-[20px] shadow-xl w-[400px] h-[250px] flex justify-center items-center overflow-auto '>
					<table>
						{texts.map((t, i) => {
							return <tr>
								<td className='border-[1px] w-[50px] px-[10px]'>{i + 1}</td>
								<td className='border-[1px] px-[10px] py-[10px]'>{t}
									<span className='cursor-pointer h-[20px] pt-[5px] w-[20px] bg-gray-200 rounded-[15px] inline-block'
									
									onClick={() => {
										setCopiedId(i)
										copyToClipBoard(t)
										setShowCopied(!showCopied)
									}}>
										{showCopied && copiedId==i ? <Check className='h-[10px] text-center' /> :<File className='h-[10px] text-center' />}
									</span>
								</td>
								<div className={`${showCopied && copiedId ==i?'block':'hidden'} absolute w-[100px] h-[30px] pt-[10px] bg-black text-white text-center ml-[10px] rounded text-[12px]`}>copied</div>
							</tr>
						})}
					</table>
				</div>
			</div>
		</div>
	</div>
	
  )
}

export default Aunthenticate