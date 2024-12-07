import { Box, Container, Typography } from '@mui/material';
import NavigationButton from '@/components/NavigationButton';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          Welcome to W3School
        </Typography>
        <NavigationButton
          variant="contained"
          color="primary"
          href="/login"
          sx={{ mt: 3 }}
        >
          Get Started
        </NavigationButton>
      </Box>
    </Container>
  );
}
