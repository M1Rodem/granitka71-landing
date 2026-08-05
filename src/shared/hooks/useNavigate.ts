import { useCallback } from 'react'

export function useNavigate() {
  const navigate = useCallback((url: string) => {
    window.location.href = url
  }, [])

  return navigate
}