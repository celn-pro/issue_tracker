import { useState, useEffect } from "react"
import {User, Check} from 'lucide-react'

const Feedback = () => {
	const [show, setShow] = useState(false)
	const [data, setData] = useState('')
	const [message, setMessage] = useState('')
	const [warning, setWarning] = useState()
	const [sent, setSent] = useState(false)


	useEffect(() => {
		if (warning) {
			setTimeout(() => {
				setWarning(null)
			}, 4000)
		}
	}, [warning])

	const handleSend = async()=>{

		if(data){
			const response = await fetch('https://odd22.onrender.com/submit_feedback', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					// Add other headers if required
				},
				body: JSON.stringify({feedback: data})

			})

			const responseData = await response.json()
			if(responseData.message == 'done'){
				setMessage('Thank you for your feedback!')
				setSent(!sent)
			}else{
				setMessage('Could not send please try again later')
				setSent(!sent)
			}

		}else{
			setMessage('Cant submit empty field!')
			setWarning(true)
		}
	}
  return (
    <div className=' h-[100vh]'>
		<div className='md:border-[1px] border-black top-[130px] right-[50px] left-[300px] max-800:left-[50px] bottom-[50px] absolute rounded px-[20px] flex justify-center items-center'>
			<div className={`${sent?'flex justify-center items-center':''} h-[400px] w-[400px] border-[1px] rounded-xl shadow-xl px-[20px] py-[20px] text-[12px]`}>
				<div className={`${sent? 'hidden': 'block'}`}>
					<textarea cols="30" rows="10" placeholder='Enter your feedback here' className=' w-full px-[10px] py-[10px] focus:outline-none border-[1px]' onChange={(e)=>{
						setData(e.target.value)
					}}></textarea>
					<div>
						<button className='px-[10px] w-[100px] py-[5px] bg-black text-white rounded font-bold' onClick={handleSend}>Send</button>
					</div>
					<div className={`${warning?'block':'hidden'} text-red-600`}>
						<div>{message}</div>
					</div>
				</div>
				<div className={`${sent? 'block':'hidden'} `}>
					<div className="flex justify-center items-center">
						  <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[50%] border-[1px] border-green-600 text-green-600">
							  <Check className='h-[20px]' />
						  </div>
					</div>
					<div>{message}</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Feedback