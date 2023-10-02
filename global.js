import config from '/config.json' assert { type: "json" };

// Create navbar
(() => {
    const nav = document.getElementsByTagName("nav")[0];
    nav.appendChild((() => {
        const element = document.createElement("span");
        element.classList.add("title");
        element.innerText = config.nav.title;
        return element;
    })());

    nav.appendChild((() => {
        const element = document.createElement("span");
        element.classList.add("options");

        config.nav.options.forEach((option) => {
            const optionElement = document.createElement("a");
            optionElement.innerText = option.name;
            optionElement.href = option.url;
            element.appendChild(optionElement);
        });

        return element;
    })());
})();

// Create footer
(() => {
    const footer = document.getElementsByTagName("footer")[0];

    config.footer.columns.forEach((column) => {
        const col = document.createElement("div");
        column.forEach((item) => {
            col.appendChild((() => {
                const element = document.createElement("a");
                element.innerText = item.name;
                element.href = item.url;
                return element;
            })());
        });
        footer.appendChild(col);
    });
})();
