'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning then default ifself', () => {
  //convert(2, 'BTC', 'BTC');
    expect(convert(2, 'BTC', 'BTC')).toEqual(2);
});

test('should return a number', () => {
  //convert(2, 'BTC', 'BTC', 'Number');
    expect(isNaN(convert(2, 'BTC', 'BTC', 'Number'))).toBe(false);
});

test('should return a Big number', () => {
  //convert(2, 'BTC', 'BTC', 'Big');
    expect(convert(2, 'BTC', 'BTC', 'Big')).toEqual(Big(2));
});

test('should return a string', () => {
  //convert(2100, 'mBTC', 'BTC', 'String');
      expect(typeof(convert(2100, 'mBTC', 'BTC', 'String'))).toEqual('string');
});

test('should convert a number from interger', () => {
  //convert(123456789012345, 'Satoshi', 'BTC', 'Number');
expect(Number.isInteger(123456789012345)).toBe(true);
  expect(isNaN(convert(123456789012345, 'Satoshi', 'BTC', 'Number'))).toBe(false);
});

test('should convert a number from float', () => {
  //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
expect(parseFloat(1234567.89012345)).toEqual(1234567.89012345);
  expect(isNaN(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number'))).toBe(false);
});

test('should convert a string', () => {
  //convert('2', 'BTC', 'BTC', 'Number');
    expect(typeof '2').toEqual('string');
  expect(isNaN(convert('2', 'BTC', 'BTC', 'Number'))).toBe(false);
});

test('should convert a Big number', () => {
  //convert(new Big(2), 'BTC', 'BTC', 'Number');
expect(typeof(new Big(2))).toEqual(typeof(Big(2)));
      expect(isNaN(convert('2', 'BTC', 'BTC', 'Number'))).toBe(false);

});

test('should convert a NaN to a number', () => {
  //convert(NaN, 'BTC', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'mBTC', 'Number');
    expect(isNaN(NaN)).toBe(true);
//expect(convert(NaN, 'BTC', 'mBTC', 'Number')).tothrow(TypeError);

});

test('should convert a NaN to a string', () => {
  //convert(NaN, 'BTC', 'BTC', 'String');
  //convert(NaN, 'BTC', 'mBTC', 'String');
  throw new Error('test not yet defined... write your test here');
});

test('should not convert a NaN to a Big', () => {
  //convert(NaN, 'BTC', 'BTC', 'Big');
  throw new Error('test not yet defined... write your test here');
});

test('should handle rounding errors', () => {
  //convert(4.6, 'Satoshi', 'BTC', 'Number');
  //convert(0.000000046, 'BTC', 'Satoshi', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should throw when untest is undefined', () => {
  //convert(new Big(2), 'x', 'BTC', 'Number');
  //convert(new Big(2), 'BTC', 'x', 'Number');
  //convert(NaN, 'x', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'x', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should throw when representaion is undefined', () => {
  //convert(2, 'BTC', 'mBTC', 'x');
  //convert(NaN, 'BTC', 'mBTC', 'x');
  throw new Error('test not yet defined... write your test here');
});

test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'bit');
  throw new Error('test not yet defined... write your test here');
});
