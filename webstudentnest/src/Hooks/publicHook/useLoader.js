import { useEffect, useState } from "react";

export function UseLoader() {
  const [loaderFalg, setLoaderFalg] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderFalg(false);
    }, 100);
  }, []);

  return { loaderFalg };
}
