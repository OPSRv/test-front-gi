import { useState, useCallback } from "react";

export default function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e) => setValue(e.currentTarget.value), []);

  return {
    value,
    onChange,
  };
}
