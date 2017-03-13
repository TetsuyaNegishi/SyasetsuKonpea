import client from 'cheerio-httpcli';

const yomiuriUrl = 'http://www.yomiuri.co.jp/editorial/';

client.fetch(yomiuriUrl, (err, $) => {
  $('ul.list-common > li').each(function () {
    const url = $(this).find('a').attr('href');
    const headline = $(this).find('span.headline').text();

    console.log(`url:${url}`);
    console.log(`headline:${headline}`);
  });
});
