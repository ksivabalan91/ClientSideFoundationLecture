export interface Headlines{
  title: string
  description: string
  url: string
}

export interface Search{
  country:string
  category:string
}

export const COUNTRIES = [ 'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn',
'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in',
'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl',
'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us',
've', 'za' ]

export const CATEGORIES = ['business','entertainment','general','health','science','sports','technology']
