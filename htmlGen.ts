import * as util from "./utils/generators";

const name = "neeraj";
const subtitle = "subtitle goes here";
const section1 = "experiences";
const exp = "experience 1";
const time = "june 1";
const desc = "description";
const copyright = "copyright";
const footer_link = "footer link";

let htmlString: string = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">`;

htmlString += util.genTag`title${name}`;
htmlString += util.genSingleTag`/head`;

htmlString += util.genSingleTag`body`;
htmlString += util.genSingleTag`header`;
htmlString += util.genTag`h1${name}`;
htmlString += util.genTag`p${subtitle}`;
htmlString += util.genSingleTag`/header`;

htmlString += util.genSingleTag`section`;
htmlString += util.genTag`h2${section1}`;

htmlString += util.genSingleTag`ul`;

for (let i: number = 0; i < 3; i += 1) {
  htmlString += util.genSingleTag`li`;
  htmlString += util.genTag`h3${exp}`;
  htmlString += util.genTag`h4${time}`;
  htmlString += util.genTag`p${desc}`;
  htmlString += util.genSingleTag`/li`;
}

htmlString += util.genSingleTag`/ul`;

htmlString += util.genSingleTag`footer`;
htmlString += util.genTag`p${copyright}`;
htmlString += util.genSingleTag`ul`;
for (let i: number = 0; i < 2; i += 1) {
  htmlString += util.genSingleTag`li`;
  htmlString += util.genTag`p${footer_link}`;
  htmlString += util.genSingleTag`/li`;
}
htmlString += util.genSingleTag`/ul`;
htmlString += util.genSingleTag`/footer`;

htmlString += util.genSingleTag`/body`;
htmlString += util.genSingleTag`/html`;

util.writeToFile("lol.html", htmlString);
