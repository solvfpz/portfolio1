
import React from 'react';

const SectionSeparator: React.FC = () => (
  <div className="w-full h-8 my-8 border-y border-border/30 overflow-hidden relative opacity-60">
    <div className="absolute inset-0" style={{
      backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
      opacity: 0.15
    }}></div>
  </div>
);

export default SectionSeparator;
