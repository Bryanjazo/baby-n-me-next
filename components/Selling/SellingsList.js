import React from 'react'
import sellingListStyles from '../../styles/Sellings.module.css'
import Image from 'next/image'
import Link from 'next/link'
import SellingItem from './SellingItem'
export default function SellingsList({sellings}) {

    return (
    <div>
      <div className={sellingListStyles.cardContainer}>
        
        {sellings.map((selling, key) => (
        <SellingItem selling={selling} key={key}/>
        ))}
         
      </div>
    </div>
    )
}
