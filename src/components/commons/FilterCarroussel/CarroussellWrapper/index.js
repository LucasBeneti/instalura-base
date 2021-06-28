import React from 'react';
import styled, { css } from 'styled-components';

export const CarrousselWrapper = styled.div`
  display: flex;
  width: auto;
  height: auto;
  overflow-x: auto;
  overflow-y: none;
  gap: 0.5rem;
  margin-bottom: 20px;
`;

CarrousselWrapper.Filters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  margin-bottom: 10px;
  /* height: 100%; */

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  [class*='filter'] {
    position: relative;
  }
  [class*='filter']::before {
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  .filter-1977 {
    -webkit-filter: sepia(0.5) hue-rotate(-30deg) saturate(1.4);
    filter: sepia(0.5) hue-rotate(-30deg) saturate(1.4);
  }
  .filter-amaro {
    -webkit-filter: sepia(0.35) contrast(1.1) brightness(1.2) saturate(1.3);
    filter: sepia(0.35) contrast(1.1) brightness(1.2) saturate(1.3);
  }
  .filter-amaro::before {
    background: rgba(125, 105, 24, 0.2);
    content: '';
    mix-blend-mode: overlay;
  }

  .filter-brannan {
    -webkit-filter: sepia(0.4) contrast(1.25) brightness(1.1) saturate(0.9) hue-rotate(-2deg);
    filter: sepia(0.4) contrast(1.25) brightness(1.1) saturate(0.9) hue-rotate(-2deg);
  }
  .filter-charmes {
    -webkit-filter: sepia(0.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);
    filter: sepia(0.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);
  }
  .filter-charmes::before {
    background: rgba(125, 105, 24, 0.25);
    content: '';
    mix-blend-mode: darken;
  }

  .filter-lofi {
    -webkit-filter: saturate(1.1) contrast(1.5);
    filter: saturate(1.1) contrast(1.5);
  }
  .filter-ludwig {
    -webkit-filter: sepia(0.25) contrast(1.05) brightness(1.05) saturate(2);
    filter: sepia(0.25) contrast(1.05) brightness(1.05) saturate(2);
  }
  .filter-ludwig::before {
    background: rgba(125, 105, 24, 0.1);
    content: '';
    mix-blend-mode: overlay;
  }

  .filter-moon {
    -webkit-filter: brightness(1.4) contrast(0.95) saturate(0) sepia(0.35);
    filter: brightness(1.4) contrast(0.95) saturate(0) sepia(0.35);
  }
`;
