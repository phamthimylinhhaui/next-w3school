'use client';

import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface OutputConsoleProps {
  output: string;
  error?: string;
}

export default function OutputConsole({ output, error }: OutputConsoleProps) {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 2,
        overflow: 'hidden',
          border: '2px solid white',
      }}
    >
      {/* Console Header */}
      <Box
        sx={{
          px: 2,
          py: 1,
          borderBottom: '1px solid #E5E7EB',
        }}
      >
        <IconButton
          size="small"
          sx={{
            color: '#6B7280',
            '&:hover': {
              backgroundColor: '#F3F4F6',
            },
          }}
        >
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Console Output */}
      <Box
        sx={{
          flex: 1,
          p: 2,
          overflow: 'auto',
          // backgroundColor: error ? '#FEF2F2' : 'transparent',
            backgroundColor: 'background.default',
        }}
      >
        <Typography
          component="pre"
          sx={{
            color: error ? '#DC2626' : 'white',
            fontSize: '14px',
            fontFamily: 'JetBrains Mono, monospace',
            margin: 0,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            lineHeight: 1.5,
          }}
        >
          {error || output || 'No output yet...'}
        </Typography>
      </Box>
    </Box>
  );
}
