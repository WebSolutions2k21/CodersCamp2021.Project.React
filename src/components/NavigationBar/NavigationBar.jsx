import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Link, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PawIcon from '@mui/icons-material/Pets';

import imgLogo from '../../assets/logo.png';
import { useStyles } from './NavigationBarStyle';
import { paths } from '../../config/paths';
import { auth } from '../../config/firebase';

export const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = useState();
  const user = auth.currentUser;
  const isAuth = user;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const logoutHandler = () => {
    auth.signOut().reload();
  };

  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl" className={classes.root}>
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              <Link component={RouterLink} to={paths.home}>
                <img className={classes.img} src={imgLogo} alt="logo" />
              </Link>
            </Typography>

            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Link component={RouterLink} to={paths.home}>
                <img className={classes.img} src={imgLogo} alt="logo" />
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <Button
                component={RouterLink}
                to={paths.aboutUs}
                size="large"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  p: 1,
                  display: 'flex',
                  alignContent: 'center',
                  textDecoration: 'none',
                  '&:hover': { color: '#16bac6' },
                }}
              >
                <PawIcon className={classes.imgIcon} />
                {'About'}
              </Button>
              <Button
                component={RouterLink}
                to={paths.contact}
                size="large"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  p: 1,
                  display: 'flex',
                  alignContent: 'center',
                  textDecoration: 'none',
                  '&:hover': { color: '#16bac6' },
                }}
              >
                <PawIcon className={classes.imgIcon} />
                {'Contacts'}
              </Button>
              {!isAuth && (
                <Button
                  component={RouterLink}
                  to={paths.signUp}
                  size="large"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    p: 1,
                    display: 'flex',
                    alignContent: 'center',
                    textDecoration: 'none',
                    '&:hover': { color: '#16bac6' },
                  }}
                >
                  <PawIcon className={classes.imgIcon} />
                  {'Sign Up'}
                </Button>
              )}
              {!isAuth && (
                <Button
                  component={RouterLink}
                  to={paths.login}
                  size="large"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    p: 1,
                    display: 'flex',
                    alignContent: 'center',
                    textDecoration: 'none',
                    '&:hover': { color: '#16bac6' },
                  }}
                >
                  <PawIcon className={classes.imgIcon} />
                  {'Login'}
                </Button>
              )}
              {isAuth && (
                <Button
                  component={RouterLink}
                  to={paths.home}
                  size="large"
                  onClick={logoutHandler}
                  sx={{
                    my: 2,
                    p: 1,
                    display: 'flex',
                    alignContent: 'center',
                    textDecoration: 'none',
                    '&:hover': { color: '#16bac6' },
                  }}
                >
                  <PawIcon className={classes.imgIcon} />
                  {'Log Out'}
                </Button>
              )}
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
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
                <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to={paths.aboutUs}>
                  <Typography textAlign="center">{'About Us'}</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to={paths.contact}>
                  <Typography textAlign="center">{'Contact'}</Typography>
                </MenuItem>
                {!isAuth && (
                  <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to={paths.signUp}>
                    <Typography textAlign="center">{'Sign in'}</Typography>
                  </MenuItem>
                )}
                {!isAuth && (
                  <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to={paths.login}>
                    <Typography textAlign="center">{'Log in'}</Typography>
                  </MenuItem>
                )}
                {isAuth && (
                  <MenuItem onClick={logoutHandler} component={RouterLink} to={paths.login}>
                    <Typography textAlign="center">{'Log out'}</Typography>
                  </MenuItem>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
