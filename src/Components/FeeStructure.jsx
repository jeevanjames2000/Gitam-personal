import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function FeeStructure() {
  return (
    <>
    <Grid container>
      <Grid 
        item 
        xs={12} 
        style={{
          height: '783px',
          width: '1920px',
          backgroundColor: '#F4E4C9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          paddingTop: '3rem'
        }}
      >
        <Typography 
          variant='h3' 
          style={{
            color: '#004740',
            minHeight: '39px',
            textAlign: 'center'
          }}
        >
          Fee Structure
        </Typography>

        <Grid 
          item 
          container 
        //   justifyContent="center"
        //   alignItems="center"
        display={'flex'}
          style={{
            marginTop: '1rem'
          }}
        >
          <div style={{
            width: '200px',
            height: '200px',
            border: '2px solid #004740',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#007367'
    
          }}>
           <Typography  style={{color:'#fff',height:'50px',width:'148px',fontWeight:'700',fontSize:'24px'}}>Management/<br/>
Paid Seats</Typography>
          </div>
          <div style={{height:'2px',width:'40px',backgroundColor:'black',alignItems:'center',display:'flex',justifyContent:'center'}}></div>
          <div style={{
             width: '172px',
             height: '172px',
             border: '2px solid #fff',
             borderRadius: '50%',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             backgroundColor:'#fff'
          }}>
            <div style={{height:'48px',width:'113px'}}>

           <Typography  >1<sup>st</sup> Year<br/>
            </Typography>
            <Typography style={{color:'#007367',height:'50px',width:'148px',fontWeight:'700',fontSize:'24px'}}> &#8377;25,37,000</Typography>
              </div>
            </div>
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}
