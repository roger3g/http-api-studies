const { parse } = require('url')

const link = 'http://localhost:8080/default.htm?year=2017&month=february'
const myLink = parse(link, true)

const myLinkInfo = {
  host: myLink.host,
  pathname: myLink.pathname,
  search: myLink.search,
  month: myLink.query.month
}

console.log(myLinkInfo)