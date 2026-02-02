import { useState } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setstate] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });
  // useeffect to make fetch requests - whatever functionality needed

  return state;
}
