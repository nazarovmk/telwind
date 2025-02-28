import { useEffect, useState } from "react";

export function UseFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setisPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Data not found");
        }

        const data = await req.json();
        setData(data);
      } catch (error) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setisPending(false);
      }
    };
    getData();
  }, [url]);

  return { data, isPending, error };
}
