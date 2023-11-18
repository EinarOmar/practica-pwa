import * as React from "react";
import { Grid } from "@mui/material";
import { Bread } from "../../components/customs/Bread";
import { WrapperSingleRoute } from "../../components/customs/WrapperSingleRoute";
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ProductCategories from './Calzado/Calzado';

export const Tienda = () => {
  return (
    <WrapperSingleRoute>
  
      <ProductCategories />
      
    </WrapperSingleRoute>
  );
};
