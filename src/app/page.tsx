import { Box, Container, Grid, Card, CardContent, CardActions, Typography } from '@mui/material';
import NavigationButton from '@/components/NavigationButton';
import { routes } from '@/config/routes';

const courses = [
  {
    id: 1,
    title: 'HTML Fundamentals',
    description: 'Learn the basics of HTML and web structure',
  },
  {
    id: 2,
    title: 'CSS Mastery',
    description: 'Master CSS styling and responsive design',
  },
  {
    id: 3,
    title: 'JavaScript Essentials',
    description: 'Get started with JavaScript programming',
  },
];

export default function CoursesPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Available Courses
      </Typography>
      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <NavigationButton
                  size="small"
                  to={routes.courses.challenges(course.id)}
                >
                  View Challenges
                </NavigationButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
