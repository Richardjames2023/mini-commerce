// lib/utils/highlight.tsx
import React from 'react';

export function highlight(text: string, keyword: string): (string | JSX.Element)[] {
  if (!text || !keyword) return [text];

  const regex = new RegExp(`(${keyword})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <mark key={index} className="bg-yellow-200 px-1 rounded">
        {part}
      </mark>
    ) : (
      part
    )
  );
}
