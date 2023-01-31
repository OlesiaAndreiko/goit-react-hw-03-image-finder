import ContentLoader from 'react-content-loader';

export const ImageSkeleton = () => (
  <ContentLoader
    width={900}
    height={775}
    viewBox="0 0 900 775"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >

    <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
    <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
    <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
    <rect x="693" y="55" rx="2" ry="2" width="211" height="211" />
    <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
    <rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
    <rect x="468" y="279" rx="2" ry="2" width="211" height="211" />
    <rect x="692" y="277" rx="2" ry="2" width="211" height="211" />
    <rect x="12" y="508" rx="2" ry="2" width="211" height="211" />
    <rect x="240" y="506" rx="2" ry="2" width="211" height="211" />
    <rect x="467" y="504" rx="2" ry="2" width="211" height="211" />
    <rect x="691" y="504" rx="2" ry="2" width="211" height="211" />
   
   
  </ContentLoader>
);