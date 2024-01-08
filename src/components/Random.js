import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';



const Random = () => {

    const {gif, loading, fetchData} = useGif();

    return (
    <div className='w-1/2 bg-yellow-200 rounded-lg border-gray-500 border flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-semibold'>A Random Meme</h1>
        {
            loading ? <Spinner/> : <img src={gif} alt='' width="450" ></img>
       
        }
        <button onClick={()=>  fetchData()} className='w-10/12 bg-yellow-100 text-lg  py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Random