import {
  Box,
  Typography,
  Container,
  Switch,
  FormControl,
  /* InputLabel, */ Select,
  MenuItem,
  Button,
  ThemeProvider,
  Link,
} from '@mui/material';
import LeftHeaderSvg from '../ui/LeftHeaderSvg';
import RightHeaderSvg from '../ui/RightHeaderSvg';
import { useState, useEffect } from 'react';
import theme from '../../../../../styles/style';
import HighlightIcon from '@mui/icons-material/Highlight';
import CloseIcon from '@mui/icons-material/Close';
//redux
import { setHeader } from '../../../../../store/template-builder.slice';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../hooks/redux-hooks';
function MessageHeader() {
  {
    /*Redux */
  }
  const dispatch = useAppDispatch();
  const imageFileRedux = useAppSelector(
    (state) => state.templateBuilder.specific_template.header,
  );

  //checked for open header
  const [headerOpen, setHeaderOpen] = useState<boolean>(true);
  {
    /*Manage file changes */
  }
  //media type for header, default Image
  const [mediaType, setMediaType] = useState<string>('');
  //save file uploaded by user to state
  const [newFile, setNewFile] = useState<string>(imageFileRedux);
  //update file in state
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileUrl = URL.createObjectURL(file);
    setNewFile(fileUrl);
  };

  {
    /*Dispatches to Redux */
  }
  //dispatch file to redux
  //dispatch changes to redux upon change
  useEffect(() => {
    if (newFile) {
      dispatch(setHeader(newFile));
    }
  }, [newFile, dispatch]);

  return (
    /*Content and header Container */
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        p: 0,
        height: 408,
        width: 360,
        gap: 16,
        //when !checked, height auto to size of content, avoid gap
        ...(!headerOpen && {
          height: 'auto',
        }),
      }}
    >
      {/*Content Header */}
      <Typography
        variant="h6"
        display="flex"
        alignItems="center"
        width={220}
        height={19}
        color="primary.main"
      >
        Content
      </Typography>
      {/* Header Content outer Container, with light grey border */}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          pt: 16,
          pb: 16,
          pr: 24,
          pl: 24,
          height: 373,
          width: 360,
          border: '1px solid rgba(0, 0, 0, 0.12)',
          borderRadius: '10px',
          gap: 24,
          //when !checked, collapse the container, and make it smaller
          ...(!headerOpen && {
            height: 60,
          }),
          /*grow height on load */
          '@keyframes growHeight': {
            '0%': {
              height: 60,
              overflow: 'hidden',
            },
            '99.9%': {
              overflow: 'hidden',
            },
            '100%': {
              height: 373,
              overflow: 'visible',
            },
          },
          animation: 'growHeight 3s ease',
        }}
      >
        {/* Header Content inner Container*/}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            p: 0,
            width: 312,
            height: 341,
            gap: 12,
            /* pt:16,
                           pb:16, */
            pl: 24,
            pr: 24,
          }}
        >
          {/*Header title + icons + switch container*/}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              p: 0,
              width: 312,
              height: 28,
              gap: 8,
            }}
          >
            {/*Header + Header icons container */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                p: 0,
                gap: 8,
                width: 274,
                height: 28,
              }}
            >
              <LeftHeaderSvg />
              {/*Header title + RightHeaderSvg container*/}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  p: 0,
                  width: 69,
                  height: 19,
                  gap: 4,
                }}
              >
                <Typography
                  variant="h6"
                  width={53}
                  height={19}
                  color="primary.main"
                >
                  Header
                </Typography>
                <RightHeaderSvg />
              </Box>
            </Box>

            {/*switch container */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 0,
                gap: 1,
                width: 38,
                height: 20,
              }}
            >
              <Switch
                checked={headerOpen}
                onChange={() => setHeaderOpen(!headerOpen)}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{
                  //disabled circle white
                  '&.MuiSwitch-root .MuiSwitch-switchBase': {
                    color: '#FAFAF',
                  },
                  //enabled circle dark blue
                  '&.MuiSwitch-root .Mui-checked': {
                    color: '#007DFF',
                  },
                  //enabled track light blue
                  '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
                    bgcolor: '#9ECEFF',
                    boxShadow:
                      '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
                  },
                }}
              />
            </Box>
          </Box>
          {/*only show media type container if checked==true*/}

          {/*Media Type Container*/}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 0,
              gap: 16,
              width: 264,
              height: 301,
              //if !checked, hide elements
              ...(!headerOpen && {
                display: 'none',
              }),
            }}
          >
            {/*Select Media Type + upload Container*/}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                pt: 8,
                pb: 0,
                pr: 0,
                pl: 0,
                gap: 10,
                height: 122,
                width: 264,
              }}
            >
              {/*Drop Down Container */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  p: 0,
                  gap: 12,
                  width: 264,
                  height: 45,
                }}
              >
                {/*drop down select media type*/}
                <FormControl
                  size="small"
                  sx={{
                    m: 1,
                    minWidth: 264,
                    height: 45,
                    radius: 10,
                    p: 0,
                    gap: 10,
                    textAlign: 'left',
                  }}
                >
                  <Select
                    value={mediaType}
                    onChange={(e) => setMediaType(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">Image</MenuItem>
                    {/*other options would go here: Text,Document,Video*/}
                  </Select>
                </FormControl>
              </Box>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 12,
                  letterSpacing: 0.15,
                  height: 17,
                  opacity: '54%',
                }}
              >
                Image size recommendation: 800 X 418 pixel
              </Typography>
              <ThemeProvider theme={theme}>
                {/*On change set the file to state*/}
                <Button
                  variant="outlined"
                  color="secondary"
                  component="label"
                  size="medium"
                >
                  Upload Image
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={(e) => handleChangeFile(e)}
                  />
                </Button>
              </ThemeProvider>
            </Box>
            {/*Tips Container outer*/}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                p: 0,
                gap: 10,
                borderRadius: '8px',
                bgcolor: '#F5F5F5',
                width: 264,
                height: 163,
              }}
            >
              {/*Tips Container inner*/}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  p: 16,
                  gap: 4,
                  width: 232,
                  height: 121,
                }}
              >
                {/*tips header*/}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <HighlightIcon />
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 14,
                      letterSpacing: 0.15,
                      width: 160,
                      height: 21,
                      textAlign: 'left',
                    }}
                  >
                    Image header tips
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
                  Images can enrich the message experience and help maintain
                  engagement. Use eye-catching images that summarize the message
                  (eg discounts, gifts etc.)
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
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default MessageHeader;
