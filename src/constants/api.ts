import { Stage } from './index';

// 客户端请求 api 域名
export const BaseUrlMap = {
  release: 'https://api.metaclassn.com',
  develop: 'https://dev-api.metaclassn.com',
};

// 客户端请求头要带的 AppCode
export const AppCodeMap = {
  release: 'fcfe21dea20c436f9230bfd3d3893008',
  develop: 'fb6235557df5427da0c5df8e500c90f7',
};

const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return '/web-api';
  }

  return BaseUrlMap[Stage];
};

export const BaseUrl = getBaseUrl();
export const AppCode = AppCodeMap[Stage];
