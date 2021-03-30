const fs = require("fs");

/**
 * Will generate both the start and end tag, as well as putting
 * the text in between. If an attribute for the tag is provided, it
 * is included as well.
 * @param tags – an array of the strings given. The first value is the
 *               tag to be used, and the second is the attribute.
 * @param text – the text to be put in between the tags.
 * @returns the full tag and text to be added to the html string.
 */
export const genTag = (tags: TemplateStringsArray, text: string) =>
  tags.length > 1
    ? `<${tags[0]} class="${tags[1]}">${text}</${tags[0]}>`
    : `<${tags[0]}>${text}</${tags[0]}>`;

/**
 * Will generate only a single tag. To make it an ending tag, the \
 * should be appended to the provided string. If an attribute for the
 * tag is provided, it is included as well.
 * @param tags – an array of the strings given. The first value is the
 *               tag to be used, and the second is the attribute.
 * @returns the full tag to be added to the html string.
 */
export const genSingleTag = (tags: TemplateStringsArray) =>
  tags.length > 1 ? `<${tags[0]} class="${tags[1]}">` : `<${tags[0]}>`;

/**
 * Will write the given data to the provided file.
 * @param path – the path to the file to be written to.
 * @param data – the data to be written.
 */
export const writeToFile = async (path: string, data: string) => {
  let filehandle = null;
  try {
    filehandle = await fs.promises.open(path, "w");
    await filehandle.writeFile(data);
  } finally {
    if (filehandle) await filehandle.close();
  }
};
