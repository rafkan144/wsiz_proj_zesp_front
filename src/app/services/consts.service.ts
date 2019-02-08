import { Injectable } from '@angular/core';

@Injectable()
export class ConstsService {
  constructor() {}

  public displayFormats = {
    dateTimeSecondsFormat: 'yyyy-MM-dd HH:mm:ss',
    dateTimeFormat: 'yyyy-MM-dd HH:mm',
    dateFormat: 'yyyy-MM-dd',
    datePickerFormat: 'yy-mm-dd',
    currencyFormat: '1.2-2'
  };

  public urls = {
    common: {
      getDictionaryById: '/dictionary',
      getLocalData: '/localData',
      getLocale: '/localData/locale'
    },
    pages: {
      home: '',
      about: '/about',
      article: {
        view: '/article/details',
        create: '/article/create',
        edit: '/article/edit'
      },
      articles: '/articles',
      articleCategory: {
        view: '/articleCategory/details',
        create: '/articleCategory/create',
        edit: '/articleCategory/edit'
      },
      articleCategories: '/articleCategories'
    }
  };

}
