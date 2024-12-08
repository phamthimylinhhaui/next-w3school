'use client';

import { Box, Typography, Button, Modal, Fade } from '@mui/material';
import Image from 'next/image';

interface CompileSuccessModalProps {
  open: boolean;
  onClose: () => void;
  points: number;
  totalPoints: number;
}

export default function CompileSuccessModal({
  open,
  onClose,
  points = 10,
  totalPoints = 36,
}: CompileSuccessModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            backgroundColor: '#1E1F25',
            borderRadius: 3,
            p: 4,
            width: '100%',
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            outline: 'none',
          }}
        >
          {/* Trophy Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: 2,
              bgcolor: '#4C6FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/assets/images/logo/w3.png"
              alt="Trophy"
              width={48}
              height={48}
            />
          </Box>

          {/* Congratulation Text */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 1,
              }}
            >
              Congratulation
            </Typography>
            <Typography
              sx={{
                color: '#9B9C9E',
                fontSize: '14px',
              }}
            >
              You&apos;ve passed this challenge
            </Typography>
          </Box>

          {/* Points Display */}
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography
              sx={{
                color: 'white',
                fontWeight: 600,
                fontSize: '18px',
                mb: 2,
              }}
            >
              +{points} Points
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: 6,
                bgcolor: 'rgba(255,255,255,0.1)',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: `${(points / totalPoints) * 100}%`,
                  bgcolor: '#4C6FFF',
                  borderRadius: 3,
                }}
              />
            </Box>
            <Typography
              sx={{
                color: '#9B9C9E',
                fontSize: '12px',
                mt: 1,
              }}
            >
              {points}/{totalPoints}
            </Typography>
          </Box>

          {/* Next Challenge Button */}
          <Button
            fullWidth
            onClick={onClose}
            sx={{
              bgcolor: '#4C6FFF',
              color: 'white',
              py: 1.5,
              textTransform: 'none',
              borderRadius: 2,
              '&:hover': {
                bgcolor: '#3B5EEE',
              },
            }}
          >
            Next Challenge
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
