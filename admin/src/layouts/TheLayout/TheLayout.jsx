import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { local } from '../../services'

const TheLayout = () => {
  const history = useHistory()

  useEffect(() => {
    fetchData()
    return () => { }
  }, [history])

  const fetchData = () => {
    try {
      let session = local.get('session')
      if (!session) {
        history.replace('/login')
        return
      }
    } catch (error) {
      console.error(error)
      history.replace('/login')
    }
  }
  return (
    <div>TheLayout</div>
  )
}

export default TheLayout