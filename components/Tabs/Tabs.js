import React, { useState } from 'react'
import styles from './Tabs.module.css'

const Tabs = ({children}) => {
    const [activeTab,setActiveTab]=useState(children[0].props.label)
  return (
    <div>
    <ul className={styles.tabs}>
        {children.map((tab)=>(
            <li key={tab.props.label}>{tab.props.label}</li>
        ))}
    </ul>
    {children.map((one)=>(
        <div key={one.props.label} className={styles.content}>{one.props.children}</div>
    ))}

    </div>
  )
}

export default Tabs
