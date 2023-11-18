import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'
import React from 'react'

export const WavyDivider = ({invertColors}) => {
    const theme = useTheme();

    // Check if theme.palette and theme.palette.background are defined
    const backgroundColor = theme?.pa

    const styles = `
        .editorial { 
            display: block;
            width: 100%;
            height: 60px;
            max-height: 60px;
            margin: 0;
            z-index:5;
            
            
        }
        
        .parallax1 > use {
            animation: move-forever1 10s linear infinite;
            &:nth-child(1) {
            animation-delay: -2s;
            }
        }
        .parallax2 > use {
            animation: move-forever2 8s linear infinite;
            &:nth-child(1) {
            animation-delay: -2s;
            }
        }
        .parallax3 > use {
            animation: move-forever3 6s linear infinite;
            &:nth-child(1) {
            animation-delay: -2s;
            }
        }
        .parallax4 > use {
            animation: move-forever4 4s linear infinite;
            &:nth-child(1) {
            animation-delay: -2s;
            }
        }
        @keyframes move-forever1 {
            0% {
            transform: translate(85px, 0%);
            }
            100% {
            transform: translate(-90px, 0%);
            }
        }
        @keyframes move-forever2 {
            0% {
            transform: translate(-90px, 0%);
            }
            100% {
            transform: translate(85px, 0%);
            }
        }
        @keyframes move-forever3 {
            0% {
            transform: translate(85px, 0%);
            }
            100% {
            transform: translate(-90px, 0%);
            }
        }
        @keyframes move-forever4 {
            0% {
            transform: translate(-90px, 0%);
            }
            100% {
            transform: translate(85px, 0%);
            }
        }
    `

    return (
        <Box sx={{ backgroundColor: invertColors ? theme?.palette?.primary?.main : backgroundColor }}>
          <style>{styles}</style>
          <svg className="editorial"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsxlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none"
          >
            {/* ... */}
          </svg>
        </Box>
      );
    
}
