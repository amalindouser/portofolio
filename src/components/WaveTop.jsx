// src/components/WaveTop.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';

const WaveTop = ({ fill = '#319795' }) => (
  <Box
    w="100vw"
    position="relative"
    left="0"
    right="0"
    overflow="hidden"
    lineHeight="0"
    mt="-1px"
    transform="rotate(180deg)"
  >
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <path
        fill={fill}
        fillOpacity="1"
        d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,128C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L0,320Z"
      />
    </svg>
  </Box>
);

export default WaveTop;
