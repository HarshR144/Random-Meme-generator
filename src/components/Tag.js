
import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    const [tag,setTag ] = useState("");
    const {gif, loading, fetchData} = useGif(tag);
    
    return (
    <div className='w-1/2 justify-end bg-blue-500 rounded-lg border-gray-500 border flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-semibold'>Random {tag} Meme</h1>
        {
            loading ? <Spinner/> : <img src={gif} alt='' width={450}></img>
       
        }

        <input placeholder='Enter tags' className='w-10/12 text-lg  py-2 rounded-lg mb-[3px] px-4 text-center'
          onChange={(event)=>setTag(event.target.value)} value={tag}
         />
        <button onClick={()=>  fetchData(tag)} className='w-10/12 bg-yellow-100 text-lg  py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag