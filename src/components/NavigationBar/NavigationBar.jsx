import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Link, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PawIcon from '@mui/icons-material/Pets';

import Theme from '../../styles/themes/Theme';
import imgLogo from '../../assets/logo.png';
import { useStyles } from './NavigationBarStyle';
import { paths } from '../../config/paths';

const pages = [
  { title: 'About Us', pathname: paths.aboutUs },
  { title: 'Contact', pathname: paths.contact },
  { title: 'Sign Up', pathname: paths.signUp },
  { title: 'Log In', pathname: paths.login },
];

export const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const classes = useStyles();

  return (
    <Theme>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
              {pages.map((page) => (
                <Button
                  component={RouterLink}
                  to={page.pathname}
                  size="large"
                  key={page.title}
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
                  {page.title}
                </Button>
              ))}
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
                {pages.map((page) => (
                  <MenuItem
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    component={RouterLink}
                    to={`${page.pathname}`}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Theme>
  );
};
