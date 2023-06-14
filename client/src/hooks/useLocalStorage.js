import {useEffect, useState} from 'react'

const PREFIX = 'chat-app'
 function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(()=> {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) return JSON.parse(jsonValue)
    if (typeof initialValue === 'function'){
        return initialValue()
    }else {
        return initialValue
    }
  })
}

export default useLocalStorage;