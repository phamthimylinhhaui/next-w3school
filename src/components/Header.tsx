'use client';

import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { routes } from '@/config/routes';

const menuItems = [
  { label: 'Courses', path: '/courses' },
  { label: 'Challenges', path: '/challenges/1' },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    handleMenuClose();
  };

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', px: 2 }}>
      <Box>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            minHeight: { xs: '56px', sm: '64px' },
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => router.push(routes.home)}
          >
            <Image
              src="/assets/images/logo/w3.png"
              alt="Web3School Logo"
              width={170}
              height={30}
            />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    color: '#F2F3F5',
                    textTransform: 'none',
                    fontSize: '16px',
                    opacity: isActive(item.path) ? 1 : 0.7,
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#4C6FFF',
                  color: '#FFF',
                  textTransform: 'none',
                  fontSize: '14px',
                  px: 2,
                  '&:hover': {
                    backgroundColor: '#3B5EEE',
                  },
                }}
              >
                100 Points
              </Button>
            </Box>
          ) : (
            // Mobile Navigation
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#4C6FFF',
                  color: '#FFF',
                  textTransform: 'none',
                  fontSize: '14px',
                  '&:hover': {
                    backgroundColor: '#3B5EEE',
                  },
                }}
              >
                100 Points
              </Button>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
                sx={{ color: '#F2F3F5' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: '#1E1F25',
                    minWidth: 180,
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      color: '#F2F3F5',
                      opacity: isActive(item.path) ? 1 : 0.7,
                      '&:hover': {
                        backgroundColor: 'rgba(76, 111, 255, 0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
}
