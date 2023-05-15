import { Box, Container, Typography, Button, ThemeProvider } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import theme from '../../../styles/style';
import VectorSvg from './components/VectorSvg';
function MessageNode() {
  const bodyData = 'We have an exciting offer. Are you interested in hearing more?';
  const footerData = `Reply 'STOP' to opt out`;
  const buttonData=['Talk to a styling expert']
  const typographyStyles={
    fontSize:12,
    fontWeight:400,
    letterSpacing:0.4,
    color:'#41C352'
  }
  const labelStyles={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    height:20,
    borderRadius:'4px',
    pt:4,
    pb:4,
    pl:12,
    pr:12,
    bgcolor:'#FFFFFF',
  }
  return (
    /*Message Node Container */
    <Container
        sx={{
            display:'flex',
            flexDirection:'column',
            alignContent:'center',
            width:304,
            height:421.8,
            bgcolor:'#FFFFFF',
            gap:14
        }}
    >
      {/*Message Header */}
      <Box
        sx={{
            display:'flex',
            alignItems:'center',
            width:280,
            height:32,
            gap:8
        }}>
            {/*Message icon with outer circle */}
            <Box
              sx={{
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  height:32,
                  width:32,
                  border:'1px solid #7986CB',
                  borderRadius:'50%',
                  bgcolor:'#7986CB'
              }}>
                <MessageIcon
                sx={{
                    color:'#FFFFFF'
                }} 
                /> 
            </Box>
            {/*Message Header Text */}
            <Box
              sx={{
                  width:240,
                  height:19,
                  textAlign:'left',
                  fontSize:16,
                  fontWeight:500,
                  letterSpacing:0.15,
                  color:theme.palette.primary.main
              }}
            >Message Example</Box>
      </Box>
      {/*Message Display Container*/}
      <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          pt:20,
          pb:20,
          pl:23.74,
          pr:23.74,
          bgcolor:'#F5F5F5',
          height:351.8,
          width:280,
          borderRadius:'8px',
        }}>
              {/*Message Container */}
              <Box
                sx={{
                    height:274.24,
                    width:240,
                    display:'flex',
                    filter:'drop-shadow(0px 0.890171px 0.890171px rgba(0, 0, 0, 0.2))',  
                }}>

                  {/*div to give message 'look' */}
                  <Box
                    sx={{
                      display:'flex',
                      alignItems:'flex-start',
                      width:7.12,
                      height:13.35,
                      mr:-1,
                      mt:-.5
                    }}>
                  <VectorSvg/>
                  </Box>
                  {/*Rest of Message + buttons container */}
                  <Box
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        height:311.8,
                        width:240,
                        gap:7.56
                    }}>
                  {/* Message container: Header, Body message, Footer*/}
                  <Box
                    sx={{
                        width:218.56,
                        height:260,
                        display:'flex',
                        flexDirection:'column',
                        p:7.12,
                        bgcolor:'#FFFFFF',
                        borderRadius:'5.34',
                        gap:8
                    }}>
                       {/*Header Container */}
                       <Box
                        sx={{
                            height:110,
                            width:220,
                            bgcolor:'blue',
                            position:'relative'
                        }}>
                            {/*Labe*/}
                            <Box
                              sx={{
                                  ...labelStyles,
                                  width:41,
                                  left:8.5,
                                  top:6.88,
                                  position:'absolute',
                              }}>
                                <Typography
                                  sx={typographyStyles}>
                                  Header
                                </Typography>
                            </Box>
                      </Box>
                      {/*Body Message Container */}
                      <Box
                        sx={{
                          display:'flex',
                          flexDirection:'column',
                          width:218.64,
                          minHeight:51,
                          borderTop:'1px dashed #25D366',
                          borderBottom:'1px dashed #25D366',
                          pt:8,
                          pb:8
                        }}>
                            {/*label */}
                            <Box
                              sx={{
                                  ...labelStyles,
                                  width:84,
                                  bgcolor:'#F5F5F5'
                              }}>
                                  <Typography
                                    sx={typographyStyles}>
                                      Body message
                                  </Typography>
                            </Box>
                            {/*Body Message Data */}
                            <Typography
                                sx={{
                                    fontWeight:400,
                                    fontSize:14,
                                    color:'000000',
                                    fontFamily:'SF Pro',
                                    letterSpacing:-.36,
                                    textAlign:'left',
                                  
                                }}>
                              {bodyData}
                            </Typography>
                      </Box>
                      {/*Footer Container */}
                      <Box
                        sx={{
                            display:'flex',
                            flexDirection:'column',
                            width:218.64,
                            minHeight:57
                        }}>
                            {/*label */}
                            <Box
                              sx={{
                                  ...labelStyles,
                                  width:61,
                                  bgcolor:'#F5F5F5'
                              }}>
                                  <Typography
                                    sx={typographyStyles}>
                                      Footer
                                  </Typography>
                            </Box>
                            {/*Footer Data */}
                            <Typography
                              sx={{
                                  textAlign:'left',
                                  fontFamily:'SF Pro',
                                  fontWeight:400,
                                  fontSize:14,
                                  letterSpacing:-.36,
                                  color:'rgba(0, 0, 0, 0.54)'
                              }}>
                              {footerData}
                            </Typography>
                      </Box>
                  </Box>
                  {/*Buttons container*/}
                  <Box 
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        width:232.88
                    }}
                  >
                  {/*we will map out button values array */}
                  {buttonData.map((value)=> (
                        <Button id={JSON.stringify(value)}
                        sx={{
                            width:232.88,
                            height:30.68,
                            color:theme.palette.secondary.main,
                            fontFamily:'SF Pro',
                            fontWeight:400,
                            fontSize:14,
                            letterSpacing:0.36,
                            bgcolor:'#FFFFFF',
                            /*make text lowercase */
                            textTransform:'none'
                        }}
                        >
                          {value}
                        </Button>
                  ))}
                </Box>
              </Box> 
              </Box>
                  
      </Box>
    </Container>
  );
}

export default MessageNode;
