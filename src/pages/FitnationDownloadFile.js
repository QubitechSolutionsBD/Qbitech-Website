import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const FitnationDownloadFile = () => {
  const ref = useRef();
  const navigate = useHistory();
  useEffect(() => {
    const download = () => {
      ref.current.click();
      navigate.push(`/fitnation`);
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
