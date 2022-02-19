import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function DataBox(props) {
  const { totalConfirmed, totalRecovered, totalDeaths, country } = props
  return (
    <Box sx={{ flexGrow: 1, margin: "0 auto", marginTop:'5px', marginBottom:"50px", maxWidth: 1000 }}>
      <h1>{!country ? "GLOBAL REPORT OF CORONA" : country}</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Item elevation={3}>
            <h3>Total Confirmed</h3>
            <h3>{totalConfirmed}</h3>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item elevation={3}>
            <h3>Total Recovered</h3>
            <h3>{totalRecovered}</h3>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item elevation={3}>
            <h3>Total Deaths</h3>
            <h3>{totalDeaths}</h3>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}