import { useRef } from 'react';


function useDebounce(fn, delay) {
  const timeoutRef = useRef(null);

  function debouncedFunction(...params) {
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fn(params)
    }, delay);

  }

  return debouncedFunction;
}

export default useDebounce;