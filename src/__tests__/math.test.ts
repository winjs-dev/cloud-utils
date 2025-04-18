import { describe, it, expect } from 'vitest';
import { mathAdd, mathSubtract, mathMultiply, mathDivide } from '../math';

describe('数学运算函数', () => {
  describe('加法', () => {
    it('应该正确处理整数加法', () => {
      expect(mathAdd(1, 2)).toBe(3);
    });

    it('应该正确处理浮点数加法', () => {
      expect(mathAdd(0.1, 0.2)).toBe(0.3);
    });

    it('应该正确处理字符串数字', () => {
      expect(mathAdd('0.1', '0.2')).toBe(0.3);
    });
  });

  describe('减法', () => {
    it('应该正确处理整数减法', () => {
      expect(mathSubtract(3, 1)).toBe(2);
    });

    it('应该正确处理浮点数减法', () => {
      expect(mathSubtract(0.3, 0.1)).toBe(0.2);
    });
  });

  describe('乘法', () => {
    it('应该正确处理整数乘法', () => {
      expect(mathMultiply(2, 3)).toBe(6);
    });

    it('应该正确处理浮点数乘法', () => {
      expect(mathMultiply(0.1, 0.2)).toBe(0.02);
    });
  });

  describe('除法', () => {
    it('应该正确处理整数除法', () => {
      expect(mathDivide(6, 2)).toBe(3);
    });

    it('应该正确处理浮点数除法', () => {
      expect(mathDivide(0.1, 0.2)).toBe(0.5);
    });

    it('应该正确处理字符串数字', () => {
      expect(mathDivide('0.1', '0.2')).toBe(0.5);
    });

    it('除数为0时应该抛出错误', () => {
      expect(() => mathDivide(1, 0)).toThrow('除数不能为0');
    });
  });
}); 