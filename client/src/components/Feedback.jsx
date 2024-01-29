import React from 'react'

const Feedback = () => {
  return (
    <div className='ml-[300px] h-[100vh]'>
		<div className='border-[1px] border-black top-[130px] right-[50px] left-[300px] bottom-[50px] absolute rounded px-[20px] flex justify-center items-center'>
			<div className=' h-[400px] w-[400px] border-[1px] rounded-xl shadow-xl px-[20px] py-[20px]'>
				<div>
					<textarea name="" id="" cols="30" rows="10" className='focus:outline-none border-[1px]'></textarea>
					<div>
						<button className='px-[10px] bg-black text-white rounded font-bold'>Send</button>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Feedback