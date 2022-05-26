import React from 'react'


import BasicTabs from '../components/layout/MainNavigation'

import Tabs from '../components/Tabs/Tabs'
import { useRouter } from 'next/router'
import Profile from '../components/Profile'








const user = () => {
  return (
    <div>
    <Tabs >
    <div label="Dashboard">
            <h2>Dashboard Page </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>

        <div label="Profile">
            <h2>Profile Page </h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>

        <div label="Logout">
            <h2>Logout Page</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        </Tabs>
    </div>
  )
}

export default user


// hello.getInitialProps=({query})=>{
//   return {query}
// }




// const hello = () => {
//   return (
//     <div>
//      <BasicTabs/> 
//     </div>
//   )
// }

// export default hello