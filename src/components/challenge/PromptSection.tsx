'use client';

import { Box, Typography, Chip } from '@mui/material';

interface PromptSectionProps {
  title: string;
  difficulty: string;
  points: number;
  description: string;
}

export default function PromptSection({ title, difficulty, points, description }: PromptSectionProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#1E1F25',
        borderRadius: 2,
        p: { xs: 2, md: 3 },
        height: '100%',
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: '#F2F3F5',
            fontSize: { xs: '20px', md: '24px' },
            fontWeight: 600,
            mb: 2,
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip
            label={difficulty}
            size="small"
            sx={{
              backgroundColor: '#4CAF50',
              color: '#000',
              fontSize: '12px',
              height: '24px',
              '& .MuiChip-label': {
                px: 1,
              },
            }}
          />
          <Chip
            label={`${points} points`}
            size="small"
            sx={{
              backgroundColor: '#FFD24C',
              color: '#000',
              fontSize: '12px',
              height: '24px',
              '& .MuiChip-label': {
                px: 1,
              },
            }}
          />
        </Box>

        <Typography
          sx={{
            color: '#9B9C9E',
            fontSize: '14px',
            lineHeight: 1.6,
          }}
        >
          Complete all the tasks and pass all the tests.
        </Typography>
      </Box>

      <Typography
        sx={{
          color: '#F2F3F5',
          fontSize: '14px',
          lineHeight: 1.6,
          whiteSpace: 'pre-wrap',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
