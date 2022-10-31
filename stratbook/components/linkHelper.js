import { Fragment } from "react";

export default function LinkHelper({paragraph}) {
    let newParagraph = "";
    let currLinkText = "";
    let currLink = "";
    let canAdd = 0;
    let result = [];
    for (var i = 0; i < paragraph.length; i++) {
        if (paragraph[i] == "[") {
            canAdd = 1;
        } else if (paragraph[i] == "]") {
            continue;
        } else if (paragraph[i] == "(") {
            canAdd = 2;
        } else if (paragraph[i] == ")") {
            let segment = {
                beforeText: newParagraph,
                link: currLink,
                linkText: currLinkText
            }
            result.push(segment);
            newParagraph = "";
            currLinkText = "";
            currLink = "";
            canAdd = 0;
        } else if (canAdd == 0) {
            newParagraph += paragraph[i];
        } else if (canAdd == 1) {
            currLinkText += paragraph[i];
        } else if (canAdd == 2) {
            currLink += paragraph[i];
        }
    }
    let afterText = newParagraph;
    return (
        <>
            {result.map((item, k) => (
                <span key={k}>{item.beforeText}<a href={item.link}>{item.linkText}</a></span>
            ))}{afterText}
        </>
    )
}