import dayjs from 'dayjs';

// 转成数组
export const toArray = (data: Array<any>) => {
  if (!Array.isArray(data)) {
    return [];
  }

  return data;
};

// 转成数字
export const toNumber = (val: string | number) => {
  if (!val) {
    return 0;
  }

  const num = Number(val);

  if (Number.isNaN(num)) {
    return 0;
  }

  return num;
};

/**
 * 通过 value 获取 name
 */
export const getNameByValue = (
  data: Array<{ value: number; label: string }>,
  value: number | string
) => {
  return data?.find((item) => {
    return item.value === value;
  })?.label;
};

/**
 * 通过 value 获取 item
 */
export const getOptionByValue = (
  options: Array<{ value: number; label: string }>,
  value: number | string
) => {
  return (
    options.find((item) => {
      return item.value === value;
    }) || {}
  );
};

/**
 * 加密字符串
 *
 * @param value
 * @param options
 */
export const encryptValue = (
  value: string,
  options?: { startIndex?: number; encryptLength?: number }
) => {
  if (!value) {
    return '';
  }

  const { startIndex, encryptLength } = options || {};

  const reg = new RegExp(`(.{${startIndex}})(.{${encryptLength}})(.*)`);

  const val = value.replace(reg, (rs, $1, $2, $3) => {
    return $1 + Array($2.length).fill('*').join('') + $3;
  });

  return val;
};

/**
 * 格式化金额
 * @param {string | number} val 金额
 * @param {number} precision 精度（几位小数），默认 0
 * @returns
 */
export const formatPrice = (val: string | number, precision: number = 0) => {
  return toNumber(val).toFixed(precision);
};

/**
 * 格式化时间
 * @param {string | number | Date | Dayjs | null | undefined} date 时间
 * @param {string} formatString 格式化字符串，默认 'DD-MM-YYYY, H:mm'（如：07-09-2022, 10:27）
 * @returns
 */
export const formatTime = (date?: any, formatString = 'DD-MM-YYYY, H:mm') => {
  return dayjs(date).format(formatString);
};

/**
 * 通过 月份 获取当月开始结束时间 时间戳返回
 */
export const getStartEndTimeUnix = (data: any) => {
  const date = new Date(data);
  const year = date.getFullYear();
  const month = date.getMonth();
  const startDate = dayjs(new Date(year, month, 1)).unix();
  const endDate = dayjs(new Date(year, month + 1, 0)).unix();

  return [startDate, endDate];
};
