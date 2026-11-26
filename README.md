# json2html

A small JavaScript function that turns an array of people into an HTML table.

## Usage

```js
import json2html from "./json2html.js";

const html = json2html([
  { Name: "Ann", Age: 30, Gender: "F" },
  { Name: "Bo" },
]);
```

Each object becomes one row with the columns `Name`, `Age` and `Gender`. A
missing field renders as an empty cell.

The values are inserted into the HTML as they are, without escaping. Escape
untrusted input before passing it in.

## License

MIT, see [LICENSE](LICENSE).
