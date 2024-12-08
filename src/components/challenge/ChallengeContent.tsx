'use client';

import { Box, Tabs, Tab, Typography, Chip, IconButton, Button } from '@mui/material';
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface TabPanelProps {
  children?: React.ReactNode;
  tabId: string;
  value: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, tabId } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== tabId}
      sx={{
        p: 3,
        flex: 1,
        overflow: 'auto'
      }}
    >
      {value === tabId && children}
    </Box>
  );
}

export default function ChallengeContent({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onTabChange(newValue);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      flex: 1, 
      backgroundColor: 'white',
      color: 'black',
      borderRadius: 2,
      height: '100%'
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #E5E7EB',
        px: 2
      }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          sx={{
            minHeight: '48px',
            '& .MuiTabs-indicator': {
              backgroundColor: '#4C6FFF',
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: 500,
              color: '#6B7280',
              minHeight: '48px',
              padding: '12px 16px',
              '&.Mui-selected': {
                color: 'black',
                fontWeight: 600,
              },
            },
          }}
        >
          <Tab 
            label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              Prompt
              <Box sx={{ 
                width: 6, 
                height: 6, 
                bgcolor: 'red',
                borderRadius: '50%' 
              }} />
            </Box>} 
            value="prompt" 
          />
          <Tab label="Video" value="video" />
          <Tab label="Tasks" value="tasks" />
          <Tab label="Tests" value="tests" />
          <Tab label="Solution" value="solution" />
        </Tabs>
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

      <TabPanel value={activeTab} tabId="prompt">
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Hello World
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip 
            label="solidity" 
            size="small"
            sx={{ 
              bgcolor: '#FEF3C7',
              color: '#92400E',
              borderRadius: 1,
              height: '24px',
              fontSize: '12px'
            }} 
          />
          <Chip 
            label="easy" 
            size="small"
            sx={{ 
              bgcolor: '#D1FAE5',
              color: '#065F46',
              borderRadius: 1,
              height: '24px',
              fontSize: '12px'
            }} 
          />
          <Chip 
            label="app" 
            size="small"
            sx={{ 
              bgcolor: '#E0E7FF',
              color: '#3730A3',
              borderRadius: 1,
              height: '24px',
              fontSize: '12px'
            }} 
          />
        </Box>
        <Typography variant="body2" sx={{ color: '#6B7280', mb: 2 }}>
          100 points
        </Typography>
        <Typography color={"black"}>
          Complete all the tasks and pass all the tests.
        </Typography>
      </TabPanel>

      <TabPanel value={activeTab} tabId="video">
        <Typography color={"black"}>Video content will be added soon...</Typography>
      </TabPanel>

      <TabPanel value={activeTab} tabId="tasks">
        <Typography color={"black"}>Tasks will be listed here...</Typography>
      </TabPanel>

      <TabPanel value={activeTab} tabId="tests">
        <Typography color={"black"}>Test cases will appear here...</Typography>
      </TabPanel>

      <TabPanel value={activeTab} tabId="solution">
        <Typography color={"black"}>
          Solution will be revealed after completing the challenge...
        </Typography>
      </TabPanel>

      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '1px solid #E5E7EB',
          p: 2
        }}
      >
        <Button
          startIcon={<ChevronLeftIcon />}
          sx={{
            color: '#6B7280',
            textTransform: 'none',
            '&:hover': {
              bgcolor: '#F3F4F6',
            },
          }}
        >
          prev
        </Button>
          |
        <Button
          endIcon={<ChevronRightIcon />}
          sx={{
            color: '#6B7280',
            textTransform: 'none',
            '&:hover': {
              bgcolor: '#F3F4F6',
            },
          }}
        >
          next
        </Button>
      </Box>
    </Box>
  );
}
