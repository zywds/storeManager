import { request } from './request';

export function getDetail(config) {
  return request({
    url: '/detail',
    params: {
      iid: config.iid,
    },
  });
}

export function getRecommend() {
  return request({
    url: '/recommend',
  });
}

export class Goods {
  constructor(iteminfo, columns, services) {
    this.title = iteminfo.title;
    this.desc = iteminfo.desc;
    this.price = iteminfo.price;
    this.oldPrice = iteminfo.oldPrice;
    this.lowPrice = iteminfo.lowPrice;
    this.discountDesc = iteminfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.lowNowPrice = iteminfo.lowNowPrice;
  }
}

export class Shops {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.shopUrl = shopInfo.shopUrl;
    this.name = shopInfo.name;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.images = info.images ? info.images[0] : '';
    this.info = info;
    this.rule = rule;
  }
}
