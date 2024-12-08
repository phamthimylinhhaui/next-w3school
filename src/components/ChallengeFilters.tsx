'use client';

import { Box, TextField, Select, MenuItem, InputAdornment, useTheme, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface ChallengeFiltersProps {
  onSearch: (value: string) => void;
  onSortChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
}

export default function ChallengeFilters({
  onSearch,
  onSortChange,
  onStatusChange,
  onLanguageChange,
  onDifficultyChange,
}: ChallengeFiltersProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const selectStyles = {
    backgroundColor: '#1E1F25',
    color: '#F2F3F5',
    width: { xs: '100%', sm: 120 },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#4C6FFF',
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1.5, sm: 2 },
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          flexWrap: 'wrap',
          order: { xs: 2, sm: 1 },
        }}
      >
        <Select
          size="small"
          defaultValue="newest"
          onChange={(e) => onSortChange(e.target.value)}
          sx={selectStyles}
        >
          <MenuItem value="newest">Sort</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
          <MenuItem value="az">A-Z</MenuItem>
          <MenuItem value="za">Z-A</MenuItem>
        </Select>

        <Select
          size="small"
          defaultValue="all"
          onChange={(e) => onStatusChange(e.target.value)}
          sx={selectStyles}
        >
          <MenuItem value="all">Status</MenuItem>
          <MenuItem value="solved">Solved</MenuItem>
          <MenuItem value="unsolved">Unsolved</MenuItem>
        </Select>

        <Select
          size="small"
          defaultValue="all"
          onChange={(e) => onLanguageChange(e.target.value)}
          sx={selectStyles}
        >
          <MenuItem value="all">Language</MenuItem>
          <MenuItem value="python">Python</MenuItem>
          <MenuItem value="javascript">JavaScript</MenuItem>
        </Select>

        <Select
          size="small"
          defaultValue="all"
          onChange={(e) => onDifficultyChange(e.target.value)}
          sx={selectStyles}
        >
          <MenuItem value="all">Difficulty</MenuItem>
          <MenuItem value="beginner">Beginner</MenuItem>
          <MenuItem value="intermediate">Intermediate</MenuItem>
          <MenuItem value="advanced">Advanced</MenuItem>
        </Select>
      </Box>

      <TextField
        size="small"
        placeholder="Search Challenge"
        onChange={(e) => onSearch(e.target.value)}
        sx={{
          flex: { xs: '1 1 100%', sm: 1 },
          order: { xs: 1, sm: 2 },
          backgroundColor: '#1E1F25',
          '& .MuiOutlinedInput-root': {
            color: '#F2F3F5',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4C6FFF',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#9B9C9E' }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
