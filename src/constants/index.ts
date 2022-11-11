// 静态资源域名
export const StaticDomainMap = {
  release: 'https://static.metaclassn.com',
  develop: 'https://web-metaclassn-dev.oss-ap-southeast-1.aliyuncs.com',
};

export const Stage = process.env.STAGE || 'develop';

export const IsDevMode = process.env.NODE_ENV !== 'production';

export const EmailAdress = 'support@metaclassn.com';

export const ContarctAddress = '0x4817d4b076a646fb1248C89250Ce492A5CF1dB81';

// 静态资源域名
const StaticDomain = StaticDomainMap[Stage];
