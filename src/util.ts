const fs = require('fs');

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
) => {
  let string = `<${tag}`;
  Object.keys(attributes ?? {})?.map(
    (k) => (string += ` ${k}="${attributes[k]}"`),
  );
  return string + `>${text}</${tag}>`;
};

/**
 * Will generate only a single tag. To make it an ending tag, the \
 * should be appended to the provided string. If an attribute for the
 * tag is provided, it is included as well.
 * @param tag – the tag to be used in the html.
 * @param attributes – attributes that exist for the html tags.
 * @returns the full tag to be added to the html string.
 */
export const genSingleTag = (
  tag: string,
  attributes?: Record<string, string>,
) => {
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
 * Will generate complete profile site by creating new directory called
 * profile-site, and writing html code to index.html and copying relevant
 * css theme into main.css.
 * @param htmlString – the html code to be copied into index.html.
 * @param cssTheme – the name of the css theme to be used for the site.
 */
export const genProfile = async (htmlString: string, cssTheme: string) => {
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
};

/**
 * Given the args from the CLI, it will read and parse the JSON file to return the data.
 * @param args – the args from the CLI containing the name of the JSON file.
 * @returns the JSON data provided in the file.
 */
export const parseJSON = (args: string) => {
  return JSON.parse(fs.readFileSync(`./${args}`, 'utf8'));
};
