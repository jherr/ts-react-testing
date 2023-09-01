import React, { useEffect, useState } from "react";

export const ApiFetchComponent: React.FunctionComponent = () => {
  const [data, setData] = useState<{ name: string }>();
  useEffect(() => {
    let isMounted = true;
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>;
};
