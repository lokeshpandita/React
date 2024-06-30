let parent=
React.createElement("div", {id:"parent"}, 
    [
        React.createElement("div", {id:"child"}, "React sibling 1"),
        React.createElement("div", {id:"child"}, "React sibling 2")
    ]
);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)