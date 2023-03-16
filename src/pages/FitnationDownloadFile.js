import React, { useEffect, useRef } from "react";

const FitnationDownloadFile = () => {
  const ref = useRef();
  useEffect(() => {
    const download = () => {
      ref.current.click();
    };
    setTimeout(download, 2000);
  }, []);
  return (
    <div className={""}>
      <a ref={ref} href="/fitnation.apk" style={{ display: "none" }} download>
        Click to download
      </a>
    </div>
  );
};

export default FitnationDownloadFile;
