'use client';

import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: '',
    retypePassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reset password logic here
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
            Reset Password
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </Box>

            <Box sx={{ mb: '24px' }}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: '8px',
                }}
              >
                RETYPE PASSWORD
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
                name="retypePassword"
                type="password"
                id="retypePassword"
                placeholder="Retype your password"
                value={formData.retypePassword}
                onChange={(e) => setFormData({ ...formData, retypePassword: e.target.value })}
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
              Reset Password
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
