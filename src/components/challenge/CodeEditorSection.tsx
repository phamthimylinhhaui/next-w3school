'use client';

import { Box, Button } from '@mui/material';
import Editor from '@monaco-editor/react';

interface CodeEditorSectionProps {
  initialCode: string;
  onRun: (code: string) => void;
}

export default function CodeEditorSection({ initialCode, onRun }: CodeEditorSectionProps) {
  const handleEditorChange = (value: string | undefined) => {
    // Handle editor changes if needed
  };

  return (
    <Box sx={{ height: '100%', position: 'relative' }}>
      <Editor
        height="100%"
        defaultLanguage="solidity"
        theme="vs-dark"
        value={initialCode}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          automaticLayout: true,
        }}
      />
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
            '&:hover': {
              backgroundColor: '#3B5EEE',
            },
          }}
        >
          Compile
        </Button>
      </Box>
    </Box>
  );
}
