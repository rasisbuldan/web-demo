import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from "react";

const sampleData = [{
    id: 1,
    title: "abcd",
    price: 120000
  }, {
    id: 2,
    title: "efgh",
    price: 340000
  }
]

export default function Home() {
  const [itemCount, setItemCount] = useState(0);
  const [data, setData] = useState(sampleData);

  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>Sample Page</div>
      <div className={styles.generateContainer}>
        <button className={styles.incrDecrButton} onClick={() => {
          if (itemCount <= 0) {
            return
          }
          setItemCount(itemCount - 1)
        }}>-</button>
        <div className={styles.itemCountNumber}>{itemCount}</div>
        <button className={styles.incrDecrButton} onClick={() => {
          setItemCount(itemCount + 1)
        }}>+</button>
        <button className={styles.generateButton} onClick={() => {
          fetch(`/api/data?count=${itemCount}`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }).then((res) => res.json())
          .then((resData) => {
            console.log(resData);
            setData(resData)
          });
        }}>Generate</button>
      </div>
      <div className={styles.dataContainer}>
        {data.map((d) => {
          return (
            <div className={styles.cardContainer}>
              <div className={styles.cardTitle}>{d.id} - {d.title}</div>
              <div className={styles.cardPrice}><div>Price: {d.price}</div></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
