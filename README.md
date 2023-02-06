# css-color-types

Types for CSS named colors (aka keyword colors), webscraped from the <a href="https://www.w3.org/wiki/CSS/Properties/color/keywords">W3C specification</a>.

### Installation

```bash
$ npm i --save-dev css-color-types
```

### Usage

```js
import type { CSSNamedColor } from "css-color-types"

const validColor: CSSNamedColor = "cornflowerblue" // no error.

const not_a_named_color: CSSNamedColor = "#FF0000" // Type '"#FF0000"' is not assignable to type '"black" | "silver" | "gray" | "white" | "maroon" | "red" | "purple" | "fuchsia" | "green" | "lime" | "olive" | "yellow" | "navy" | "blue" | "teal" | "aqua" | "aliceblue" | "antiquewhite" | ... 128 more ... | "yellowgreen"'.

const notAColor: CSSNamedColor = "Microsoft Bing" // Type '"Microsoft Bing"' is not assignable to type '"black" | "silver" etc.
```
