import client from 'cheerio-httpcli';

const yomiuriUrl = 'http://www.yomiuri.co.jp/editorial/';

export const getYomiuriOpinions = () => {
  client.fetch(yomiuriUrl, (err, $) => {
    const result = [];
    $('ul.list-common > li').each(function () {
      const url = $(this).find('a').attr('href');
      const headline = $(this).find('span.headline').text();
      result.push({ url, headline });
    });
  });
};

export const getYomiuriOpinion = (opinionUrl) => {
  client.fetch(opinionUrl, (err, $) => {
    const result = [];
    $('div.article > article > p').each(function () {
      result.push($(this).text());
    });
  });
};
