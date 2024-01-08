import React, { useState } from 'react'

const Random = () => {
    const [gif,setGif] = useState("");
    function clickHandler(){}
    
    
    return (
    <div className='w-1/2 h-[450px] bg-yellow-200 rounded-lg border-gray-500 border flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-semibold'>A Random Meme</h1>
        <img src={gif} alt='' width={450}></img>
        <button onClick={clickHandler} className='w-10/12 bg-yellow-100 text-lg  py-2 rounded-lg'>Generate</button>
    </div>
  )
}

export default Random