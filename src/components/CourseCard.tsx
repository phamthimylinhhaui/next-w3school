'use client';

import { Box, Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import Image from 'next/image';
import { LinearProgress } from '@mui/material';

interface CourseCardProps {
  title: string;
  image: string;
  progress?: {
    current: number;
    total: number;
  };
  tags: string[];
  comingSoon?: boolean;
}

export default function CourseCard({ title, image, progress, tags, comingSoon }: CourseCardProps) {
  const progressValue = progress ? (progress.current / progress.total) * 100 : 0;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1E1F25',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'relative', pt: '56.25%' /* 16:9 aspect ratio */ }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            mb: 1,
            color: '#F2F3F5',
            minHeight: '50px',
          }}
        >
          {title}
        </Typography>

        {comingSoon ? (
          <Typography
            sx={{
              color: '#9B9C9E',
              fontSize: '14px',
              mb: 1,
              height: '28px',
            }}
          >
            Coming Soon
          </Typography>
        ) : progress && (
          <Box sx={{ mb: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '14px',
                  color: '#9B9C9E',
                }}
              >
                {progress.current}/{progress.total}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={progressValue}
              sx={{
                height: 4,
                borderRadius: 2,
                backgroundColor: 'rgba(76, 111, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#4C6FFF',
                },
              }}
            />
          </Box>
        )}

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: tag === '#algorand' ? '#FFD24C' : '#4CAF50',
                color: '#000',
                fontSize: '12px',
                height: '24px',
                '& .MuiChip-label': {
                  px: 1,
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
