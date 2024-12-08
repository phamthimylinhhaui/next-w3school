'use client';

import { Box, Typography } from '@mui/material';

interface OutputConsoleProps {
  output: string;
  error?: string;
}

export default function OutputConsole({ output, error }: OutputConsoleProps) {
  return (
    <Box
      sx={{
        height: '100%',
        p: 2,
        overflow: 'auto',
      }}
    >
      <Typography
        component="pre"
        sx={{
          color: error ? '#ff4444' : '#F2F3F5',
          fontSize: '14px',
          fontFamily: 'monospace',
          margin: 0,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        {error || output || 'No output yet...'}
      </Typography>
    </Box>
  );
}
