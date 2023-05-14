import { Box, Container, Typography, TextField, Link } from '@mui/material';
import React, { useState } from 'react'
import theme from '../../../../styles/style'
import SmileyIcon from '@mui/icons-material/EmojiEmotions';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import EmojiPicker from 'emoji-picker-react';
interface Props{
    defaultText:string,
    maxChar:number,

}
function TextEditor ({defaultText, maxChar}:Props) {
    //Icon styles are all the same
    const iconStyles= {
        width:20,
        height:20,
        color:'rgba(0, 0, 0, 0.54)',
        '&:hover':{
          color:'rgba(0, 0, 0, 0.7)'
        }
     };
       //store bodyMessage input
      const [bodyMessage, setBodyMessage] = useState<string>(defaultText);
      //bodyStyles object that will keep track of which editig toolkit icons have been selected
      interface BodyStyles{
        fontWeight:string,
        fontStyle:string,
      }
     const [bodyStyles,setBodyStyles]= useState<BodyStyles>({fontWeight:'normal', fontStyle:"normal"});
     //track if emoji picker is open, default is closed
     const[emojiPicker,setEmojiPicker]=useState<boolean>(false)
     //get emoji that was clicked
     interface EmojiObject{
      emoji:any
     }
     const handleEmojiClick = (emojiObject:EmojiObject)=> {
          const emoji = emojiObject.emoji;
          //add emoji to body message
          const newMessage = bodyMessage + emoji;
          setBodyMessage(newMessage);
     }
      //toggle bold fontweight in the textfield
      const handleChangeBold = ()=> {
        //toggle font weight
        const newBodyStyles:BodyStyles = {
              ...bodyStyles,
              fontWeight: bodyStyles.fontWeight==='normal'? '700' : "normal"
        };
        setBodyStyles(newBodyStyles);
      }
      //toggle italic fontstyle in the texfield
      const handleChangeItalic = ()=>{
        const newBodyStyle:BodyStyles={
              ...bodyStyles,
              fontStyle:bodyStyles.fontStyle=== 'normal' ? 'italic' : 'normal'
        };
        setBodyStyles(newBodyStyle);
      }
      //reset italic and font styles to normal/initial values
      const handleResetStyles=()=> {
        const newBodyStyles:BodyStyles={
              fontWeight:'normal',
              fontStyle:'normal'
        }
        setBodyStyles(newBodyStyles)
      }
    return(
        <>
        {/*Container */}
            <Box
                sx={{
                   display:'flex',
                   flexDirection:'column',
                   width:312,
                   height:340,
                }}>
             {/*Textarea */}
             <TextField
                        multiline
                         placeholder='What would you to tell your customers?'
                         defaultValue={defaultText}
                         value={bodyMessage}
                         rows={10}
                         onChange={(e)=> setBodyMessage(e.target.value)}
                         //we'll change the style depending on the toolkit icons that have been selected
                         //The enitre bodyStyles object will be updated each time
                         InputProps={{
                            style:bodyStyles
                         }}
                      /> 
                      <Typography
                        sx={{
                          position: 'absolute',
                          top: 285,
                          left: 260,
                          fontSzie:14,
                          fontWeight:400,
                          letterSpacing:0.15,
                          color:'rgba(0, 0, 0, 0.54)'
                        }}
                      >{`${bodyMessage.length}/${maxChar}`}</Typography>
                      {/*Text Toolbar Container */}
                      <Box
                          sx={{
                              display:'flex',
                              flexDirection:'row',
                              justifyContent:'space-between',
                              alignItems:'center',
                              p:0,
                              gap:12,
                              width:312,
                              height:24,
                              mt:16,
                              mb:24
                          }}
                      >
                             <Typography
                                 sx={{
                                     fontSize:14,
                                     fontWeight:500,
                                     letterSpacing:0.4,
                                     color:theme.palette.secondary.main
                                 }}>
                               ADD VARIABLE
                             </Typography>
                             {/*container for editing icons */}
                             <Box
                                sx={{
                                  display:'flex',
                                  alignItems:'center',
                                  width:132,
                                  height:20,
                                  gap:8,
                                }}>
                                    
                                     <SmileyIcon onClick={()=>setEmojiPicker(!emojiPicker)}
                                     sx={iconStyles}
                                     />
                                     {/*Emoji picker container, for styling purposes */}
                                     <Box
                                        sx={{
                                            zIndex:2,
                                            height:350,
                                            width:360,
                                            position:'absolute',
                                            top:'370px',
                                            left:'0px',
                                            ...(!emojiPicker &&{
                                              display:'none'
                                            })

                                        }}
                                     >
                                            {/*emoji picker, will be hidden by default*/}
                                             <EmojiPicker 
                                             width='360px'
                                             height='350px'
                                             onEmojiClick={handleEmojiClick}
                                              />
                                     </Box>
                                     
                                     <FormatBoldIcon onClick={handleChangeBold}
                                        sx={iconStyles}
                                     />
                                     <FormatClearIcon onClick={handleResetStyles}
                                        sx={iconStyles}
                                     />
                                     <FormatItalicIcon onClick={handleChangeItalic}
                                        sx={iconStyles}
                                     />
                                     <UnfoldMoreIcon
                                        sx={
                                         { ...iconStyles,
                                          transform:'rotate(90deg)'
                                         }
                                      }
                                     />
                             </Box>
                      </Box>
                </Box>
        </>
    )
    
}
export default TextEditor;