'use client';

import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { Chip } from '@mui/material';

interface ChallengeCardProps {
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  status?: 'solved' | 'unsolved';
  onSolve: () => void;
}

export default function ChallengeCard({ title, difficulty, status, onSolve }: ChallengeCardProps) {
  return (
    <Card
      sx={{
        backgroundColor: '#1E1F25',
        borderRadius: 2,
        mb: 1,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          '&:last-child': { pb: 2 },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            variant="h6"
            sx={{
              color: '#F2F3F5',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
          <Chip
            label={difficulty}
            size="small"
            sx={{
              backgroundColor: '#4CAF50',
              color: '#000',
              fontSize: '12px',
              height: '24px',
              textTransform: 'lowercase',
              '& .MuiChip-label': {
                px: 1,
              },
            }}
          />
        </Box>

        <Button
          variant="contained"
          onClick={onSolve}
          sx={{
            backgroundColor: status === 'solved' ? '#4CAF50' : '#4C6FFF',
            color: '#FFF',
            textTransform: 'none',
            fontSize: '14px',
            '&:hover': {
              backgroundColor: status === 'solved' ? '#45A049' : '#3B5EEE',
            },
          }}
        >
          {status === 'solved' ? 'Solved' : 'Solve Challenge'}
        </Button>
      </CardContent>
    </Card>
  );
}
