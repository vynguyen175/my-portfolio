"use client";

export function DiagonalLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="diagonal-lines"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="200"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
    </svg>
  );
}
