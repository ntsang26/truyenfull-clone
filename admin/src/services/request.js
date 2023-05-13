import { config, helper, local } from './'

let request = {}

request.request = async ({ url, data, headers, method = 'POST', isPublic = false }) => {
  try {
    url = `${config.HOST + '/'}${url}`
    let option = {
      method, // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${local.get('session') || config.BASIC_TOKEN}`,
      },
    }
    option.headers = Object.assign({}, option.headers, headers)
    if (method === 'GET') delete option.body

    if (config.debug) console.log(`[${method}]`, url, option)

    let res = await fetch(url, option)

    let rs = await res.json()
    if (config.debug) console.log(`[RESPONSE]`, url, rs)
    switch (res.status) {
      case 401:
        helper.toast('error', rs.errorMsg || 'internalServerError')
        window.location.href = '/#/login'
        break
      case 403:
        helper.toast('error', rs.errorMsg || "You don't have permission")
        break
      case 500:
        helper.toast('error', rs.errorMsg || 'internalServerError')
        break
      case 200:
        if (rs && rs.errorCode === 0) {
          return rs
        } else {
          helper.toast('error', rs.errorMsg || 'internalServerError')
          break
        }
      case 404:
        if (isPublic) {
          window.location.href = '/#/404'
        } else {
          helper.toast('error', rs.errorMsg || 'dataNotFound')
        }
        break
      case 400:
        if (rs.code && rs.code === 'E_MISSING_OR_INVALID_PARAMS') {
          helper.toast('error', 'Invalid parameters')
        } else {
          helper.toast('error', rs.errorMsg || 'Bad Request')
        }
        break
      default:
        throw rs
    }
    return rs
  } catch (err) {
    helper.toast('error', 'internalServerError')
    console.log('res', err)
    throw err
  }
}
export default request