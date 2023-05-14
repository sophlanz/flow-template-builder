import { Box, Container, Typography, TextField, Link } from '@mui/material';
import React, { useState } from 'react'
import theme from '../../../../styles/style'
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImportantIcon from '@mui/icons-material/Error';
import SmileyIcon from '@mui/icons-material/EmojiEmotions';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import HighlightIcon from '@mui/icons-material/Highlight';
import CloseIcon from '@mui/icons-material/Close';
import EmojiPicker from 'emoji-picker-react';
function MessageBody() {
  //save textfield default value
  const defaultText=`👋 Hi {{1}}, we just kicked off our summer sale! ☀️☀️ Wanna hear more? `
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
              height:525,
              bgcolor:theme.palette.primary.light,
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderRadius:'10px',  
              //relative so we can make the char count pos:absolute
              position:'relative',
              /*gap between sidebar sections */
              mt:24
          }}
        >
              {/* Body Message (header + textarea) Container */}
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
                            {/*Body message Header*/}
                             <Box
                                sx={{
                                    display:'flex',
                                    flexDirection:'row',
                                    alignItems:'center',
                                    p:0,
                                    width:155,
                                    height:26
                                }}>
                                      <TextFieldsIcon 
                                        sx={{
                                            height:24,
                                            width:24,
                                            color:"rgba(0, 0, 0, 0.54)"
                                        }}
                                      />
                                      <Typography
                                       sx={{
                                            fontWeight:500,
                                            fontSize:16,
                                            letterSpacing:0.15,
                                            color:theme.palette.primary.main,
                                            height:26,
                                            /*adjusted width to account for 8px margin */
                                            width:115,
                                            ml:8
                                       }}
                                       > Body Message
                                       </Typography>
                                      <ImportantIcon
                                      sx={{ 
                                          width:14,
                                          height:14,
                                          color:'rgba(0, 0, 0, 0.38)',
                                      }}
                                      />
                            </Box>
                                      {/*Required Notice */}
                                      <Box
                                        sx={{
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center',
                                            fontWeight:700,
                                            fontSize:12,
                                            letterSpacing:.4,
                                            color:theme.palette.primary.main,
                                            bgcolor:'#F5F5F5',
                                            pt:4,
                                            pb:4,
                                            pr:8,
                                            pl:8,
                                            width:74.04,
                                            /*changed height by 8 to account for top/bottom padding */
                                            height:20,
                                            borderRadius:'10px'
                                        }}>
                                            <Typography
                                              sx={{
                                                fontSize:12,
                                                fontWeight:700,
                                                letterSpacing:0.4

                                              }}
                                            >
                                              REQUIRED
                                            </Typography>
                                      </Box>  
                     </Box>
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
                         inputProps={{
                          maxLength:1024
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
                      >{`${bodyMessage.length}/1024`}</Typography>
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
                    
                      {/*what are variables? container */}
                      <Box                  
                         sx={{
                             display:'flex',
                             flexDirection:'column',
                             alignItems:'flex-start',
                             p:16,
                             gap:4,
                             /*adjusted width and height for 16px padding  */
                             width:280,
                             height:97,
                             borderRadius:'8px',
                             bgcolor:'#F5F5F5',
                         }}
                       >
                              {/*variables header*/}
                               <Box
                                 sx={{
                                     display:'flex',
                                     flexDirection:'row',
                                     alignItems:'center',
                                     gap:8,
                                     width:280
                                 }}>
                                       <HighlightIcon/>
                                       <Typography 
                                         sx={{
                                             fontWeight:400,
                                             fontSize:14,
                                             letterSpacing:0.15,
                                             width:235.84,
                                             height:21,
                                             textAlign:'left',
     
                                         }}>
                                           What are Variables?
                                         </Typography>
                                         <CloseIcon
                                            sx={{
                                              color:'rgba(0, 0, 0, 0.54)',
                                              '&:hover':{
                                                color:'rgba(0, 0, 0, 0.8)',
                                              }
                                            }}
                                         />
                               </Box>
                               <Typography
                                 sx={{
                                   fontWeight:400,
                                   fontSize:12,
                                   letterSpacing:0.15,
                                   textAlign:'left',
                                   bgcolor:'#F5F5F5',
                                   opacity:"54%"
                                 }}
                               >
                                 Variables are dynamic content that help personalize your campaign,
                                for example: customer names or coupon codes.
                               </Typography>
                               <Link href="#" underline="none"
                                 sx={{
                                     fontWeight:400,
                                     fontSize:12,
                                     letterSpacing:0.15,
                                     color:'#1085FF',
                                 }}
                               >Learn More</Link>
                       </Box>
              </Box>
        </Container>
      </>
    );
  }
  
  export default MessageBody;
  