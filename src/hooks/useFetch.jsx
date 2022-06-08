import { useEffect, useState } from 'react'


// this hook is for when using json-server

export default function useFetch(url, method = "GET") {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(false)
  const [options, setOptions] = useState(null)

  function deleteData() {
    setOptions({
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  function postData(data) {
    setOptions({
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  useEffect(() => {
    async function fetchData(fetchOptions) {


      try {
        setPending(true)
        const res = await fetch(url, { ...fetchOptions })
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()
        setData(data)
        setPending(false)
      } catch (err) {
        setError(err)
        setPending(false)
      }
    }

    if (method === "GET") {
      fetchData()
    }
    if (method === "POST") {
      fetchData(options)
    }
    if (method === 'DELETE') {
      fetchData(options)
    }

  }, [url, options, method])
  return { data, error, pending, postData, deleteData }
}
