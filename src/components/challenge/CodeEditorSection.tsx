'use client';

import { Box, Button, Typography, IconButton } from '@mui/material';
import Editor from '@monaco-editor/react';
import SettingsIcon from '@mui/icons-material/Settings';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

interface CodeEditorSectionProps {
  initialCode: string;
  onRun: (code: string) => void;
}

export default function CodeEditorSection({ initialCode, onRun }: CodeEditorSectionProps) {
  const handleEditorChange = (value: string | undefined) => {
    // Handle editor changes if needed
  };

  return (
    <Box 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {/* Editor Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          borderBottom: '1px solid #E5E7EB',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            sx={{
              fontSize: '14px',
              color: '#6B7280',
              fontFamily: 'monospace',
            }}
          >
            solidity 0.8.20
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            size="small"
            sx={{ 
              color: '#6B7280',
              '&:hover': {
                backgroundColor: '#F3F4F6',
              },
            }}
          >
            <SettingsIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            sx={{ 
              color: '#6B7280',
              '&:hover': {
                backgroundColor: '#F3F4F6',
              },
            }}
          >
            <FullscreenIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Code Editor */}
      <Box sx={{ flex: 1, position: 'relative' }}>
        <Editor
          height="100%"
          defaultLanguage="solidity"
          theme="vs-light"
          value={initialCode}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: 'JetBrains Mono, monospace',
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            automaticLayout: true,
            padding: { top: 16, bottom: 16 },
            renderLineHighlight: 'none',
            overviewRulerBorder: false,
            scrollbar: {
              vertical: 'auto',
              horizontal: 'auto',
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
          }}
        />
        
        {/* Action Buttons */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            display: 'flex',
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            onClick={() => onRun(initialCode)}
            sx={{
              backgroundColor: '#4CAF50',
              color: '#FFF',
              textTransform: 'none',
              fontSize: '14px',
              px: 3,
              py: 1,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: '#45A049',
              },
            }}
          >
            Run
          </Button>
          <Button
            variant="contained"
            onClick={() => onRun(initialCode)}
            sx={{
              backgroundColor: '#4C6FFF',
              color: '#FFF',
              textTransform: 'none',
              fontSize: '14px',
              px: 3,
              py: 1,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: '#3B5EEE',
              },
            }}
          >
            Compile
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
