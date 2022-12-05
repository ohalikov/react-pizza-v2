import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="-1" y="280" rx="3" ry="3" width="280" height="27" />
    <rect x="0" y="327" rx="3" ry="3" width="280" height="88" />
    <circle cx="140" cy="130" r="130" />
    <rect x="0" y="447" rx="0" ry="0" width="95" height="27" />
    <rect x="133" y="437" rx="0" ry="0" width="150" height="45" />
  </ContentLoader>
);
