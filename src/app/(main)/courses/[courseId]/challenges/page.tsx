'use client';

import { useState } from 'react';
import { Box, Container, Typography, LinearProgress } from '@mui/material';
import ChallengeCard from '@/components/ChallengeCard';
import ChallengeFilters from '@/components/ChallengeFilters';
import Header from '@/components/Header';

// Mock data - replace with API call later
const mockChallenges = [
  {
    id: 1,
    title: 'Hello World',
    difficulty: 'beginner' as const,
    status: 'solved' as const,
  },
  {
    id: 2,
    title: 'Value Type',
    difficulty: 'beginner' as const,
    status: 'unsolved' as const,
  },
  {
    id: 3,
    title: 'Function Outputs',
    difficulty: 'beginner' as const,
    status: 'unsolved' as const,
  },
  {
    id: 4,
    title: 'ETH Flash Loan',
    difficulty: 'beginner' as const,
    status: 'unsolved' as const,
  },
];

export default function ChallengePage({ params }: { params: { courseId: string } }) {
  const [challenges] = useState(mockChallenges);
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
      
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              color: '#F2F3F5',
              fontSize: '32px',
              fontWeight: 600,
              mb: 1,
            }}
          >
            Challenges
          </Typography>
          
          <Typography
            sx={{
              color: '#9B9C9E',
              fontSize: '16px',
              mb: 2,
            }}
          >
            {solvedChallenges}/{totalChallenges}
          </Typography>

          <Box sx={{ maxWidth: 400, mx: 'auto' }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
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

        <Box>
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
