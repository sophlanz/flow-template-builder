import MessageTemplate from "./components/MessageTemplate";
import { Box, Typography, alpha, Button, ThemeProvider, TextField, FormControl }  from '@mui/material';
import SidebarCloseSvg from "./components/ui/SidebarCloseSvg";
import theme from '../../../styles/style'
import { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import uniqid from 'uniqid';
import MessageIcon from '@mui/icons-material/Message';
//redux
import { TemplateBuilderModel } from "../../../models/redux-models";
import { setCampaign, setId, pushToTemplatesArray, setSpecificTemplate, updateTemplatesArray } from "../../../store/template-builder.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
function Sidebar() {
  //redux
  const dispatch= useAppDispatch()
  //store campaign name user creates
  const[campaignName, setCampaignName]=useState<string>();
  //sided bar edit mode, showing default or showing options to edit
  const [editingMode,setEditingMode] = useState<boolean>(false)
  //saved templates will be fetched from redux store and added to state
/*   const[savedTemplates,setSavedTemplates]=useState<TemplateBuilderModel[]>([]) */
  //keep track of updating template or new template
  const[updatingTemplate,setUpdatingTemplate]=useState<boolean>()
  //get specific template from redux store
  const specificTemplate= useAppSelector(state=>state.templateBuilder.specific_template)
  const savedTemplates= useAppSelector(state=>state.templateBuilder.all_templates)
  //on save dispatch the specific template to the templates array in redux store
  const handleSave =()=> {
      //close edit sideber
      setEditingMode(false)
      //check to see if we need to push a new template or update an old one in redux
      if(updatingTemplate){
        console.log('hi')
          dispatch(updateTemplatesArray(specificTemplate))
      }else{
          //dispatch to templates array
           dispatch(pushToTemplatesArray(specificTemplate))
      }
  }
  //send id to redux only once build is initiated, and show editing sidebar
  const handleStartBuilding=()=>{
      dispatch(setId(uniqid()))
      setEditingMode(true)
      //not updating, new template
      setUpdatingTemplate(false)
  }
  //dispatch campaign name to redux
  const handleDispatchCampaign = () => {
    if(campaignName){
      dispatch(setCampaign(campaignName))
    }
  }
  //dispatch chosen template to specific_template in redux store, for updating a template
  const handleDispatchTemplate=(template:TemplateBuilderModel)=>{
      dispatch(setSpecificTemplate(template))
      //then show sidebar for editing
      setEditingMode(true)
      //we're updating
      setUpdatingTemplate(true)
  }
  useEffect(()=>{
    handleDispatchCampaign()
  },[campaignName])
  console.log(updatingTemplate)
  return (
    <>
    {/*Container for sidebar */}
     <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start',
            width:360,
            height:'100vh',
            position:'absolute',
            top:0,
            left:0,
            bgcolor:alpha( "#FFFFFF",.08),
            boxShadow:'1px 0px 0px rgba(0, 0, 0, 0.08);',
            overflowY:'scroll'
        }}
      >
           {/*container for edit message and close icon */}
          <Box 
            sx={{
                display:'flex',
                flexDirection:'row',
                alignItems:'flex-start',
                p:0,
                height:40,
                alignSelf:'stretch',
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                gap:24
          }}
          >
                {/*change sidebar header depedning on if we're editing or viewing the default sidebar */}
                <Typography variant="h5"  width={296} height={31.14}textAlign="left"> {editingMode ? 'Edit Message': 'WhatsApp  Campaign' } </Typography>
                  <Box onClick={()=>setEditingMode(false)}
                    sx={{
                      ...(!editingMode &&{
                        display:'none'
                      })
                    }}
                  >
                    <SidebarCloseSvg />
                  </Box> 
          </Box>
          {/*only  shown when adding a new campaign/message node */}
          {editingMode ? 
          <>
           <MessageTemplate/>
          { /*Save and delete buttons */}
           <ThemeProvider theme={theme}>
                 <Button onClick={handleSave} variant="contained" color='secondary' 
                 sx={{
                   color:'#FFFFFF',
                   width:360,
                   height:36,
                   borderRadius:'4px',
                   textAlign:'center',
                   mb:12
                 }}
                 >SAVE
                 </Button>
           </ThemeProvider>
           <Button variant="outlined"
             sx={{
               color:theme.palette.secondary.main,
               width:360,
               height:36,
               borderRadius:'4px',
               textAlign:'center',
               borderColor:theme.palette.secondary.main,
             }}
           >DELETE
           </Button>
           </>
          :
             <Box
              sx={{
                  display:'flex',
                  flexDirection:'column',
                  height:400,
                  gap:20,
                  width:'100%',
                  mt:30,
              }}>
                  <Typography variant="h5"
                  >Build Effective Campaign</Typography>
                  <Box
                    sx={{
                      display:'flex',
                      flexDirection:'column',
                      alignItems:'flex-start',
                      pl:20,
                      gap:10
                    }}
                  >
                      <Typography variant="h6"
                      >Campaign Name</Typography>
                      <FormControl required defaultValue='Amazing Campaign'>
                          <TextField aria-label="campaign name input"  size="small"
                                  onChange={(e)=>setCampaignName(e.target.value) }     
                          />
                         
                      </FormControl>

                     
                  </Box>
                   <Button  onClick={handleStartBuilding}
                                   variant="outlined"
                                   color="secondary"
                                   component="label" 
                                   size="large"
                                   sx={{
                                    width:320,
                                    ml:20,
                                    mr:20
                                   }}
                          >Start Building
                          </Button>
            </Box>
           
            }
            {/*Display saved templates*/}
            {savedTemplates.map((template)=> (
              /*dispatch template to specific_template in redux, to be viewed/edited in sidebar*/
                <Box onClick={()=>handleDispatchTemplate(template)}
                  sx={{
                    width:'80%',
                    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}>
                      <MessageIcon/>
                      <Typography>
                        {template.campaign}
                      </Typography>
                </Box>
            ))}
      </Box>
    </>
  );
}

export default Sidebar;
