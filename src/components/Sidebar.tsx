import React from 'react';

export default function Sidebar({ children }: any) {
  return <div className="hidden md:block md:w-1/4">{children}</div>;
}
