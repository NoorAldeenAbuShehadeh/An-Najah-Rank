import { createUseStyles } from "react-jss";

const Style = createUseStyles({
    navContainer:{
        backgroundColor:'#0e141e'
    },
    textColor:{
        color:'white !important'
    },
    burgerBtn:{
        backgroundColor:'white',
        order:'-2',
        fontSize: '18px'
    },
    Overlay:{
        paddingTop:'10px',
        boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
    },
    OverlayTitle:{
        backgroundColor:'#0e141e',
        minWidth:'350px',
        color:'white',
        padding:'10px 10px',
        textAlign:'center'
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
      messageItem: {
        padding: '12px',
        backgroundColor: '#ffffff',
        marginBottom: '12px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        width:'100%'
      },
      messageCircle: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#e4e4e4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginRight: '12px',
      },
      messageSender: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: '1.1rem',
      },
      messageTime: {
        marginLeft:'10px',
        color: '#777',
        fontSize: '0.9rem',
      },
      messageContent: {
        marginTop: '8px',
        fontSize: '1rem',
        width:'100%'
      },
      iconContainer:{
        width: '36px',
        height: '36px',
        backgroundColor: '#e7eeef',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        marginRight: '8px',
      },
      userChoicesContainer:{
        minWidth:'200px',
        maxWidth:'200px',
        backgroundColor: 'white',
        padding:'15px 10px',
        marginTop:'15px',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        boxShadow: '-2px 2px 4px 6px rgba(0, 0, 0, 0.1)',
      },
      choiceItem: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        width:'100%'
      },
      choiceLink:{
        margin:'10px 20px !important',
        textDecoration:'none',
        fontSize:'1.1rem',
        color:'#576871',
        '&:hover':{
            fontWeight: 'bold',
        }
      },
      hoveringColor:{
        fontSize:'1.1rem',
        color:'#b2b8bc',
        '&:hover':{
            color: 'white',
        }
      },
      '@media (max-width: 600px)': {
        Overlay:{
          boxShadow:'none',
          position: 'fixed',
          width: '100%',
          height: '100%',
          maxWidth:'100%',
          minWidth:'100%',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        OverlayContent:{
          position: 'fixed',
          top: 50,
          maxWidth:'100%',
          minWidth:'100%',
          width: '100%',
          height: '100%',
        },
        OverlayTitle:{
          position: 'fixed',
          maxWidth:'100%',
          minWidth:'100%',
          width: '100%',
          height: '100%',
        },
      },

      userChoiceLarge:{
        display:'block'
      },

      userChoicesSmall:{
        display:'none'
      },
      customInputGroup: {
        display:'block'
      },
      '@media (max-width: 991px)':{
        userChoicesSmall:{
          display:'block'
        },
        userChoiceLarge:{
          display:'none'
        },
        customInputGroup:{
          display:'none'
        },
      }

})
export default Style