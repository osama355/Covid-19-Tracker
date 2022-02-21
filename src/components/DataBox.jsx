import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NumberFormat from 'react-number-format'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style={
  box1:{
    borderBottom:"5px solid red"
  },
  box2:{
    borderBottom:"5px solid green"
  },
  box3:{
    borderBottom:"5px solid #282a3a"
  }

}
export default function DataBox(props) {
  const { totalConfirmed, totalRecovered, totalDeaths, country } = props
  return (
    <Box sx={{ flexGrow: 1, margin: "0 auto", marginTop:'5px', marginBottom:"50px", maxWidth: 1000 }}>
      <h2 style={{textTransform:"uppercase"}}>{!country ? "GLOBAL REPORT OF CORONA" : country}</h2>
      <Grid container spacing={3}>
        <Grid  item xs={12} sm={4}>
          <Item style={style.box1} elevation={3}>
            <h3>Total Confirmed</h3>
            <h3>{totalConfirmed}</h3>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item style={style.box2} elevation={3}>
            <h3>Total Recovered</h3>
            <h3>{totalRecovered}</h3>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item style={style.box3} elevation={3}>
            <h3>Total Deaths</h3>
            <h3>{totalDeaths}</h3>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
