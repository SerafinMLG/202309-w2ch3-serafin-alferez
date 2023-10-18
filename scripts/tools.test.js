import { arrayLength } from "./tools.js";
import { arrayPush } from "./tools.js";
import { arrayPop } from "./tools.js";

describe('Given arrayLength', () => {

  test('should first', () => {
    const testData = [];
    const expected = 0;
    const result = arrayLength(testData)
    expect(result).toBe(expected)
  })

  test('should first', () => {
    const testData = [4];
    const expected = 1;
    const result = arrayLength(testData)
    expect(result).toBe(expected)
  })

  test('should first', () => {
    const testData = [1,2];
    const expected = 2;
    const result = arrayLength(testData)
    expect(result).toBe(expected)
  })

  test('should first', () => {
    const testData = [null,undefined,NaN];
    const expected = 3;
    const result = arrayLength(testData)
    expect(result).toBe(expected)
  })

  test('should first', () => {
    const testData = ['',undefined,NaN, ,1];
    const expected = 5;
    const result = arrayLength(testData)
    expect(result).toBe(expected)
  })

})

describe('When the argument is ', () => {
  test('With empty arrey and push "" result should be ', () => {
    const item = "";
    let testD = [];
    const expected = 1;
    const result = arrayPush(testD,item)
    expect(result).toBe(expected)
  })

  test('With empty arrey and push null result should be ', () => {
    const item = null;
    let testD = [];
    const expected = 1;
    const result = arrayPush(testD,item)
    expect(result).toBe(expected)
  })

  test('With empty arrey and push undefined result should be ', () => {
    const item = null;
    let testD = [];
    const expected = 1;
    const result = arrayPush(testD,item)
    expect(result).toBe(expected)
  })

  test('should first', () => {
    const item = undefined;
    let testD = [];
    const expected = 1;
    const result = arrayPush(testD,item)
    expect(result).toBe(expected)
  })
  
})

describe('When the argument is ', () => {
  test('With my testD arrey and pop result should be ', () => {
    let testD = ["a","b","c"];
    const expected = "c";
    const result = arrayPop(testD)
    expect(result).toBe(expected)
  })

  test('With my testD arrey and pop result should be ', () => {
    let testD = ["a","b",undefined];
    const expected = undefined;
    const result = arrayPop(testD)
    expect(result).toBe(expected)
  })

  test('With my testD arrey and pop result should be ', () => {
    let testD = ["a","b",null];
    const expected = null;
    const result = arrayPop(testD)
    expect(result).toBe(expected)
  })

  test('With my testD arrey and pop result should be ', () => {
    let testD = ["a","b",Infinity];
    const expected = Infinity;
    const result = arrayPop(testD)
    expect(result).toBe(expected)
  })

});
