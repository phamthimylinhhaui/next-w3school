'use client';

import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { routes } from '@/config/routes';

export default function Header() {
  const router = useRouter();

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
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

          {/* Navigation */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              sx={{
                color: '#F2F3F5',
                textTransform: 'none',
                fontSize: '16px',
              }}
              onClick={() => router.push(routes.courses.list)}
            >
              Courses
            </Button>
            <Button
              sx={{
                color: '#F2F3F5',
                textTransform: 'none',
                fontSize: '16px',
              }}
              onClick={() => router.push(routes.challenges.list)}
            >
              Challenges
            </Button>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
