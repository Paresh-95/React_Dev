import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

 function Github() {
   const data = useLoaderData()
//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/paresh-95')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             setData(data)
//         })
//     }, [])
    
  return (
    <div className='text-center  text-black  text-3xl bg-white-700 m-4 pt-4'>Github followers : {data.followers}
    <div className=' flex justify-center items-center mt-8 '>
        <img className='rounded-full' src={data?.avatar_url} alt='git-picture'  width={300}/>
    </div>
    </div>
  )
}
export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/paresh-95') 
    return response.json()
}