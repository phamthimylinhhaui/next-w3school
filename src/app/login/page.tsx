'use client';

import { Box, Button, Container, TextField, Typography, Link } from '@mui/material';
import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background.paper',
            p: '20px',
            borderRadius: 2,
          }}
        >
          <Typography component="h1" variant="h4" sx={{ mb: '12px' }}>
            Login
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: '24px' }}>
            We're so excited to see you again!
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%' }}>
            <Box sx={{ mb: '20px' }}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: '8px',
                }}
              >
                EMAIL
                <Box
                  component="span"
                  sx={{
                    color: 'error.main',
                    ml: '4px',
                  }}
                >
                  *
                </Box>
              </Typography>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Box>

            <Box sx={{ mb: '16px' }}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: '8px',
                }}
              >
                PASSWORD
                <Box
                  component="span"
                  sx={{
                    color: 'error.main',
                    ml: '4px',
                  }}
                >
                  *
                </Box>
              </Typography>
              <TextField
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </Box>

            <Link
              href="#"
              variant="body2"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                display: 'block',
                mb: '20px',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Forgot your password?
            </Link>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                color: '#FFF',
              }}
            >
              Login/Register
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
