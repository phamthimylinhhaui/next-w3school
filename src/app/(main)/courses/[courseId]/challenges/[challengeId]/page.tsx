'use client';

import { useState } from 'react';
import { Box, Container, Grid, Typography, Chip } from '@mui/material';
import CodeEditorSection from '@/components/challenge/CodeEditorSection';
import OutputConsole from '@/components/challenge/OutputConsole';
import ChallengeContent from '@/components/challenge/ChallengeContent';

const initialCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public myString = "My string";
    // Write your code here.
}`;

export default function ChallengeDetailPage({
  params,
}: {
  params: { courseId: string; challengeId: string };
}) {
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [activeTab, setActiveTab] = useState('prompt');

  const handleRunCode = async (code: string) => {
    try {
      // Here you would typically send the code to your backend for execution
      console.log('Running code:', code);
      setOutput('Code execution successful!');
      setError(undefined);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setOutput('');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container 
        maxWidth={false} 
        sx={{ 
          mt: { xs: 2, md: 3 },
          px: { xs: 2, md: 4 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          height: 'calc(100vh - 100px)',
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            minWidth: { md: '500px' },
            maxWidth: { md: '600px' },
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            color: 'black',
          }}
        >
          <ChallengeContent
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </Box>

        {/* Right Column */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
          }}
        >
          <Box
            sx={{
              flex: 1,
              minHeight: '60vh',
              bgcolor: '#1E1F25',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <CodeEditorSection
              initialCode={initialCode}
              onRun={handleRunCode}
            />
          </Box>

          <Box
            sx={{
              height: '200px',
              bgcolor: '#1E1F25',
              borderRadius: 2,
            }}
          >
            <OutputConsole output={output} error={error} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
