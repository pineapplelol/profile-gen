const fs = require("fs");

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
  attributes?: Record<string, string>
) => {
  if (!attributes) return `<${tag}>${text}</${tag}>`;
  let string = `<${tag} `;
  Object.keys(attributes).map((k) => (string += `${k}="${attributes[k]}" `));
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
  attributes?: Record<string, string>
) => {
  if (!attributes) return `<${tag}>`;
  let string = `<${tag} `;
  Object.keys(attributes).map((k) => (string += `${k}="${attributes[k]}" `));
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
    filehandle = await fs.promises.open(path, "w");
    await filehandle.writeFile(data);
  } finally {
    if (filehandle) await filehandle.close();
  }
};
