import React from 'react'
import NavTabs from '../components/layout/MainNavigation'
import Home from '../components/layout/MainNavigation'

import BasicTabs from '../components/layout/MainNavigation'
import TabsRouter from '../components/layout/MainNavigation'
import Tabs from '../components/Tabs/Tabs'







const hello = () => {
  return (
    <div>
    <Tabs>
    <div label="Tab 1">
            <h2>Tab 1</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>

        <div label="Tab 2">
            <h2>Tab 2</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>

        <div label="Tab 3">
            <h2>Tab 3</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        </Tabs>
    </div>
  )
}

export default hello