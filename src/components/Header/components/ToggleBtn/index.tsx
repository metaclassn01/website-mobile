import { motion } from 'framer-motion';
import * as React from 'react';

const Path = (props: any) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='#38f7ff'
    strokeLinecap='round'
    {...props}
  />
);

export const ToggleBtn = () => (
  <svg width='20' height='16' viewBox='0 0 20 16'>
    <Path
      variants={{
        closed: { d: 'M 2 2 L 18 2' },
        open: { d: 'M 2 14 L 14 2' },
      }}
      transition={{ duration: 0.5 }}
    />
    <Path
      d='M 2 8 L 18 8'
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      transition={{ duration: 0.2 }}
    />
    <Path
      variants={{
        closed: { d: 'M 2 14 L 18 14' },
        open: { d: 'M 2 2 L 14 14' },
      }}
      transition={{ duration: 0.5 }}
    />
  </svg>
);

export default ToggleBtn;
