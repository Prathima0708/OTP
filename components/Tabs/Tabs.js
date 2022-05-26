import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './Tabs.module.css'
import { slugify } from './utils/slugify'
import { useRouter } from 'next/router'

const Tabs = ({children}) => {
    const [activeTab,setActiveTab]=useState(children[0].props.label)
    const router=useRouter()
    const handleClick=(e,newActiveTab)=>{
      e.preventDefault()
      setActiveTab(newActiveTab)
    }


//     useEffect(()=>{
// if(initialTab.tab){
//   setActiveTab(initialTab)
// }
//     },[])


    useEffect(() => {
     router.push(`${router.pathname}?tab=${slugify(activeTab)}`,undefined,{shallow:true})
    }, [activeTab])

  return (
    <div>
    <ul className={styles.tabs}>
        {children.map((tab)=>{
          const label=tab.props.label;
          return(
            <li className={label==activeTab ? styles.current : ""} key={label}>
            <a href="" onClick={(e)=>handleClick(e,label)}> {label}</a> 
              </li>
          )
        }
           
        )}
    </ul>
    {children.map((one)=>{
      if(one.props.label==activeTab)
      return (
        <div key={one.props.label} className={styles.content}>{one.props.children}</div>

      )
    }
       
    )}

    </div>
  )
}

export default Tabs
