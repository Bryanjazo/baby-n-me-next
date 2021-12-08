import React from 'react'
import {server} from '../../../config/index'
import { useRouter } from 'next/router'
import Image from 'next/image'
export default function Selling({selling}) {
    console.log(selling)
    // const router = useRouter();
    // const {id} = router.query
    return (
        <div>
            <Image src={selling.image_url} alt={selling.title} width={300} height={200}/>
            <p>{selling.title}</p>
            <p>{selling.price}</p>
            <p>{selling.location}</p>
        </div>
    )
}


export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/v1/sellings/${context.params.id}`)
    const selling = await res.json()
  
    return {
      props: {selling}, // will be passed to the page component as props
    }
}  

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/v1/sellings`);
  
    const sellings = await res.json();
  
    const ids = sellings.map((article) => article.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  
    return {
      paths,
      fallback: false,
    };
  };
  