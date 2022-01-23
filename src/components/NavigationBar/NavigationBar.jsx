import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import PawIcon from '@mui/icons-material/Pets';

import Theme from '../../styles/themes/Theme';
import imgLogo from '../../assets/logo.png';
import { useStyles } from './NavigationBarStyle';

const pages = ['About Us', 'Contact', 'Sign Up', 'Log In'];

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
              <img className={classes.img} src={imgLogo} alt="logo" />
            </Typography>

            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <img className={classes.img} src={imgLogo} alt="logo" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {pages.map((page) => (
                <Button
                  size="large"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    p: 1,
                    display: 'flex',
                    alignContent: 'center',
                    '&:hover': { color: '#16bac6' },
                  }}
                >
                  <PawIcon className={classes.imgIcon} />
                  {page}
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
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
