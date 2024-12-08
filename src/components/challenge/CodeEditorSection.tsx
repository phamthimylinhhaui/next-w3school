'use client';

import { useState } from 'react';
import { Box, Button, Typography, IconButton, ButtonGroup } from '@mui/material';
import Editor from '@monaco-editor/react';
import SettingsIcon from '@mui/icons-material/Settings';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CodeIcon from '@mui/icons-material/Code';
import ConstructionIcon from '@mui/icons-material/Construction';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import CompileSuccessModal from './CompileSuccessModal';

interface CodeEditorSectionProps {
  initialCode: string;
  onRun: (code: string) => void;
}

export default function CodeEditorSection({ initialCode, onRun }: CodeEditorSectionProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleEditorChange = (value: string | undefined) => {
    // Handle editor changes if needed
  };

  const handleFormat = () => {
    // Handle format
  };

  const handleCompile = () => {
    // Here you would typically handle the compilation
    // For now, we'll just show the success modal
    setShowSuccessModal(true);
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
          position: 'relative',
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
            bottom: 12,
            right: 12,
            display: 'flex',
            gap: 1,
          }}
        >
          <ButtonGroup
            variant="contained"
            size="small"
            sx={{
              display: 'flex',
              gap: 1,
              '& .MuiButton-root': {
                height: '32px',
                bgcolor: 'transparent',
                color: 'black',
                fontSize: '13px',
                textTransform: 'none',
                px: 2,
                py: 0.5,
                border: '1px solid #E5E7EB',
                borderRadius: 2,
                '&:hover': {
                  bgcolor: '#F3F4F6',
                  borderColor: '#E5E7EB',
                },
              },
              '& .MuiButton-root:last-child': {
                bgcolor: '#10B981',
                color: 'white',
                borderColor: '#10B981',
                '&:hover': {
                  bgcolor: '#059669',
                  borderColor: '#059669',
                },
              },
            }}
          >
            <Button
              startIcon={<CodeIcon />}
              onClick={handleFormat}
            >
              Format
            </Button>
            <Button
              startIcon={<ConstructionIcon />}
              onClick={handleCompile}>
              Compile
            </Button>
            <Button
              startIcon={<PlayArrowOutlinedIcon />}
              onClick={() => onRun(initialCode)}>
              Run
            </Button>
          </ButtonGroup>
        </Box>
      </Box>

      {/* Success Modal */}
      <CompileSuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        points={10}
        totalPoints={36}
      />
    </Box>
  );
}
