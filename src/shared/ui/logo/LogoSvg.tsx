import { forwardRef } from 'react'

import type { LogoProps } from './logo.types'

export const LogoSvg = forwardRef<SVGSVGElement, LogoProps>(
  function LogoSvg({ size = 128, variant = 'default' }, ref) {
    const colors = {
      default: {
        shield: '#1a1a2e',
        shieldLight: '#2a2a4e',
        shieldDark: '#0f0f1a',
        cross: '#c8b491',
        crossLight: '#e0d4b8',
        mountains: '#3a3a5e',
        mountainLight: '#4a4a6e',
        mountainDark: '#2a2a4e',
        branches: '#8a8a9a',
        branchLight: '#a0a0b0',
        ground: '#2a2a3e',
        groundLight: '#3a3a4e',
      },
      monochrome: {
        shield: '#1a1a2e',
        shieldLight: '#2a2a4e',
        shieldDark: '#0f0f1a',
        cross: '#e8e8f0',
        crossLight: '#ffffff',
        mountains: '#3a3a5e',
        mountainLight: '#4a4a6e',
        mountainDark: '#2a2a4e',
        branches: '#8a8a9a',
        branchLight: '#a0a0b0',
        ground: '#2a2a3e',
        groundLight: '#3a3a4e',
      },
      inverse: {
        shield: '#e8e8f0',
        shieldLight: '#f0f0f8',
        shieldDark: '#d0d0e0',
        cross: '#1a1a2e',
        crossLight: '#2a2a4e',
        mountains: '#c0c0d0',
        mountainLight: '#d0d0e0',
        mountainDark: '#a0a0b0',
        branches: '#a0a0b0',
        branchLight: '#b0b0c0',
        ground: '#d0d0e0',
        groundLight: '#e0e0f0',
      },
    }

    const c = colors[variant]

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Гранитка71"
      >
        {/* Ground / Base */}
        <path
          d="M8 108 Q32 100 64 104 Q96 100 120 108 L120 116 Q96 112 64 116 Q32 112 8 116 Z"
          fill={c.ground}
        />
        <path
          d="M16 112 Q40 106 64 110 Q88 106 112 112 L112 116 Q88 112 64 116 Q40 112 16 116 Z"
          fill={c.groundLight}
          opacity="0.5"
        />

        {/* Left Laurel Branch */}
        <g transform="translate(8, 88)">
          {/* Stem */}
          <path
            d="M8 20 Q6 12 10 4 Q14 -4 20 -8"
            stroke={c.branches}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Leaves */}
          <ellipse cx="6" cy="16" rx="4" ry="2.5" fill={c.branchLight} transform="rotate(-30 6 16)" />
          <ellipse cx="4" cy="10" rx="4" ry="2.5" fill={c.branches} transform="rotate(-20 4 10)" />
          <ellipse cx="7" cy="4" rx="4" ry="2.5" fill={c.branchLight} transform="rotate(-40 7 4)" />
          <ellipse cx="12" cy="-2" rx="4" ry="2.5" fill={c.branches} transform="rotate(-50 12 -2)" />
          <ellipse cx="18" cy="-6" rx="3.5" ry="2" fill={c.branchLight} transform="rotate(-60 18 -6)" />
        </g>

        {/* Right Laurel Branch */}
        <g transform="translate(112, 88) scale(-1, 1)">
          {/* Stem */}
          <path
            d="M8 20 Q6 12 10 4 Q14 -4 20 -8"
            stroke={c.branches}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Leaves */}
          <ellipse cx="6" cy="16" rx="4" ry="2.5" fill={c.branchLight} transform="rotate(-30 6 16)" />
          <ellipse cx="4" cy="10" rx="4" ry="2.5" fill={c.branches} transform="rotate(-20 4 10)" />
          <ellipse cx="7" cy="4" rx="4" ry="2.5" fill={c.branchLight} transform="rotate(-40 7 4)" />
          <ellipse cx="12" cy="-2" rx="4" ry="2.5" fill={c.branches} transform="rotate(-50 12 -2)" />
          <ellipse cx="18" cy="-6" rx="3.5" ry="2" fill={c.branchLight} transform="rotate(-60 18 -6)" />
        </g>

        {/* Shield */}
        <path
          d="M24 16 L64 8 L104 16 L104 56 Q104 84 64 100 Q24 84 24 56 Z"
          fill={c.shield}
          stroke={c.shieldLight}
          strokeWidth="1"
        />

        {/* Shield inner highlight */}
        <path
          d="M28 20 L64 12 L100 20 L100 54 Q100 80 64 94 Q28 80 28 54 Z"
          fill={c.shieldLight}
          opacity="0.15"
        />

        {/* Shield top highlight */}
        <path
          d="M28 20 L64 12 L100 20 L100 28 Q64 20 28 28 Z"
          fill={c.shieldLight}
          opacity="0.2"
        />

        {/* Mountains */}
        <path
          d="M32 72 L48 44 L64 56 L80 36 L96 68 L96 76 Q64 88 32 76 Z"
          fill={c.mountains}
        />
        <path
          d="M48 44 L64 56 L80 36 L88 52 L80 48 L64 64 L48 52 Z"
          fill={c.mountainLight}
          opacity="0.4"
        />
        <path
          d="M32 72 L48 44 L52 52 L48 56 L40 68 Z"
          fill={c.mountainDark}
          opacity="0.6"
        />
        <path
          d="M80 36 L96 68 L92 64 L84 48 Z"
          fill={c.mountainDark}
          opacity="0.6"
        />

        {/* Mountain snow caps */}
        <path
          d="M48 44 L52 50 L48 52 L44 48 Z"
          fill={c.crossLight}
          opacity="0.3"
        />
        <path
          d="M80 36 L84 44 L80 46 L76 40 Z"
          fill={c.crossLight}
          opacity="0.3"
        />

        {/* Cross */}
        <g transform="translate(64, 28)">
          {/* Vertical */}
          <rect x="-2.5" y="-14" width="5" height="28" rx="1" fill={c.cross} />
          {/* Horizontal */}
          <rect x="-9" y="-5" width="18" height="5" rx="1" fill={c.cross} />
          {/* Highlight */}
          <rect x="-1.5" y="-13" width="2" height="26" rx="0.5" fill={c.crossLight} opacity="0.5" />
          <rect x="-8" y="-4" width="14" height="2" rx="0.5" fill={c.crossLight} opacity="0.5" />
        </g>

        {/* Subtle shine on shield */}
        <path
          d="M32 24 Q64 16 96 24 L96 32 Q64 24 32 32 Z"
          fill="white"
          opacity="0.05"
        />
      </svg>
    )
  }
)

LogoSvg.displayName = 'LogoSvg'