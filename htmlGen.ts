const fs = require("fs");

const writeToFile = async (path, data) => {
  let filehandle = null;

  try {
    filehandle = await fs.promises.open(path, "w");
    await filehandle.writeFile(data);
  } finally {
    if (filehandle) {
      await filehandle.close();
    }
  }
};

writeToFile("hi.txt", "lol");
// div`inner text goes here`;
