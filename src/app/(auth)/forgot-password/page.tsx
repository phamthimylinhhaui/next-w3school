'use client';

import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle send code logic here
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
            Forgot Password
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                color: '#FFF',
              }}
            >
              Send Code
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
