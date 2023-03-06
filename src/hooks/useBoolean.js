import { useCallback, useState } from 'react';

const useBoolean = (defaultValue) => {
  const [value, setValue] = useState(Boolean(defaultValue));

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, setValue, setTrue, setFalse, toggle };
};

export default useBoolean;
