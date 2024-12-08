'use client';

import { Box, Tabs, Tab, Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  value: string;
  tabId: string;
}

function TabPanel({ children, value, tabId }: TabPanelProps) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== tabId}
      id={`challenge-tabpanel-${tabId}`}
      aria-labelledby={`challenge-tab-${tabId}`}
      sx={{
        p: 3,
        flex: 1,
        overflow: 'auto',
      }}
    >
      {value === tabId && children}
    </Box>
  );
}

interface ChallengeContentProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ChallengeContent({ activeTab, onTabChange }: ChallengeContentProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onTabChange(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="challenge content tabs"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#4C6FFF',
            },
            '& .MuiTab-root': {
              color: '#9B9C9E',
              textTransform: 'none',
              fontSize: '14px',
              minHeight: '48px',
              '&.Mui-selected': {
                color: '#F2F3F5',
              },
            },
          }}
        >
          <Tab label="Prompt" value="prompt" />
          <Tab label="Video" value="video" />
          <Tab label="Tasks" value="tasks" />
          <Tab label="Solution" value="solution" />
        </Tabs>
      </Box>

      <TabPanel value={activeTab} tabId="prompt">
        <Typography
          sx={{
            color: '#F2F3F5',
            fontSize: '14px',
            lineHeight: 1.6,
            whiteSpace: 'pre-wrap',
          }}
        >
          Write a smart contract that stores and retrieves a string value.

          Complete all the tasks and pass all the tests.
        </Typography>
      </TabPanel>

      <TabPanel value={activeTab} tabId="video">
        <Typography sx={{ color: '#9B9C9E' }}>
          Video content coming soon...
        </Typography>
      </TabPanel>

      <TabPanel value={activeTab} tabId="tasks">
        <Typography sx={{ color: '#9B9C9E' }}>
          Tasks will be displayed here...
        </Typography>
      </TabPanel>

      <TabPanel value={activeTab} tabId="solution">
        <Typography sx={{ color: '#9B9C9E' }}>
          Solution will be revealed after completing the challenge...
        </Typography>
      </TabPanel>
    </Box>
  );
}
