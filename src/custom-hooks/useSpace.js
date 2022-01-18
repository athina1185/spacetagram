import { useState, useEffect } from "react";

export default function useSpace(url) {
  const [spaceData, setSpaceData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const getSpaceData = async () => {
      try {
        const datafromApi = await fetch(`${url}&count=10`);
        const result = await datafromApi.json();
        setSpaceData(result);
      } catch (error) {
        setError(error);
      }
    };
    getSpaceData();
  }, [url]);
  return [error, spaceData];
}
