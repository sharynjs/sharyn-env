const { convertValue, convertObject } = require('./convert')

test('convertValue', () => {
  expect(convertValue('true')).toBe(true)
  expect(convertValue('True')).toBe(true)
  expect(convertValue('TRUE')).toBe(true)
  expect(convertValue('tRuE')).toBe(true)
  expect(convertValue('false')).toBe(false)
  expect(convertValue('False')).toBe(false)
  expect(convertValue('FALSE')).toBe(false)
  expect(convertValue('fAlSe')).toBe(false)
  expect(convertValue('null')).toBe(null)
  expect(convertValue('Null')).toBe(null)
  expect(convertValue('NULL')).toBe(null)
  expect(convertValue('nUlL')).toBe(null)
  expect(convertValue('undefined')).toBe(undefined)
  expect(convertValue('Undefined')).toBe(undefined)
  expect(convertValue('UNDEFINED')).toBe(undefined)
  expect(convertValue('uNdEfInEd')).toBe(undefined)
  expect(convertValue('0')).toBe(0)
  expect(convertValue('1')).toBe(1)
  expect(convertValue('2')).toBe('2')
  expect(convertValue(0)).toBe(0)
  expect(convertValue(1)).toBe(1)
  expect(convertValue(2)).toBe(2)
  expect(convertValue('')).toBe('')
  expect(convertValue(undefined)).toBe(undefined)
  expect(convertValue(null)).toBe(null)
})

test('convertObject', () => {
  expect(
    convertObject({
      '1234': '1234',
      URL: 'http://abc',
      '1.0': '1.0',
      '1.0.0': '1.0.0',
      true: 'true',
      false: 'false',
      '1': '1',
      '0': '0',
      '': '',
      null: 'null',
      undefined: 'undefined',
    })
  ).toEqual({
    '1234': '1234',
    URL: 'http://abc',
    '1.0': '1.0',
    '1.0.0': '1.0.0',
    true: true,
    false: false,
    '1': 1,
    '0': 0,
    '': '',
    null: null,
    undefined: undefined,
  })
})
