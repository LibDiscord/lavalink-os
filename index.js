const { default: { stream } } = require("got");
const { createWriteStream } = require("fs"); 
const { execSync } = require("child_process");
const url = "https://github.com/davidffa/lavalink/releases/download/v1.1.4/Lavalink.jar"; // This will always pull the latest with soundcloud fix ect ect
const start = () => {
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("java -jar Lavalink.jar", { stdio: "inherit" });
    });
};

start();
