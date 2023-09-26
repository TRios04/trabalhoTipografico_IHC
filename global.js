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
