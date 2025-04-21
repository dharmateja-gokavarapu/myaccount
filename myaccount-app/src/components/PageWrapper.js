import { useEffect, useRef } from 'react';

const PageWrapper = ({ children, beforePageLoad, afterPageLoad }) => {
  const hasRun = useRef(false);

  // Runs once after mount (after render)
  useEffect(() => {
    if (beforePageLoad && !hasRun.current) {
      beforePageLoad(); // This will now run even on refresh
    }

    if (afterPageLoad && !hasRun.current) {
      afterPageLoad();
      hasRun.current = true;
    }
  }, [beforePageLoad, afterPageLoad]);

  return <div>{children}</div>;
};

export default PageWrapper;
