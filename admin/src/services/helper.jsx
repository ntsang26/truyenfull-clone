import React from 'react'
import { toast } from 'react-toastify'
toast.configure()

const helper = {}

helper.toast = (type, content, disableAutoClose) => {
  let autoClose = 3000
  if (disableAutoClose) {
    autoClose = false
  }
  if (type === 'push') {
    return toast.info(
      <div>
        <div className='d-flex align-items-center'>
          <h4 className='mb-0 ml-2'>{content.title}</h4>
        </div>
        <p>{content.body}</p>
      </div>
    )
  }
  if (type) {
    toast[type](Toast(type, content), {
      position: toast.POSITION.TOP_RIGHT,
      autoClose,
    })
  } else {
    toast(Toast(type, content), {
      position: toast.POSITION.TOP_RIGHT,
      autoClose,
    })
  }
}

helper.getPage = (sid) => {
  const StrPage = sessionStorage.getItem('sPage')
  const sPage = JSON.parse(StrPage)
  const page = sPage.find((item) => item.sid === sid)
  return page || {}
}

helper.cloneDeep = (obj) => {
  const cloneData = {}
  for (const key in obj) {
    if (typeof key !== 'object') {
      cloneData[key] = obj[key]
    } else {
      cloneData[key] = { ...obj[key] }
    }
  }
  return cloneData
}

helper.getItem = (label, key, icon, children) => {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Toast = (type, content) => {
  if (type === 'success') {
    content = content ? content : 'Success'
  } else if (type === 'error') {
    content = !content ? 'Error' : content
  }
  return <div>&nbsp;{content}</div>
}
export default helper
