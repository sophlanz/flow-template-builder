import { Box, Container, Typography, Switch, TextField } from '@mui/material';
import { useState } from 'react';
import RectangleIcon from '@mui/icons-material/Crop169';
import ImportantIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import theme from '../../../../styles/style'
function MessageButtons() {

    //checked variable for open/close header, default to to show header
    const[checked,setChecked]=useState<boolean>(true)
    //default button values
    const defaultButtons = [
      'Talk to a styling expert',
      'Sure!',
      'Maybe next time'
    ]
    //store button values, will be updated dynamically
    const [buttonValues, setButtonValues]= useState<string[]>(defaultButtons)
    /*delete buttons */
    const handleDelete =(index:number)=>{
          const updatedValues = [...buttonValues]
          console.log(updatedValues)
          updatedValues.splice(index,1)
          setButtonValues(updatedValues)
    }
    //add button, push new string to buttonValues array
    const handleAddButton = () => {
        const updatedValues = [...buttonValues]
        updatedValues.push(`I'm interested!`)
        setButtonValues(updatedValues)
    }
    const handleChange = (index:number, event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        //splice out the index, and update it, then update state
        let updatedValues = [...buttonValues]
        updatedValues.splice(index,1);
        updatedValues.splice(index,0,event.target.value)
        setButtonValues(updatedValues)
    }
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
                /*allow container to collapse as buttons become deleted */
                maxHeight:325,
                minHeight:60,
                width:360,
                border: "1px solid rgba(0, 0, 0, 0.12)",
                borderRadius:"10px",
                //when !checked, collapse the container, and make it smaller
                ...(!checked &&{
                  height:60
                })
              }}>
                  {/*Buttons title + icons + switch container*/}
                  <Box
                                  sx={{
                                      display:'flex',
                                      flexDirection:'row',
                                      alignItems:'center',
                                      p:0,
                                      width:312,
                                      height:28,
                                      gap:8,
                                      /*between header and buttons*/
                                      mb:16
                                  }}>
                                    {/*Buttons + Buttons icons container */}
                                      <Box
                                        sx={{
                                          display:'flex',
                                          flexDirection:'row',
                                          alignItems:'center',
                                          p:0,
                                          gap:8,
                                          width:274,
                                          height:28
                                        }}
                                        >
                                          <RectangleIcon
                                              sx={{
                                                  width:24,
                                                  height:24,
                                                  color:'rgba(0, 0, 0, 0.54)'
                                              }}
                                          />
                                          {/*Buttons title + importanticon container*/}
                                          <Box
                                            sx={{
                                                display:'flex',
                                                alignItems:'center',
                                                p:0,
                                                width:73,
                                                height:19,
                                            }}>
                                                <Typography variant="h6" color="primary.main">Buttons</Typography>
                                                <ImportantIcon
                                                  sx={{
                                                      width:14,
                                                      height:14,
                                                      color:'rgba(0, 0, 0, 0.38)'
                                                  }}
                                                />
                                          </Box>
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
                                            width:38,
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
                                    {/*additional buttons Container*/}
                                    <Box
                                      sx={{
                                          display:'flex',
                                          flexDirection:'column',
                                            //when !checked, hide display
                                          ...(!checked &&{
                                            display:'none'
                                          })
                                      }}>
                                          {/*array of button values
                                            map array and display button number based on index of value, initialize at 1
                                            to delete, remove that value (pass the button value -1 to get index, and splice out) in the array, and then re-map. 
                                            array size can't be bigger than 3, max 3 buttons
                                    */}
                                           {buttonValues.length ?
                                           buttonValues.map((buttonValue:string,index:number)=> (
                                                /*button container */
                                                <Box 
                                                /*must use a key that will generate the same each time, unless the array has been udpated*/
                                                  key={JSON.stringify(buttonValue)}
                                                  sx={{
                                                    display:'flex',
                                                    flexDirection:'column',
                                                    width:312,
                                                    height:73,
                                                    mb:16
                                                  }}
                                                  >
                                                    {/*button header container with idx number+1 and delete icon*/}
                                                    <Box
                                                      sx={{
                                                          display:'flex',
                                                          width:312,
                                                          height:20,
                                                          mb:8,
                                                          justifyContent:'space-between'
                                                      }}>
                                                            {/*Button Header */}
                                                            <Typography
                                                                sx={{
                                                                    fontWeight:500,
                                                                    fontSize:14,
                                                                    height:22,
                                                                    width:232,
                                                                    textAlign:'left'
                                                                }}>
                                                              Button {index+1}
                                                            </Typography>
                                                            {/*click on delete icon, update buttonValues array, splice at index*/}
                                                            <DeleteIcon onClick={()=>handleDelete(index)}
                                                              sx={{
                                                                  width:24,
                                                                  height:24,
                                                                  color:'rgba(0, 0, 0, 0.54)',
                                                                  '&:hover':{
                                                                    color:'rgba(0, 0, 0, 0.74)'
                                                                }
                                                              }}
                                                            />
                                                    </Box>
                                                    <Box
                                                      sx={{
                                                        display:'flex',
                                                        alignItems:'center',
                                                        pr:5
                                                      }}
                                                    >
                                                    {/*input field with char count*/}
                                                    <TextField id="outlined-basic" variant="outlined" size="small"  
                                                    defaultValue={buttonValue} onChange={(e)=>handleChange(index,e)}
                                                          inputProps={{
                                                             /*max chars */
                                                             maxLength:25
                                                          }}
                                                          InputProps={{
                                                            style:{
                                                              width:312,
                                                              height:36.5,
                                                              borderRadius:'10px',
                                                              fontWeight:400,
                                                              fontSize:14,
                                                              fontFamily:theme.typography.fontFamily,
                                                              borderColor:'rgba(0, 0, 0, 0.12)',
                                                            }
                                                        }}
                                                    />
                                                    {/*char count */}
                                                    <Typography
                                                      sx={{
                                                          fontWeight:400,
                                                          fontSize:14,
                                                          color:'rgba(0, 0, 0, 0.54)',
                                                          width:'auto'
                                                      }}
                                                    >{`${buttonValue.length}/25`}
                                                    </Typography>
                                                </Box>
                                                </Box>
                                            
                                            
                                                    ))
                                           :
                                           null
                                            }

                                    </Box>
                                    {/*"add button" button if there's less than three buttonValues */}
                                    {buttonValues.length <3 ?
                                    <Typography onClick={handleAddButton}
                                      sx={{
                                          color:theme.palette.secondary.main,
                                          fontSize:14,
                                          fontWeight:500,
                                          letterSpacing:0.4,
                                          width:312,
                                          textAlign:'left',
                                          ...(!checked &&{
                                            display:'none'
                                      })
                                      }}
                                    >ADD BUTTON</Typography>
                                    :
                                    null
                                    }
              </Container>
  
      </>
    );
  }
  
  export default MessageButtons;
  