import React from "react";
import BasicModal from "./Modal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

  

import { styled } from '@mui/material/styles';
import { red, green, blue } from '@mui/material/colors';
import { Typography } from "@mui/material";








const Dashboard = () => {
   
  return (
    <>
    
      <div className="w-full border-2 h-36 mt-3">
        <h2 className="mt-3 ml-7 font-bold">Received Order</h2>
       
        <Stack spacing={33} direction="row" className="mt-3">
          <BasicModal />
        
          <Button className="  left-56" variant="text">
            Company Name
           
          </Button>
      
          <Button  className="  left-56" variant="text">
            Status
          </Button>

        
        </Stack>
       
      </div>

      <div className="w-full border-2 h-36 mt-3">
        <h2 className="mt-3 ml-7 font-bold">Placed Order</h2>

        <Stack spacing={33} direction="row" className="mt-3">
          <Button className="mt-3" variant="text">
            Order ID
          </Button>

          <Button  className="left-56 md:ml-auto flex" variant="text">
            Company Name
          </Button>
          <Button className="left-56" variant="text">
            Status
          </Button>
        </Stack>
      </div>
      
    </>
  );
};

export default Dashboard;
