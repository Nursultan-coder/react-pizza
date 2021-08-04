import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="140" cy="130" r="120" />
      <rect x="0" y="264" rx="4" ry="4" width="280" height="24" />
      <rect x="9" y="460" rx="0" ry="0" width="31" height="6" />
      <rect x="0" y="306" rx="6" ry="6" width="280" height="60" />
      <rect x="11" y="392" rx="4" ry="4" width="70" height="30" />
      <rect x="136" y="391" rx="20" ry="20" width="140" height="35" />
    </ContentLoader>
  );
}

export default LoadingBlock;