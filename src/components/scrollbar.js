import styled from "styled-components"
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';

export const ScrollbarWrapper = styled.div(() => ({
    width: "100%",
    height: "100%",
    overflowX: 'hidden',
    overflowY: "scroll",
    scrollbarColor: "white blue",
    padding: 20,
   // direction: "rtl",  // if you want to show the scroll bar on the left 
    margin: 2,
    "::-webkit-scrollbar": {
        width: "1.3rem",
    },
    "::-webkit-scrollbar-track": {
        backgroundColor: '#e9e9e9',
        borderRadius: "15rem",
    },
    "::-webkit-scrollbar-thumb": {
      //  background: '#008080',
   //     borderRadius: "15rem",
      //  height: "2px",
        background: 'teal',
        backgroundImage: `url("https://talentum.space/wp-content/uploads/2022/08/rocketOutlined.png")` ,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '20px',
        borderRadius: '10px',
    },
    "::-webkit-scrollbar-thumb:hover": {
      //  background: '#11395d',
        maxHeight: "10px"
    },

}))

export default ScrollbarWrapper