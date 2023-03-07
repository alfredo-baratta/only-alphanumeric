import { replace } from "lodash";

const filterText = (text: string): string => replace(text, /[^\w\s]/gi, "");

module.exports = { filterText: filterText };
