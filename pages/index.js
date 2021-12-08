import Head from 'next/head'
import React, {useEffect, useState} from 'react'
import {server} from '../config/index'
import styles from '../styles/Home.module.css'
import SellingsList from '../components/Selling/SellingsList'
export default function Home({sellings}) {
  


  return (
    <div className={styles.container}>
      <SellingsList sellings={sellings}/>
    </div>
  )
}


export async function getStaticProps(context) {
  const res = await fetch(`${server}/api/v1/sellings`)
  const sellings = await res.json()

  return {
    props: {sellings}, // will be passed to the page component as props
  }
}