'use client';

import { useState } from 'react';
import { Box, Container, Typography, LinearProgress, useTheme, useMediaQuery } from '@mui/material';
import ChallengeCard from '@/components/ChallengeCard';
import ChallengeFilters from '@/components/ChallengeFilters';
import Header from '@/components/Header';

// Mock data - replace with API call later
const mockChallenges = [
  {
    id: 1,
    title: 'Hello World',
    difficulty: '#beginner' as const,
    status: 'solved' as const,
  },
  {
    id: 2,
    title: 'Value Type',
    difficulty: '#beginner' as const,
    status: 'unsolved' as const,
  },
  {
    id: 3,
    title: 'Function Outputs',
    difficulty: '#beginner' as const,
    status: 'unsolved' as const,
  },
  {
    id: 4,
    title: 'ETH Flash Loan',
    difficulty: '#beginner' as const,
    status: 'unsolved' as const,
  },
];

export default function ChallengePage({ params }: { params: { courseId: string } }) {
  const [challenges] = useState(mockChallenges);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const totalChallenges = challenges.length;
  const solvedChallenges = challenges.filter(c => c.status === 'solved').length;
  const progress = (solvedChallenges / totalChallenges) * 100;

  const handleSearch = (value: string) => {
    // Implement search logic
    console.log('Search:', value);
  };

  const handleSortChange = (value: string) => {
    // Implement sort logic
    console.log('Sort:', value);
  };

  const handleStatusChange = (value: string) => {
    // Implement status filter
    console.log('Status:', value);
  };

  const handleLanguageChange = (value: string) => {
    // Implement language filter
    console.log('Language:', value);
  };

  const handleDifficultyChange = (value: string) => {
    // Implement difficulty filter
    console.log('Difficulty:', value);
  };

  const handleSolveChallenge = (challengeId: number) => {
    // Implement solve logic
    console.log('Solve challenge:', challengeId);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      
      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: { xs: 3, sm: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4 } }}>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              color: '#F2F3F5',
              fontSize: { xs: '24px', sm: '28px', md: '32px' },
              fontWeight: 600,
              mb: 1,
            }}
          >
            Challenges
          </Typography>
          
          <Typography
            sx={{
              color: '#9B9C9E',
              fontSize: { xs: '14px', sm: '16px' },
              mb: 2,
            }}
          >
            {solvedChallenges}/{totalChallenges}
          </Typography>

          <Box sx={{ maxWidth: { xs: '100%', sm: 400 }, mx: 'auto' }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: { xs: 6, sm: 8 },
                borderRadius: 4,
                backgroundColor: 'rgba(76, 111, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#4C6FFF',
                  borderRadius: 4,
                },
              }}
            />
          </Box>
        </Box>

        <ChallengeFilters
          onSearch={handleSearch}
          onSortChange={handleSortChange}
          onStatusChange={handleStatusChange}
          onLanguageChange={handleLanguageChange}
          onDifficultyChange={handleDifficultyChange}
        />

        <Box sx={{ 
          '& > *:not(:last-child)': { 
            mb: { xs: 1.5, sm: 2 } 
          }
        }}>
          {challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              title={challenge.title}
              difficulty={challenge.difficulty}
              status={challenge.status}
              onSolve={() => handleSolveChallenge(challenge.id)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
