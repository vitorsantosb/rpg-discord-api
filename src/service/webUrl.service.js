function GetWebUrl(){
  return `https://${process.env.WEB_URL ?? 'localhost'}:${process.env.PORT}/`;
}

module.exports = {
  GetWebUrl
}