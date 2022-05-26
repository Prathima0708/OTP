



// import Link from 'next/link';

import Tabs from "../Tabs/Tabs"
import { useRouter } from "next/router"
import Link from "next/link"
import Checkout from "../Company/CompanyForm"
import CompanyForm from "../Company/CompanyForm"


// import classes from './MainNavigation.module.css';

// const MainNavigation = () => {
//   return (
//     <header className={classes.header}>
//       <Link href='/'>
//         <div className={classes.logo}>User Profile</div>
//       </Link>
//       <nav>
//         <ul>
          
         
//           <li>
//             <Link href='/dashboard'>Dashboard</Link>
//           </li>

//           <li>
//             <Link href='profile'>Profile</Link>
//           </li>

//           <li>
//             <Link href='/'>Logout</Link>
//           </li>
          
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default MainNavigation;



// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Profile from '../Profile';


// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);


//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Dashboard" {...a11yProps(0)}  />
//      <Tab label="Profile" {...a11yProps(1)}   />
//           <Tab label="Logout" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//        Dashboard Page
//        </TabPanel>
//        <TabPanel value={value} index={1}>
//        Profile Page
//        </TabPanel>
//       <TabPanel value={value} index={2}>
//         Logout Page
//       </TabPanel>
     
// {value===1 && <Profile/>}
//     </Box>
//   );
// }





const MainNavigation = ({user}) => {

const router=useRouter()

  return (
    <div >
      <Tabs >
    <div label="Dashboard">
            <h2 className="text-2xl font-bold">Dashboard Page </h2>
        <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>

        <div label="Profile">
            <h2 className="text-2xl font-bold">Profile Page </h2>
        <p className="mt-3">Welcome ,<span className="font-bold"> {user.name}</span></p>
        <p>Phone Number: <span className="font-bold">{user.phone}</span></p>
      <CompanyForm />
        </div>

        <div label="Product">
            <h2 className="text-2xl font-bold">Product Page</h2>
          
        </div>
        </Tabs>
    </div>
  )
}

export default MainNavigation















