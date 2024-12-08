'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import CourseCard from '@/components/CourseCard';
import Header from '@/components/Header';

const courses = [
  {
    id: 1,
    title: 'PyTeal Tutorial for Beginners',
    image: '/assets/images/courses/default.png',
    progress: {
      current: 10,
      total: 36,
    },
    tags: ['#algorand', '#beginner'],
  },
  {
    id: 2,
    title: 'NFT Marketplace Algorand TEALScript',
    image: '/assets/images/courses/default.png',
    progress: {
      current: 0,
      total: 12,
    },
    tags: ['#algorand', '#pro'],
  },
  {
    id: 3,
    title: 'TEALScript Tutorial Beginner',
    image: '/assets/images/courses/default.png',
    progress: {
      current: 12,
      total: 12,
    },
    tags: ['#algorand', '#beginner'],
  },
  {
    id: 4,
    title: 'Beaker for Beginner',
    image: '/assets/images/courses/default.png',
    comingSoon: true,
    tags: ['#algorand', '#beginner'],
  },
];

export default function CoursesPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Typography
          component="h1"
          variant="h4"
          sx={{
            color: '#F2F3F5',
            fontSize: '32px',
            fontWeight: 600,
            textAlign: 'center',
            mb: 4,
          }}
        >
          Courses
        </Typography>

        <Grid container spacing={3}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CourseCard {...course} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
