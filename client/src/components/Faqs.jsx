import React, { useState } from 'react'

const Faqs = () => {
  const [searching, setSearching] = useState(false)

  var faqs = [{
    title: 'what is odd22?',
    answer: 'odd22 is a simple yet powerfull system for submitting and tracking challenges that student meet at our campas'
  },{
    title: 'who is behind odd22?',
    answer: 'odd22 is owned by the campass iteself, though it was developed by odd22 enrolled students'
  }
]

  return (
    <div>
      <div className='flex justify-center items-center mt-[20px] mb-[20px]'>
        <h2 className='font-system font-bold'>Frequent asked questions| Q&A</h2>
      </div>
      <div className='flex justify-start items-center ml-[40px] mb-[30px]'>
        <div className='md:ml-[13%] w-[79%] md:w-[58%]'>
        <input type="search" name="" id="" placeholder='Search or ask here!'
          className='outline-none w-[90%] bg-gray-100 h-[30px] py-[10px] px-[10px] rounded border-[1px]'
          onChange={()=>{
            setSearching(!searching)
          }}
        />

        </div>       
      </div>
      <div className= {`${searching?'block':'hidden'} flex justify-start items-center ml-[40px]`}>
        <div className={` md:ml-[13%] w-[70%] md:w-[52%] bg-gray-400`}>
            <p>Seaching...</p>
        </div>
      </div>
      <div className='flex justify-center items-center ml-[40px]'>
        <div>
        {
          faqs.map((faq)=>(
            <FaqCard faq={faq} />
          ))
        }
        </div>
      </div>    
    </div>
  )
}

const FaqCard = ({faq})=>{
  const [showFaq, setShowFaq] = useState(true)

  return (
    
       <div className=' transition-all duration-300 '>
        
          <div className='mb-[20px]'>
            <h3 className='font-system font-bold font-medium'>
              {faq.title.toLocaleUpperCase()}
              <span className={`${showFaq?'hidden':'inline-block'} hover:text-gray-400 cursor-pointer text-gray-300 pl-[20px]`}
                      onClick={()=> setShowFaq(!showFaq)}
                      > Read</span>
            </h3>
            <p className={`${showFaq?'block':'hidden'} font-verdan w-[70%] rounded border-[1px] py-[10px] px-[10px]`}>
              {faq.answer} 
              <span className={`${showFaq?'inline-block':'hidden'} hover:text-gray-400 cursor-pointer text-gray-300 pl-[20px]`}
                      onClick={()=> setShowFaq(!showFaq)}
                      > hide</span>
            </p>
          </div>
        
       </div>
      
  )
}

export default Faqs