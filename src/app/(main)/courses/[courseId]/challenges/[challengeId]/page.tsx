'use client';

import { useState } from 'react';
import { Box, Container } from '@mui/material';
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
    <Box 
      sx={{ 
        display: 'flex',
        height: 'calc(100vh - 100px)'
      }}
    >
      {/* Left Column */}
      <Box
        sx={{
          width: { xs: '100%', md: '45%' },
          minWidth: { md: '500px' },
          overflow: 'auto',
            p: 2,
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
          p: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
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
          }}
        >
          <OutputConsole output={output} error={error} />
        </Box>
      </Box>
    </Box>
  );
}
