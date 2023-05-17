import MessageTemplate from './components/MessageTemplate';
import {
  Box,
  Typography,
  alpha,
  Button,
  ThemeProvider,
  TextField,
  FormControl,
} from '@mui/material';
import SidebarCloseSvg from './components/ui/SidebarCloseSvg';
import theme from '../../../styles/style';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import MessageIcon from '@mui/icons-material/Message';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
//redux
import { TemplateBuilderModel } from '../../../models/redux-models';
import {
  setCampaign,
  setId,
  pushToTemplatesArray,
  setSpecificTemplate,
  updateTemplatesArray,
  deleteFromTemplatesArray,
} from '../../../store/template-builder.slice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { Theme } from 'emoji-picker-react';
function Sidebar() {
  {
    /*Redux */
  }
  const dispatch = useAppDispatch();
  //get specific template from redux store
  const specificTemplate = useAppSelector(
    (state) => state.templateBuilder.specific_template,
  );
  //Templates array
  const savedTemplates = useAppSelector(
    (state) => state.templateBuilder.all_templates,
  );
  {
    /*Manage State Changes */
  }
  //store campaign name user creates
  const [campaignName, setCampaignName] = useState<string>();
  //Default mode or edit mode?
  const [editingMode, setEditingMode] = useState<boolean>(false);
  //Updating old template or Creating new Template?
  const [updatingTemplate, setUpdatingTemplate] = useState<boolean>();
  {
    /*Pre-Editing
     */
  }
  //send id to redux only once build is initiated, and show editing sidebar. Templates will later render on screen
  const handleStartBuilding = () => {
    dispatch(setId(uniqid()));
    setEditingMode(true);
    //not updating, new template
    setUpdatingTemplate(false);
  };
  {
    /*Editing */
  }
  //on save dispatch the specific template to the templates array in redux store
  const handleSave = () => {
    //close edit sideber
    setEditingMode(false);
    //check to see if we need to push a new template or update an old one in redux
    if (updatingTemplate) {
      handleDispatchUpdatedTemplate(specificTemplate);
    } else {
      handleDispatchNewTemplate(specificTemplate);
    }
  };
  //check to see if template has already been saved (we're updating it), and needs to be deleted
  const handleDeleteTemplate = () => {
    if (!updatingTemplate) {
      //just close the editing, and go back to home screen
      setEditingMode(false);
    } else {
      setEditingMode(false);
      handleDispatchDeleteTemplate(specificTemplate);
    }
  };
  {
    /*Dispatches to Redux*/
  }
  //push new template to templates array
  const handleDispatchNewTemplate = (newTemplate: TemplateBuilderModel) => {
    dispatch(pushToTemplatesArray(newTemplate));
  };
  //update templates array
  const handleDispatchUpdatedTemplate = (
    updatedTemplate: TemplateBuilderModel,
  ) => {
    dispatch(updateTemplatesArray(updatedTemplate));
  };
  //dispatch campaign name to redux
  const handleDispatchCampaign = () => {
    if (campaignName) {
      dispatch(setCampaign(campaignName));
    }
  };
  //dispatch chosen template to specific_template in redux store, for updating a template
  const handleDispatchTemplate = (template: TemplateBuilderModel) => {
    dispatch(setSpecificTemplate(template));
    //then show sidebar for editing
    setEditingMode(true);
    //we're updating
    setUpdatingTemplate(true);
  };
  const handleDispatchDeleteTemplate = (
    templateToDelete: TemplateBuilderModel,
  ) => {
    console.log('dispatch delete template');
    dispatch(deleteFromTemplatesArray(templateToDelete));
  };
  useEffect(() => {
    handleDispatchCampaign();
  }, [campaignName, savedTemplates]);
  console.log(savedTemplates);
  return (
    <>
      {/*Container for sidebar */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: 360,
          height: '100vh',
          top: 0,
          left: 0,
          bgcolor: alpha('#FFFFFF', 0.08),
          boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.08)',
          // Media query, column, stack sidebar ontop of messag node
          '@media screen and (max-width: 768px)': {
            width: '100%',
          },
        }}
      >
        {/*container for edit message and close icon */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            p: 0,
            height: 40,
            alignSelf: 'stretch',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            gap: 24,
          }}
        >
          {/*change sidebar header depedning on if we're editing or viewing the default sidebar */}
          <Typography variant="h5" width={296} height={31.14} textAlign="left">
            {' '}
            {editingMode ? 'Edit Message' : 'WhatsApp  Campaign'}{' '}
          </Typography>
          <Box
            onClick={() => setEditingMode(false)}
            sx={{
              ...(!editingMode && {
                display: 'none',
              }),
            }}
          >
            <Box
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <SidebarCloseSvg />
            </Box>
          </Box>
        </Box>
        {/*only  shown when adding a new campaign/message node */}
        {editingMode ? (
          <>
            <MessageTemplate />
            {/*Save and delete buttons */}
            <ThemeProvider theme={theme}>
              <Button
                onClick={handleSave}
                variant="contained"
                color="secondary"
                sx={{
                  color: '#FFFFFF',
                  width: 360,
                  height: 36,
                  borderRadius: '4px',
                  textAlign: 'center',
                  mb: 12,
                }}
              >
                SAVE
              </Button>
            </ThemeProvider>
            <Button
              onClick={handleDeleteTemplate}
              variant="outlined"
              sx={{
                color: theme.palette.secondary.main,
                width: 360,
                height: 36,
                borderRadius: '4px',
                textAlign: 'center',
                borderColor: theme.palette.secondary.main,
              }}
            >
              DELETE
            </Button>
          </>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: 'auto',
              gap: 20,
              width: '100%',
              mt: 100,
              mb: 50,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: 'left',
                pl: 20,
                fontStyle: 'bold',
                fontweight: 600,
                fontFamily: 'Roboto',
                fontSize: 25,
              }}
            >
              Build a New Campaign!
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                pl: 20,
                gap: 10,
              }}
            >
              <Typography variant="h6">Campaign Name</Typography>
              <FormControl required defaultValue="Amazing Campaign">
                <TextField
                  aria-label="campaign name input"
                  size="small"
                  onChange={(e) => setCampaignName(e.target.value)}
                  sx={{
                    width: 320,
                    borderRadius: '10px',
                    borderColor: theme.palette.secondary.main,
                  }}
                />
              </FormControl>
            </Box>
            <Button
              onClick={handleStartBuilding}
              variant="outlined"
              color="secondary"
              component="label"
              size="large"
              sx={{
                width: 320,
                ml: 20,
                mr: 20,
              }}
            >
              Start Building
            </Button>
          </Box>
        )}
        {/*Display saved templates*/}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'left',
            gap: 40,
            pl: 20,
            ...(editingMode ? { display: 'none' } : {}),
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: 'left',
              width: '95%',
              fontStyle: 'bold',
              fontweight: 600,
              fontFamily: 'Roboto',
              fontSize: 25,
              lineHeight: 1.5,
            }}
          >
            {savedTemplates.length < 1
              ? `You have no saved campaigns, get building!`
              : `Saved Campaigns `}
          </Typography>
          {savedTemplates.map((template) => (
            /*dispatch template to specific_template object in redux store, to be viewed/edited in sidebar*/
            <Box
              sx={{
                width: '75%',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                height: 40,
                borderRadius: '10px',
                justifyContent: 'space-between',
                pl: 15,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 5,
                }}
              >
                <MessageIcon
                  sx={{
                    color: '#7986CB',
                  }}
                />
                <Typography
                  onClick={() => handleDispatchTemplate(template)}
                  sx={{
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  {template.campaign}
                </Typography>
              </Box>
              <DeleteIcon
                onClick={() => handleDispatchDeleteTemplate(specificTemplate)}
                sx={{
                  width: 24,
                  height: 24,
                  color: 'rgba(0, 0, 0, 0.54)',
                  '&:hover': {
                    color: 'rgba(0, 0, 0, 0.74)',
                    cursor: 'pointer',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
