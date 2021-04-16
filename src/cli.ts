#! /usr/bin/env node

const util = require('./generators');
const [, , ...args] = process.argv;
const data = require(`./${args}`);

let htmlString: string = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="main.css">
  <style>
    :root {
      --primary: ${data.theme.color};
    }
  </style>`;

htmlString += util.genTag('title', data.name);
htmlString += util.genSingleTag('/head');

htmlString += util.genSingleTag('body');
htmlString += util.genSingleTag('header');
htmlString += util.genTag('img', '', {
  src: data.image,
  alt: `${data.name} profile picture`,
});
htmlString += util.genTag('h1', data.name);
htmlString += util.genSingleTag('/header');

htmlString += util.genSingleTag('main');
htmlString += util.genTag('p', data.tagline, { class: 'subtitle' });

for (const section of data.sections) {
  htmlString += util.genSingleTag('section');
  htmlString += util.genTag('h2', section.sectionName);
  htmlString += util.genSingleTag('ul');

  for (const point of section.points) {
    htmlString += util.genSingleTag('li');
    htmlString += util.genTag('h3', point.sectionPointName);
    htmlString += util.genTag('h4', point.sectionTime);
    htmlString += util.genTag('p', point.sectionDescription);
    htmlString += util.genSingleTag('/li');
  }

  htmlString += util.genSingleTag('/ul');
  htmlString += util.genSingleTag('/section');
}
htmlString += util.genSingleTag('/main');

htmlString += util.genSingleTag('footer');
htmlString += util.genTag('p', 'Copyright 2021');
htmlString += util.genSingleTag('ul');
for (let i: number = 0; i < data.footerLinks.length; i += 1) {
  htmlString += util.genSingleTag('li');
  htmlString += util.genTag('a', data.footerLinks[i].linkName, {
    href: data.footerLinks[i].link,
  });
  htmlString += util.genSingleTag('/li');
}
htmlString += util.genSingleTag('/ul');
htmlString += util.genSingleTag('/footer');

htmlString += util.genSingleTag('/body');
htmlString += util.genSingleTag('/html');

util.genProfile(htmlString, data.theme.name);
