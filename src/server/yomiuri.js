import parseWebPage from './parseWebPage';

const yomiuriUrl = 'http://www.yomiuri.co.jp/editorial/';

export const getYomiuriOpinions = () => parseWebPage(yomiuriUrl, ($) => {
  const result = [];
  $('ul.list-common > li').each(function () {
    const url = $(this).find('a').attr('href');
    const headline = $(this).find('span.headline').text();
    result.push({ url, headline });
  });
  return result;
});

export const getYomiuriOpinion = opinionUrl => parseWebPage(opinionUrl, ($) => {
  const result = [];
  $('div.article > article > p').each(function () {
    result.push($(this).text());
  });
  return result;
});
