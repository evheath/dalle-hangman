"use strict";
exports.__esModule = true;
exports.assimilatePrompt = void 0;
function assimilatePrompt(prompt) {
    return prompt.split(" ")
        .map(function (word) { return word.replace(/[^A-Za-z]+/g, "").toLowerCase(); })
        .filter(function (word) { return word.length > 0; })
        .join(" ");
}
exports.assimilatePrompt = assimilatePrompt;
