import React from 'react';

export const Footer = () => {
  return (
    <div className="text-center copy-right">
      &copy; CRM. All rights are reserved. &mdash; {new Date().getFullYear()}
    </div>
  );
};
