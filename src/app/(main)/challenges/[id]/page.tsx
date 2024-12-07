import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import NavigationButton from '@/components/NavigationButton';
import { routes } from '@/config/routes';

interface Props {
  params: {
    id: string;
  };
}

export default function ChallengePage({ params }: Props) {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Course Challenges
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Challenge #1
          </Typography>
          <Typography variant="body1" paragraph>
            Complete the following exercise to test your understanding.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <NavigationButton
              variant="contained"
              color="primary"
              to={routes.challenges.start(params.id)}
            >
              Start Challenge
            </NavigationButton>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ mt: 2 }}>
        <NavigationButton
          variant="outlined"
          to={routes.courses.list}
        >
          Back to Courses
        </NavigationButton>
      </Box>
    </Container>
  );
}
