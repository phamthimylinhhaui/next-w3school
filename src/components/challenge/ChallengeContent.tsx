'use client';

import { Box, Tabs, Tab, Typography, Chip } from '@mui/material';

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
      <Box>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="challenge content tabs"
          sx={{
            color: '#9B9C9E',
            '& .MuiTabs-indicator': {
              backgroundColor: '#4C6FFF',
            },
            '& .MuiTab-root': {
              color: '#9B9C9E',
              textTransform: 'none',
              fontSize: '14px',
              minHeight: '48px',
              '&.Mui-selected': {
                color: 'black',
                fontWeight: 600,
              },
            },
          }}
        >
          <Tab label="Prompt" value="prompt" />
          <Tab label="Video" value="video" />
          <Tab label="Tasks" value="tasks" />
          <Tab label="Tests" value="tests" />
          <Tab label="Solution" value="solution" />
        </Tabs>
      </Box>

      <TabPanel value={activeTab} tabId="prompt">
        <Box display='flex' flexDirection='column' gap={1}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: 'light',
                fontSize: '24px',
                fontWeight: 600,
              }}
            >
              Hello World
            </Typography>
            <Chip
              label="#beginner"
              size="small"
              sx={{
                backgroundColor: '#4CAF50',
                color: '#000',
                fontSize: '12px',
                height: '24px',
                '& .MuiChip-label': { px: 1 },
              }}
            />
          </Box>
          <Typography sx={{ color: 'black', fontSize: '14px' }}>
            100 points
          </Typography>

          <Typography
            sx={{
              color: 'black',
              fontSize: '14px',
              lineHeight: 1.6,
              whiteSpace: 'pre-wrap',
            }}
          >
            Write a smart contract that stores and retrieves a string value.

            Complete all the tasks and pass all the tests.
          </Typography>
        </Box>
      </TabPanel>

      <TabPanel value={activeTab} tabId="video">
        <Typography sx={{ color: 'black' }}>
          Video content coming soon...
        </Typography>
      </TabPanel>

      <TabPanel value={activeTab} tabId="tasks">
        <Typography sx={{ color: 'black' }}>
          Tasks will be displayed here...
        </Typography>
      </TabPanel>

      <TabPanel value={activeTab} tabId="test">
        <Typography sx={{ color: 'black' }}>
          Tests will be displayed here...
        </Typography>
      </TabPanel>

      <TabPanel value={activeTab} tabId="solution">
        <Typography sx={{ color: 'black' }}>
          Solution will be revealed after completing the challenge...
        </Typography>
      </TabPanel>
    </Box>
  );
}
