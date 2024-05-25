import { FC, useEffect, useState } from "react";
import { Button } from "shared/ui/Button";


export const BugButton  = () => {
  const [error, setError] = useState<boolean>(false);

  const handleThrow = () => {
    setError(true);
  };

  useEffect(() => {
    throw new Error("error");
  }, []);

  return (
    <Button  onClick={handleThrow}>
      throw error
    </Button>
  );
};
