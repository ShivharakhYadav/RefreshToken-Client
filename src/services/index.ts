let config;

(async () => {
    try {
        const configResult = await getDataFromConfig();
        console.log("configResult--->", configResult)
        config = configResult;
    } catch (error) {
        //   config = configFile;
    }
})();


async function getDataFromConfig() {
    try {
        const response = await fetch("./assets/config.json");
        const result = await response.json();
        return result;
    } catch (err) {
        //   return configFile;
    }
}

function getData() {
    console.log("text", config)
    return config;
}

export { getData }