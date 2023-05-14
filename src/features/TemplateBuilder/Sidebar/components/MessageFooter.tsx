import { Box, Container, Typography, Switch } from '@mui/material';
import React, { useState } from 'react'
import ImportantIcon from '@mui/icons-material/Error';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import theme from '../../../../styles/style'
import TextEditor from './TextEditor'
function MessageFooter() {
    //checked variable for open/close footer, default to to show footer
    const[checked,setChecked]=useState<boolean>(true)
    return (
      <>
            <Container
          sx={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              pt:16,
              pb:16,
              pr:24,
              pl:24,
              width:360,
              height:380,
              bgcolor:theme.palette.primary.light,
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderRadius:'10px',  
              //relative so we can make the char count pos:absolute
              position:'relative',
              //colapse container when switch is off, checked=false
              ...(!checked &&{
                height:60
              })
          }}
        >
              {/* Footer  Container */}
              <Box
                sx={{
                   display:'flex',
                   flexDirection:'column',
                   width:312,
                   height:340,
                }}>
                     {/*Header Container*/}
                     <Box
                       sx={{
                           display:'flex',
                           flexDirection:'row',
                           alignItems:'flex-start',
                           p:0,
                           gap:8,
                           width:312,
                           height:28,
                           /* spacing with textarea*/
                           mb:12,
                       }}>
                            {/*Foot Header*/}
                             <Box
                                sx={{
                                    display:'flex',
                                    flexDirection:'row',
                                    alignItems:'center',
                                    p:0,
                                    width:312,
                                    height:28
                                }}>
                                      <TextFieldsIcon 
                                        sx={{
                                            height:24,
                                            width:24,
                                            color:"rgba(0, 0, 0, 0.54)"
                                        }}
                                      />
                                      {/*Container Footer Text and important icon */}
                                      <Box
                                        sx={{
                                            display:'flex',
                                            alignItems:'center',
                                            width:242,
                                            height:28,
                                        }}>
                                               <Typography
                                                   sx={{
                                                        display:'flex',
                                                        alignItems:'center',
                                                        fontWeight:500,
                                                        fontSize:16,
                                                        letterSpacing:0.15,
                                                        color:theme.palette.primary.main,
                                                        height:19,
                                                        /*adjusted width to account for 8px margin */
                                                        width:80,
                                                        ml:8
                                                   }}
                                                   > Footer text
                                                   </Typography>
                                                  <ImportantIcon
                                                  sx={{ 
                                                      width:12,
                                                      height:12,
                                                      color:'rgba(0, 0, 0, 0.38)',
                                                  }}
                                                />
                                      </Box>
                                     
                                        {/*switch container */}
                                        <Box
                                        sx={{
                                            display:'flex',
                                            flexDirection:'column',
                                            justifyContent:'center',
                                            alignItems:'center',
                                            p:0,
                                            gap:1,
                                            width:50,
                                            height:20,
                                
                                        }}>
                                          <Switch
                                              checked={checked}
                                              onChange={()=> setChecked(!checked)}
                                              inputProps={{ 'aria-label': 'controlled' }}
                                              sx={{
                                                //disabled circle white
                                                '&.MuiSwitch-root .MuiSwitch-switchBase': {
                                                  color: '#FAFAF'
                                                },
                                                //enabled circle dark blue
                                                '&.MuiSwitch-root .Mui-checked': {
                                                 color: '#007DFF'
                                                },
                                                //enabled track light blue
                                                '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track':{
                                                  bgcolor:'#9ECEFF',
                                                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
                                                }
                                               
                                               }}
                                          />
                                      </Box>
                            </Box>
                            
                    </Box>
                    {/*hide text editor if switch is closed, when check is false */}
                    {checked ?
                    <TextEditor defaultText={`Reply 'STOP' to opt out`} maxChar={60}/>
                    : 
                    null
                    }
                    
                </Box>
         </Container>
      </>
    );
  }
  
  export default MessageFooter;
  