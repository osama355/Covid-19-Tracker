import { fontFamily } from '@mui/system'
import React from 'react'

const style={
    select:{
        padding:'10px',
        fontWeight:"light",
        fontSize:"0.8em",
        cursor:"pointer"
    },
    option:{
        // color:"#1976D2"
    }

}
export default function SelectBox({coronaSummary}) {

  return (
    <select style={style.select}>
        {
            coronaSummary.Countries && coronaSummary.Countries.map((country,key)=>(
                <option style={style.option} key={key} value={country.Slug} >{country.Country}</option>
            ))
        }
    </select>
  )
}
