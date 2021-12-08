import React from 'react'
import sellingListStyles from '../../styles/Sellings.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function SellingItem({selling}) {
    console.log(selling)
    return (
    <Link  href="/selling/[id]" as={`/selling/${selling.id}`}>
        <div className={sellingListStyles.card}>

 
               
            <div className="image-container">
        
            <Image  src={selling.image_url} alt={selling.title} className={sellingListStyles.cardImage} width={300}
                 height={200} />
                          
                        </div>
                         <div className={sellingListStyles.bottomSection}>
                              <div className="info-container">
                                <div className="title">
                                 <p>{selling.title}</p>
                               </div>
                             <div className="price">${selling.price}</div>
                             <div className="location">{selling.location}</div>
                         </div>
                          <div className="likes-container"></div>
                         </div>
                      
                   
        </div>
    </Link>
    )
}
