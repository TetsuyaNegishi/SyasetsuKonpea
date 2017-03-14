import client from 'cheerio-httpcli';

const parseWebPage = (url, parse) => {
  const promiseCheerio = client.fetch(url);

  return new Promise((resolve, reject) => {
    promiseCheerio.then((cheerioResult) => {
      if (cheerioResult.error) {
        reject(cheerioResult.error);
      } else {
        const $ = cheerioResult.$;
        resolve(parse($));
      }
    }, (error) => {
      reject(error);
    });
  });
};

export default parseWebPage;
