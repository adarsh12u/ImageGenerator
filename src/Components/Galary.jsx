import { useQuery  } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import { globalcontext } from '../Context/Context'
const Galary = () => {

  const {search} = globalcontext();
  const url = `https://api.unsplash.com/search/photos?client_id=IBjF-RVQotv8KUgj8Y3Bf9eb0zeO_Y07cqluxNlTB7A`

  const query = useQuery({
        queryKey : ['photos' ,search],
        queryFn: async()=>{
            const response = await  axios.get(`${url}&query=${search}`)
        return response.data
          }
  })
if(query.isLoading){
  return <h1>Loading Rukho ........</h1>
}
if(query.isError){
return <h1> NOT FOUND ......... </h1>
}


const result = query.data.results;
if(result.length < 1){
  return <h1> Search .. </h1>
}
  return (
    <div className='image-container'>

{
   result.map((item)=>{
      const url = item?.urls?.regular
      console.log(url)
  return <img src={url} alt="" className='img' />
})
}

    </div>
  )
}

export default Galary