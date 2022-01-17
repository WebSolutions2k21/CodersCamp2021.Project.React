import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

const drawerWidht = 280

const useStyles = makeStyles({
    drawer: {
        width: drawerWidht
    },
    drawerPaper: {
        width: drawerWidht
    },
    root: {
        display: 'flex'
    }
})

export const Sidebar = () => {

    const classes = useStyles()
    const navigate = useNavigate()

    const menuItems = [
        {
            text: 'My Pets',
            icon: '<3',
            path: '/mypets'
        },
        {
            text: 'My Visits',
            icon: '<3',
            path: '/myvisits'
        },
        {
            text: 'Edit Profile',
            icon: '<3',
            path: '/editprofile'
        }
    ]

    return (
            <div className={classes.root}>
<Drawer 
    className={classes.drawer}
    variant='permanent'
    anchor='left'
    classes={{ paper: classes.drawerPaper }}
    >

<List>
    {menuItems.map(item => (
        <ListItem
        button
        key={item.text}
        onClick={() => navigate(item.path) }
        >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />

        </ListItem>
    ))}
   
</List>
</Drawer>

</div>
    )
}