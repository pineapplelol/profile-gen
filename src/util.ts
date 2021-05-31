const fs = require('fs');
const ora = require('ora');

/**
 * Returns new spinner used for logging events.
 * @returns a new ora spinner.
 */
const newSpinner = () => {
  return new ora({ color: 'yellow' });
};

/**
 * Given the filename from the CLI, it will read and parse the JSON file to return the data.
 * @param file – the file name from the CLI args containing the name of the JSON file.
 * @returns the JSON data provided in the file.
 */
export const parseJSON = (file: string) => {
  const spinner = newSpinner();
  spinner.start('Parsing JSON file');
  try {
    const json = JSON.parse(fs.readFileSync(`./${file}`, 'utf8'));
  } catch (error) {
    spinner.fail(`File ${file} does not exist.`);
    process.exit(1);
  }
  spinner.succeed();
  return json;
};

export const validateJSON = () => {
  const spinner = newSpinner();
  spinner.start('Validating JSON file');
  // TODO: validate
  // if missing optional, spinner.warn("Missing x");
  // if missing required, spinner.fail("Missing x"); exit(1);
  spinner.succeed();
};

/**
 * Will generate both the start and end tag, as well as putting
 * the text in between. If an attribute for the tag is provided, it
 * is included as well.
 * @param tag – the tag to be used in the html.
 * @param text – the text to belong inside the tags.
 * @param attributes – attributes that exist for the html tags.
 * @returns the full tag and text to be added to the html string.
 */
export const genTag = (
  tag: string,
  text: string,
  attributes?: Record<string, string>,
): string => {
  let string = `<${tag}`;
  Object.keys(attributes ?? {})?.map(
    (k) => (string += ` ${k}="${attributes[k]}"`),
  );
  return string + `>${text}</${tag}>`;
};

/**
 * Will generate only a single tag. To make it an ending tag, the \
 * should be prepended to the provided string. If an attribute for the
 * tag is provided, it is included as well.
 * @param tag – the tag to be used in the html.
 * @param attributes – attributes that exist for the html tags.
 * @returns the full tag to be added to the html string.
 */
export const genSingleTag = (
  tag: string,
  attributes?: Record<string, string>,
): string => {
  let string = `<${tag}`;
  Object.keys(attributes ?? {}).map(
    (k) => (string += ` ${k}="${attributes[k]}"`),
  );
  return string + `>`;
};

/**
 * Will write the given data to the provided file.
 * @param path – the path to the file to be written to.
 * @param data – the data to be written.
 */
export const writeToFile = async (path: string, data: string) => {
  let filehandle = null;
  try {
    filehandle = await fs.promises.open(path, 'w');
    await filehandle.writeFile(data);
  } finally {
    if (filehandle) await filehandle.close();
  }
};

/**
 * Generates the HTML string from the data provided in the json.
 * @returns a string that represents the HTML code for the profile site.
 */
export const genHTMLString = (data) => {
  const spinner = newSpinner();
  spinner.start('Building site');

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

  htmlString += genTag('title', data.name);
  htmlString += genSingleTag('/head');

  htmlString += genSingleTag('body');
  htmlString += genSingleTag('header');
  htmlString += genTag('img', '', {
    src: data.image,
    alt: `${data.name} profile picture`,
  });
  htmlString += genTag('h1', data.name);
  htmlString += genSingleTag('/header');

  htmlString += genSingleTag('main');
  htmlString += genTag('p', data.tagline, { class: 'subtitle' });

  for (const section of data.sections) {
    htmlString += genSingleTag('section');
    htmlString += genTag('h2', section.sectionName);
    htmlString += genSingleTag('ul');

    for (const point of section.points) {
      htmlString += genSingleTag('li');
      htmlString += genTag('h3', point.sectionPointName);
      htmlString += genTag('h4', point.sectionTime);
      htmlString += genTag('p', point.sectionDescription);
      htmlString += genSingleTag('/li');
    }

    htmlString += genSingleTag('/ul');
    htmlString += genSingleTag('/section');
  }
  htmlString += genSingleTag('/main');

  htmlString += genSingleTag('footer');
  htmlString += genTag('p', 'Copyright 2021');
  htmlString += genSingleTag('ul');
  for (let i: number = 0; i < data.footerLinks.length; i += 1) {
    htmlString += genSingleTag('li');
    htmlString += genTag('a', data.footerLinks[i].linkName, {
      href: data.footerLinks[i].link,
    });
    htmlString += genSingleTag('/li');
  }
  htmlString += genSingleTag('/ul');
  htmlString += genSingleTag('/footer');

  htmlString += genSingleTag('/body');
  htmlString += genSingleTag('/html');

  spinner.succeed();
  return htmlString;
};

/**
 * Will generate complete profile site by creating new directory called
 * profile-site, and writing html code to index.html and copying relevant
 * css theme into main.css.
 * @param htmlString – the html code to be copied into index.html.
 * @param cssTheme – the name of the css theme to be used for the site.
 */
export const genProfile = async (htmlString: string, cssTheme: string) => {
  const spinner = newSpinner();
  spinner.start('Generating directory contents');

  let dir = './profile-site';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  writeToFile('./profile-site/index.html', htmlString);
  fs.readFile(__dirname + `/themes/${cssTheme}.css`, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    writeToFile('./profile-site/main.css', data);
  });
  spinner.succeed();
};
