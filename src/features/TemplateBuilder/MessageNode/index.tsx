import { Box, Typography, Button } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import theme from '../../../styles/style';
import VectorSvg from './components/VectorSvg';
import background from '../../../assets/images/background.jpg';
import uniqid from 'uniqid';
//redux
import { useAppSelector } from '../../../hooks/redux-hooks';
function MessageNode() {
  {
    /*Redux */
  }
  const updatedMessageNode = useAppSelector((state) => state.templateBuilder);
  {
    /*Styles */
  }
  const typographyStyles = {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0.4,
    color: '#41C352',
  };
  const labelStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 20,
    borderRadius: '4px',
    pt: 4,
    pb: 4,
    pl: 12,
    pr: 12,
    bgcolor: '#FFFFFF',
  };
  const animationFadeIn = {
    /*left to right on load */
    '@keyframes fadeIn': {
      '0%': {
        opacity: '0',
      },
      '100%': {
        opacity: '100',
      },
    },
    animation: 'fadeIn 2s ease',
  };
  return (
    /*Message Node Container */
    <Box
      data-testid="messageNode"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        gap: 14,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 304,
          height: 395,
          gap: 14,
          borderRadius: '10px',
          flexDirection: 'column',
          alignItems: 'center',
          p: 12,
          backgroundColor: 'white',
          ...animationFadeIn,
        }}
      >
        {/*Message Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 280,
            height: 32,
            gap: 8,
          }}
        >
          {/*Message icon with outer circle */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 32,
              width: 32,
              border: '1px solid #7986CB',
              borderRadius: '50%',
              bgcolor: '#7986CB',
            }}
          >
            <MessageIcon
              sx={{
                color: '#FFFFFF',
              }}
            />
          </Box>
          {/*Message Header Text */}
          <Box
            sx={{
              width: 240,
              height: 19,
              textAlign: 'left',
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: 0.15,
              color: theme.palette.primary.main,
            }}
            /*Display Campaign Name */
          >
            {updatedMessageNode.specific_template.campaign}
          </Box>
        </Box>
        {/*Message Display Container*/}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: 20,
            pb: 20,
            pl: 10,
            pr: 10,
            bgcolor: '#F5F5F5',
            height: 351.8,
            width: 280,
            borderRadius: '8px',
          }}
        >
          {/*Message Container */}
          <Box
            sx={{
              height: 274.24,
              width: 240,
              display: 'flex',
              filter:
                'drop-shadow(0px 0.890171px 0.890171px rgba(0, 0, 0, 0.2))',
            }}
          >
            {/*div to give message 'look' */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                width: 7.12,
                height: 13.35,
                mr: -1,
                mt: -0.5,
              }}
            >
              <VectorSvg />
            </Box>
            {/*Rest of Message + buttons container */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: 311.8,
                width: 240,
                gap: 7.56,
                /*scroll overflow like you would on whatsapps */
                overflowY: 'scroll',
              }}
            >
              {/* Message container: Header, Body message, Footer*/}
              <Box
                sx={{
                  width: 218.56,
                  height: 260,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 7.12,
                  bgcolor: '#FFFFFF',
                  borderRadius: '5.34',
                  gap: 8,
                  overflowY: 'scroll',
                }}
              >
                {/*Header Container */}
                <Box
                  sx={{
                    minHeight: 110,
                    width: 220,
                    position: 'relative',
                    backgroundImage: `url(${updatedMessageNode.specific_template.header})`,
                    backgroundSize: 'cover',
                  }}
                >
                  {/*Labe*/}
                  <Box
                    sx={{
                      ...labelStyles,
                      width: 41,
                      left: 8.5,
                      top: 6.88,
                      position: 'absolute',
                    }}
                  >
                    <Typography sx={typographyStyles}>Header</Typography>
                  </Box>
                </Box>
                {/*Body Message Container */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 218.64,
                    height: 'auto',
                    borderTop: '1px dashed #25D366',
                    borderBottom: '1px dashed #25D366',
                    pt: 8,
                    pb: 8,
                  }}
                >
                  {/*label */}
                  <Box
                    sx={{
                      ...labelStyles,
                      width: 84,
                      bgcolor: '#F5F5F5',
                    }}
                  >
                    <Typography sx={typographyStyles}>Body message</Typography>
                  </Box>
                  {/*Body Message Data */}
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 14,
                      color: '000000',
                      fontFamily: 'SF Pro',
                      letterSpacing: -0.36,
                      textAlign: 'left',
                    }}
                  >
                    {updatedMessageNode.specific_template.bodyMessage}
                  </Typography>
                </Box>
                {/*Footer Container */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 218.64,
                    minHeight: 57,
                  }}
                >
                  {/*label */}
                  <Box
                    sx={{
                      ...labelStyles,
                      width: 61,
                      bgcolor: '#F5F5F5',
                    }}
                  >
                    <Typography sx={typographyStyles}>Footer</Typography>
                  </Box>
                  {/*Footer Data */}
                  <Typography
                    sx={{
                      textAlign: 'left',
                      fontFamily: 'SF Pro',
                      fontWeight: 400,
                      fontSize: 14,
                      letterSpacing: -0.36,
                      color: 'rgba(0, 0, 0, 0.54)',
                    }}
                  >
                    {updatedMessageNode.specific_template.footer}
                  </Typography>
                </Box>
              </Box>
              {/*Buttons container*/}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 232.88,
                  gap: 5,
                }}
              >
                {/*we will map out button values array */}
                {updatedMessageNode.specific_template.buttons.map((value) => (
                  <Button
                    key={uniqid()}
                    sx={{
                      width: 232.88,
                      height: 30.68,
                      color: theme.palette.secondary.main,
                      fontFamily: 'SF Pro',
                      fontWeight: 400,
                      fontSize: 14,
                      letterSpacing: 0.36,
                      bgcolor: '#FFFFFF',
                      /*make text lowercase */
                      textTransform: 'none',
                    }}
                  >
                    {value}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default MessageNode;
