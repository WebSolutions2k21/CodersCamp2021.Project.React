import { makeStyles } from '@mui/styles';

const drawerWidth = 280

export const useStyles = makeStyles({
  
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: drawerWidth,
        boxSizing: 'border-box'
        
    },
    root: {
  
    },
    activetext: {
        color: '#16bac6', 
    }
})