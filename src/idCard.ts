/**
 * 身份证工具类
 * 基于 idcard 库的二次封装，提供更好的类型安全和错误处理
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2025-09-23 16:21
 * @LastEditTime: 2025-09-23 16:21
 * @Description: 身份证号码验证、解析、生成等实用工具
 */
import idCard from 'idcard';

/**
 * 身份证信息接口
 */
export interface IdCardInfo {
  /** 省份 */
  province: string;
  /** 城市 */
  city: string;
  /** 区县 */
  area: string;
  /** 出生日期 */
  birthday: string;
  /** 性别：M-男，F-女 */
  gender: 'M' | 'F';
  /** 年龄 */
  age: number;
  /** 星座 */
  constellation: string;
  /** 生肖（基于出生年份计算） */
  zodiac: string;
}

/**
 * 生成身份证配置选项（基于idcard库的实际API）
 */
export interface GenerateIdCardOptions {
  /** 地区代码 */
  areaCode?: string;
  /** 出生日期，格式：YYYY-MM-DD */
  birthday?: string;
  /** 派出所代码 */
  localPolice?: string;
  /** 性别：Number类型，1-男，0-女 */
  gener?: Number;
}

/**
 * 操作结果接口
 */
export interface IdCardResult<T = any> {
  /** 是否成功 */
  success: boolean;
  /** 结果数据 */
  data?: T;
  /** 错误信息 */
  error?: string;
}

/**
 * 根据年份计算十二生肖
 * @param year 年份
 * @returns 生肖名称
 */
const calculateZodiac = (year: number): string => {
  const zodiacs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
  // 1900年是鼠年，以此为基准计算
  const index = (year - 1900) % 12;
  return zodiacs[index];
};

/**
 * 验证身份证号码格式和有效性
 * @param idCardNumber 身份证号码
 * @returns 验证结果，包含成功状态和错误信息
 * 
 * @example
 * ```typescript
 * const result = validateIdCard('110101199003070134');
 * if (result.success) {
 *   console.log('身份证号码有效');
 * } else {
 *   console.log('验证失败:', result.error);
 * }
 * ```
 */
export const validateIdCard = (idCardNumber: string): IdCardResult<boolean> => {
  // 参数验证
  if (typeof idCardNumber !== 'string') {
    return {
      success: false,
      error: '身份证号码必须是字符串类型'
    };
  }

  if (!idCardNumber.trim()) {
    return {
      success: false,
      error: '身份证号码不能为空'
    };
  }

  try {
    const isValid = idCard.verify(idCardNumber);
    return {
      success: true,
      data: isValid
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : '验证过程中发生未知错误'
    };
  }
};

/**
 * 生成随机身份证号码
 * @param options 生成配置选项
 * @returns 生成结果，包含身份证号码或错误信息
 * 
 * @example
 * ```typescript
 * // 生成随机身份证
 * const result1 = generateIdCard();
 * 
 * // 生成指定性别的身份证
 * const result2 = generateIdCard({ gener: 1 });
 * 
 * // 生成指定出生日期的身份证
 * const result3 = generateIdCard({ birthday: '1990-01-01' });
 * 
 * // 生成指定地区的身份证
 * const result4 = generateIdCard({ areaCode: '110101' });
 * ```
 */
export const generateIdCard = (options: GenerateIdCardOptions = {}): IdCardResult<string> => {
  try {
    // 参数验证
    if (options.gener !== undefined && ![0, 1].includes(Number(options.gener))) {
      return {
        success: false,
        error: '性别参数必须是 0（女）或 1（男）'
      };
    }

    if (options.birthday !== undefined) {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      if (!datePattern.test(options.birthday)) {
        return {
          success: false,
          error: '出生日期格式必须是 YYYY-MM-DD'
        };
      }
      
      const date = new Date(options.birthday);
      const currentDate = new Date();
      if (date > currentDate || date.getFullYear() < 1900) {
        return {
          success: false,
          error: '出生日期必须在 1900 年到当前日期之间'
        };
      }
    }

    if (options.areaCode !== undefined && options.areaCode.length !== 6) {
      return {
        success: false,
        error: '地区代码必须是6位数字'
      };
    }

    const generatedId = idCard.generateIdcard(options);
    
    if (!generatedId) {
      return {
        success: false,
        error: '生成身份证号码失败'
      };
    }

    return {
      success: true,
      data: generatedId
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : '生成过程中发生未知错误'
    };
  }
};

/**
 * 解析身份证号码，获取详细信息
 * @param idCardNumber 身份证号码
 * @returns 解析结果，包含身份证详细信息或错误信息
 * 
 * @example
 * ```typescript
 * const result = parseIdCard('110101199003070134');
 * if (result.success && result.data) {
 *   console.log('省份:', result.data.province);
 *   console.log('出生日期:', result.data.birthday);
 *   console.log('性别:', result.data.gender === 'M' ? '男' : '女');
 * }
 * ```
 */
export const parseIdCard = (idCardNumber: string): IdCardResult<IdCardInfo> => {
  // 先验证身份证号码
  const validateResult = validateIdCard(idCardNumber);
  if (!validateResult.success) {
    return {
      success: false,
      error: validateResult.error
    };
  }

  // 如果验证失败，直接返回
  if (!validateResult.data) {
    return {
      success: false,
      error: '身份证号码格式不正确'
    };
  }

  try {
    const info = idCard.info(idCardNumber);
    
    // 检查是否解析失败
    if (!info || !('valid' in info) || !info.valid) {
      return {
        success: false,
        error: '无法解析身份证信息'
      };
    }

    // 提取出生年份（从身份证号中）
    const birthYear = parseInt(idCardNumber.substring(6, 10));
    const birthMonth = idCardNumber.substring(10, 12);
    const birthDay = idCardNumber.substring(12, 14);
    const birthday = `${birthYear}-${birthMonth}-${birthDay}`;
    
    // 计算生肖
    const zodiac = calculateZodiac(birthYear);

    // 处理idcard库的返回值，适配到我们的接口
    const result: IdCardInfo = {
      province: info.province?.text || '',
      city: info.city?.text || '',
      area: info.area?.text || '',
      birthday: birthday,
      gender: info.gender,
      age: info.age || 0,
      constellation: info.constellation || '',
      zodiac: zodiac
    };

    return {
      success: true,
      data: result
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : '解析过程中发生未知错误'
    };
  }
};

/**
 * 获取身份证号码对应的年龄
 * @param idCardNumber 身份证号码
 * @returns 年龄计算结果
 * 
 * @example
 * ```typescript
 * const result = getIdCardAge('110101199003070134');
 * if (result.success) {
 *   console.log('年龄:', result.data);
 * }
 * ```
 */
export const getIdCardAge = (idCardNumber: string): IdCardResult<number> => {
  // 先解析身份证信息
  const parseResult = parseIdCard(idCardNumber);
  if (!parseResult.success || !parseResult.data) {
    return {
      success: false,
      error: parseResult.error || '无法获取身份证信息'
    };
  }

  try {
    // 使用解析出的生日计算年龄
    const birthday = parseResult.data.birthday;
    if (!birthday) {
      return {
        success: false,
        error: '无法获取出生日期'
      };
    }

    const age = idCard.getAge(birthday);
    
    if (typeof age !== 'number' || age < 0) {
      return {
        success: false,
        error: '年龄计算结果无效'
      };
    }

    return {
      success: true,
      data: age
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : '年龄计算过程中发生未知错误'
    };
  }
};

/**
 * 获取身份证性别
 * @param idCardNumber 身份证号码
 * @returns 性别信息（M-男，F-女）
 * 
 * @example
 * ```typescript
 * const result = getIdCardGender('110101199003070134');
 * if (result.success) {
 *   console.log('性别:', result.data === 'M' ? '男' : '女');
 * }
 * ```
 */
export const getIdCardGender = (idCardNumber: string): IdCardResult<'M' | 'F'> => {
  const parseResult = parseIdCard(idCardNumber);
  if (!parseResult.success || !parseResult.data) {
    return {
      success: false,
      error: parseResult.error || '无法获取身份证信息'
    };
  }

  const gender = parseResult.data.gender;
  if (!['M', 'F'].includes(gender)) {
    return {
      success: false,
      error: '无法确定性别信息'
    };
  }

  return {
    success: true,
    data: gender
  };
};

/**
 * 获取身份证出生地区信息
 * @param idCardNumber 身份证号码
 * @returns 地区信息
 * 
 * @example
 * ```typescript
 * const result = getIdCardRegion('110101199003070134');
 * if (result.success) {
 *   console.log('地区:', `${result.data.province} ${result.data.city} ${result.data.area}`);
 * }
 * ```
 */
export const getIdCardRegion = (idCardNumber: string): IdCardResult<{
  province: string;
  city: string;
  area: string;
}> => {
  const parseResult = parseIdCard(idCardNumber);
  if (!parseResult.success || !parseResult.data) {
    return {
      success: false,
      error: parseResult.error || '无法获取身份证信息'
    };
  }

  return {
    success: true,
    data: {
      province: parseResult.data.province,
      city: parseResult.data.city,
      area: parseResult.data.area
    }
  };
};

