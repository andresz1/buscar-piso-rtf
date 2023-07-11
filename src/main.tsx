// @ts-ignore
import { render } from "@nkzw/remdx";

import "@nkzw/remdx/style.css";
import "./index.css";

render(document.getElementById("app"), import("./slides.re.mdx"));
