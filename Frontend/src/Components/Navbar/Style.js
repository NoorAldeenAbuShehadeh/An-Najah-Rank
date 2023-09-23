import { createUseStyles } from "react-jss";

const Style = createUseStyles({
    navContainer:{
        backgroundColor:'#0e141e'
    },
    textColor:{
        color:'white !important'
    },
    search:{
        backgroundColor:'#39424e',
        color:'white !important',
        border:'none',
        '&::placeholder': {
            color:'white',
        },
          '&:focus': {
            backgroundColor:'#39424e',
            outline: 'none !important',
            boxShadow: 'none !important',
          },
    },
    customInputGroup: {
        maxWidth: '300px', // Set the maximum width to 400 pixels
      },
    burgerBtn:{
        backgroundColor:'white'
    },
    Overlay:{
        marginTop:'10px',
        paddingTop:'10px',
        boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
        backgroundColor:'#0e141e'
    },
    OverlayTitle:{
        backgroundColor:'#0e141e',
        minWidth:'350px',
        color:'white',
        padding:'3px 10px'
    },
    OverlayContent:{
        minWidth:'350px',
        maxWidth:'350px',
        backgroundColor: 'white',
        padding:'3px 10px',
        paddingTop:'10px',
        display:'flex',
        flexDirection:'column',
        alignContent:'center'
    },
    notificationItem:{
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '12px',
        marginBottom: '10px',
        backgroundColor: '#f5f5f5',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    notificationText: {
        fontSize: '14px',
        color: '#333',
      },
      notificationTime: {
        fontSize: '12px',
        color: '#999',
      },
      line:{
        marginLeft:'-10px',
        marginRight:'-10px',
        margin:'2px 2px'
      },
      notificationLink:{
        textAlign:'center',
        textDecoration:'none',
        color:'#576871',
        '&:hover':{
            fontWeight: 'bold',
            textDecoration: 'underline',
        }
      },
})
export default Style