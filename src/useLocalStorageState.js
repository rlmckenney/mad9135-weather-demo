// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'

export default function useLocalStorageState (key, initialState) {
  const [state, setState] = useState(() => {
    const storedValue = window.localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialState
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
