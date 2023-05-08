let local = {}

local.get = (key) => {
  let t = sessionStorage.getItem(key)
  try {
    return JSON.parse(t)
  } catch (err) {
    return t
  }
}
local.set = (key, val) => {
  sessionStorage.setItem(key, val)
}
local.clear = () => {
  sessionStorage.clear()
}
export default local
