import React, { useEffect, useState } from 'react'
import {File} from 'lucide-react'

const Aunthenticate = () => {
	const [generatedKey, setGeneratedKey] = useState(null)
	let textList = ['dit-J0jK-RUvF-kU4m', 'dit-EWPT-OMRs-VHXZ', 'dit-GtvN-87HU-HjsA']

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
		// textList.push(key)

		return key
	}

	const copyToClipBoard = (text)=>{
		navigator.clipboard.writeText(text)
	}
	

  return (
	<div className='h-[100vh] ml-[300px]'>
		<h2>you can always generate keys to let the staff members signup</h2>
		<button className='border-[1px] rounded bg-[#04314C] text-white font-bold px-6 py-2' onClick={()=> setGeneratedKey(generateRandomKey(12))}>generate</button>
		<div>
			<ul>
				<li>{generatedKey}</li>
			</ul>
		</div>
		<table>
			{textList.map(t =>{
				return <tr>
					<td>{t}</td>
					<td className='cursor-pointer h-[20px] w-[20px] hover:bg-gray-200 rounded-[15px]' onClick={()=>copyToClipBoard(t)}>
						<File className='h-[10px]'/>
					</td>
				</tr>
			})}
		</table>
	</div>
	
  )
}

export default Aunthenticate