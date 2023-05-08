import request from './request.js'

const paths = {
  story: {
    getStory: 'api/v1/stories',
    createStory: 'api/v1/stories/add',
  },
  author: {
    getAuthor: 'api/v1/author',
    createAuthor: 'api/v1/author/add'
  },
  category: {
    getCategory: 'api/v1/category',
    createCategory: 'api/v1/category/add'
  },
  auth: {
    login: 'api/v1/auth/login'
  }
}

let api = {}

const flattenObject = (obj) => {
  let flattened = {}
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(flattened, flattenObject(obj[key]))
    } else {
      flattened[key] = obj[key]
    }
  })
  return flattened
}

const flattenedPaths = flattenObject(paths)

for (let key in flattenedPaths) {
  api[key] = async function (data, options = {}) {
    let { headers, method, isPublic } = options
    return await request.request({
      url: flattenedPaths[key],
      data,
      headers,
      method,
      isPublic,
    })
  }
}

export { api }
