import React from 'react'
import styles from './Community.module.css'
function SubReddit({ heading , data } ) {
  return (
    <div className={styles.subRedditsContainer}>
                <div className={styles.title}>
                    <h2>{heading}</h2>
                    <h2 className={styles.lowOpacity}>All</h2>
                </div>
                    {
                        data.map((item,index)=>{
                            return(
                                <div key={index} className={styles.subReddit}>
                                    <img src={item.image} alt="profilePic" width={30} height={30} className={styles.profilePic}/>
                                    <div className={styles.nameAndNum}>
                                    <h3>{item.title}</h3>
                                    <h3 className={item.num? styles.num:""}>{item.num}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
  )
}

export default SubReddit