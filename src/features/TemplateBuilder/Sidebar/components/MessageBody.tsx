import { Box, Container, Typography, Link } from '@mui/material';
import theme from '../../../../styles/style';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImportantIcon from '@mui/icons-material/Error';
import HighlightIcon from '@mui/icons-material/Highlight';
import CloseIcon from '@mui/icons-material/Close';
import TextEditor from './TextEditor';
import { useState, useEffect } from 'react';
//redux
import { setBodyMessage } from '../../../../store/template-builder.slice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
function MessageBody() {
  {
    /*Redux */
  }
  const dispatch = useAppDispatch();
  const bodyMessageRedux = useAppSelector(
    (state) => state.templateBuilder.specific_template.bodyMessage,
  );
  {
    /*Manage MessageBody Changes  */
  }
  //store body message data in state, when state updates, dispatch changes to store
  const [newBodyMessage, setNewBodyMessage] =
    useState<string>(bodyMessageRedux);
  {
    /*Redux Dispatches */
  }
  //dispatch updated body message
  const handleDispatch = () => {
    dispatch(setBodyMessage(newBodyMessage));
  };
  //call dispatch when newBodyMessage updates
  useEffect(() => {
    if (newBodyMessage.length > 0) handleDispatch();
  }, [newBodyMessage]);
  return (
    <>
      {/* Body Message (header + textarea) Container */}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 16,
          pb: 16,
          pr: 24,
          pl: 24,
          width: 360,
          maxHeight: 525,
          bgcolor: theme.palette.primary.light,
          border: '1px solid rgba(0, 0, 0, 0.12)',
          borderRadius: '10px',
          //relative so we can make the char count pos:absolute
          position: 'relative',
          /*grow height on load */
          '@keyframes growHeight': {
            '0%': {
              maxHeight: 60,
              overflow: 'hidden',
            },
            '99.9%': {
              overflow: 'hidden',
            },
            '100%': {
              maxHeight: 525,
              overflow: 'visible',
            },
          },
          animation: 'growHeight 3s ease',
        }}
      >
        {/*Header Container*/}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            p: 0,
            gap: 8,
            width: 312,
            height: 28,
            /* spacing with textarea*/
            mb: 12,
          }}
        >
          {/*Body message Header*/}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              p: 0,
              width: 155,
              height: 26,
            }}
          >
            <TextFieldsIcon
              sx={{
                height: 24,
                width: 24,
                color: 'rgba(0, 0, 0, 0.54)',
              }}
            />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 16,
                letterSpacing: 0.15,
                color: theme.palette.primary.main,
                height: 26,
                /*adjusted width to account for 8px margin */
                width: 115,
                ml: 8,
              }}
            >
              {' '}
              Body Message
            </Typography>
            <ImportantIcon
              sx={{
                width: 14,
                height: 14,
                color: 'rgba(0, 0, 0, 0.38)',
              }}
            />
          </Box>
          {/*Required Notice */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 0.4,
              color: theme.palette.primary.main,
              bgcolor: '#F5F5F5',
              pt: 4,
              pb: 4,
              pr: 8,
              pl: 8,
              width: 74.04,
              /*changed height by 8 to account for top/bottom padding */
              height: 20,
              borderRadius: '10px',
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.4,
              }}
            >
              REQUIRED
            </Typography>
          </Box>
        </Box>
        {/*Textarea */}
        <TextEditor
          defaultText={bodyMessageRedux}
          maxChar={1024}
          inputData={setNewBodyMessage}
        />
        {/*what are variables? container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            p: 16,
            gap: 4,
            /*adjusted width and height for 16px padding  */
            width: 280,
            height: 97,
            borderRadius: '8px',
            bgcolor: '#F5F5F5',
            /*space between toolbar and variables container */
            mt: 24,
          }}
        >
          {/*variables header*/}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              width: 280,
            }}
          >
            <HighlightIcon />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 14,
                letterSpacing: 0.15,
                width: 235.84,
                height: 21,
                textAlign: 'left',
              }}
            >
              What are Variables?
            </Typography>
            <CloseIcon
              sx={{
                color: 'rgba(0, 0, 0, 0.54)',
                '&:hover': {
                  color: 'rgba(0, 0, 0, 0.8)',
                },
              }}
            />
          </Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 12,
              letterSpacing: 0.15,
              textAlign: 'left',
              bgcolor: '#F5F5F5',
              opacity: '54%',
            }}
          >
            Variables are dynamic content that help personalize your campaign,
            for example: customer names or coupon codes.
          </Typography>
          <Link
            href="#"
            underline="none"
            sx={{
              fontWeight: 400,
              fontSize: 12,
              letterSpacing: 0.15,
              color: '#1085FF',
            }}
          >
            Learn More
          </Link>
        </Box>
      </Container>
    </>
  );
}

export default MessageBody;
