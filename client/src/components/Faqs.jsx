import React, {useEffect, useState} from 'react'

const Faqs = () => {
  const [searching, setSearching] = useState(false)
  const [faqs, setFaqs] = useState([])

  useEffect(()=>{
	fetchFaqs()
  },[])

  const fetchFaqs = async()=>{
	  const response = await fetch('http://localhost:3000/fetch_faqs', {
		  method: 'POST',
		  headers: {
			  'Content-Type': 'application/json',
			  // Add other headers if required
		  },
	  })

	  const responseData = await response.json()

	  if(responseData.faqs){
		setFaqs(responseData.faqs)
	  }
  }

  return (
	  <div className='ml-[300px] h-[100vh]'>
	  <div className='border-[1px] border-black top-[130px] right-[50px] left-[300px] bottom-[50px] absolute rounded px-[20px] flex justify-center items-center'>
	  <div className=' h-[90%] w-[600px] rounded border-[1px] shadow-xl px-[20px]'>
      <div className='flex justify-center items-center mt-[20px] mb-[20px]'>
        <h2 className='font-system font-bold'>Frequent asked questions| Q&A</h2>
      </div>
      <div className='flex justify-center items-center mb-[30px] px-[20px]'>
        <div className='w-full'>
        <input type="search" placeholder='Search or ask here!'
          className='outline-none w-full bg-gray-100 h-[30px] py-[10px] px-[10px] rounded border-[1px]'
          onChange={()=>{
            setSearching(!searching)
          }}
        />
        </div> 
		<div className= {`${searching?'block':'hidden'} flex justify-start items-center ml-[40px]`}>
			<div className={` bg-gray-400`}>
				<p>Seaching...</p>
			</div>
      </div>      
      </div>
      <div className=' px-[20px] py-[20px] h-[380px] rounded overflow-auto'>
        <div>
        {
          faqs.map((faq)=>(
            <FaqCard faq={faq} />
          ))
        }
        </div>
      </div>
	  </div> 
	  </div>   
    </div>
  )
}

const FaqCard = ({faq})=>{
  const [showFaq, setShowFaq] = useState(true)

  return (
    
       <div>
        
          <div className='mb-[20px]'>
            <h3 className='font-system font-bold font-medium'>
              {faq.title.toLocaleUpperCase()}
              <span className={`${showFaq?'hidden':'inline-block'} hover:text-gray-400 cursor-pointer text-gray-300 pl-[20px]`}
                      onClick={()=> setShowFaq(!showFaq)}
                      > Read</span>
            </h3>
            <p className={`${showFaq?'block':'hidden'} font-verdan rounded border-[1px] py-[10px] px-[10px]`}>
              {faq.description} 
              <span className={`${showFaq?'inline-block':'hidden'} hover:text-gray-400 cursor-pointer text-gray-300 pl-[20px]`}
                      onClick={()=> setShowFaq(!showFaq)}
                      > hide</span>
            </p>
          </div>
        
       </div>
      
  )
}

export default Faqs