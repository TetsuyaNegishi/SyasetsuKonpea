import client from 'cheerio-httpcli';

const yomiuriUrl = 'http://www.yomiuri.co.jp/editorial/';

client.fetch(yomiuriUrl, (err, $) => {
  $('ul.list-common').each(function () {
    console.log($(this).text());
  });
});
