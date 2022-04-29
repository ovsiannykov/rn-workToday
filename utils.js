export const createFile = (uri) => {
  let time = new Date().getTime()
  let exp = uri.split('.')[uri.split('.').length - 1]
  let newFile = {
    uri,
    type: `${time}/${exp}`,
    name: `${time}.${exp}`
  }
  return newFile
}
