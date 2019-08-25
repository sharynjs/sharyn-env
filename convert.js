const convertValue = value => {
  if (typeof value === 'string') {
    lowerCaseValue = value.toLowerCase()
    return lowerCaseValue === 'true'
      ? true
      : lowerCaseValue === 'false'
      ? false
      : lowerCaseValue === 'null'
      ? null
      : lowerCaseValue === 'undefined'
      ? undefined
      : value === '0'
      ? 0
      : value === '1'
      ? 1
      : value
    // Not converting other numbers, since they are way more ambiguous
    // eg. '16.8' for a version, or leading zeroes '007'.
  }
  return value
}

const convertObject = object => {
  const convertedObject = {}
  Object.keys(object).forEach(key => {
    convertedObject[key] = convertValue(object[key])
  })
  return convertedObject
}

module.exports = { convertValue, convertObject }
