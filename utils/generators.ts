const fs = require("fs");

export const genTag = (tags: TemplateStringsArray, text: string) =>
  `<${tags[0]}>${text}</${tags[0]}>`;

export const startTag = (tag: TemplateStringsArray) => `<${tag}>`;
export const endTag = (tag: TemplateStringsArray) => `</${tag}>`;

export const writeToFile = async (path: string, data: string) => {
  let filehandle = null;
  try {
    filehandle = await fs.promises.open(path, "w");
    await filehandle.writeFile(data);
  } finally {
    if (filehandle) await filehandle.close();
  }
};
