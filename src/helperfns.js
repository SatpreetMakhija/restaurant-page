

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    };
};

function makeAllOtherTabsInactive(activeNode, className) {
    const nodes = document.querySelectorAll(`.${className}`);
    console.log(nodes);

    nodes.forEach(node, () => {
        node.classList.add("not-active");
        node.classList.remove("active");
    });

    activeNode.classList.add("active");
    activeNode.classList.remove("not-active");

}


export {removeAllChildNodes, makeAllOtherTabsInactive}  ;