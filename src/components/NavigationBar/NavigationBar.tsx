import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ReactComponent as Paw } from 'assets/paw-solid.svg';
import { makeStyles } from '@mui/styles';
import imgLogo from 'assets/logo.png';
import 'styles/fonts.scss';

const pages = ['About Us', 'Contact', 'Sign Up', 'Log In'];

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#16bac6',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {        
          fontFamily: '"Ubuntu", sans-serif',
          textTransform: 'capitalize',
          color: '#112025',
          fontSize: '1rem'
        },
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    background: '#ffffff',
    border: 0,
    borderRadius: 3,
    color: '#16bac6',
  },
  img: {
    width: '50px',
  },

  imgIcon: {
    width: '15px',
    paddingLeft: '20px',
  },

  icon: {
    width: '2rem',
    height: '2rem',
    '&:hover': {
      color: '#16bac6 ',
    },
  },
});

export const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl" className={classes.root}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
            >
              <img className={classes.img} src={imgLogo} alt="logo" />
              PUPPYLOG
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <Paw className={classes.icon} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              PUPPYLOG
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {pages.map((page) => (
                <Button
                  startIcon={<Paw className={classes.imgIcon} />}
                  size="small"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: 'flex',
                    '&:hover': { color: '#16bac6' },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
