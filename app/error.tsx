/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex justify-center">
      <h2>Quelques choses n'a pas bien fonctionné.</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Recommencer.
      </button>
    </div>
  );
}
