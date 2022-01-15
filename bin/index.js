#!/usr/bin/env node

const yargs = require("yargs");
const fs = require('fs');
const ytdl = require('ytdl-core');


const options = yargs
    .usage("Usage: -u <url> -o <output path>")
    .option("u", { alias: "url", describe: "a youtube link for a video", type: "string", demandOption: true })
    .option("o", { alias: "output", describe: "output path", type: "string", demandOption: true })
    .argv;


ytdl(`${options.url}`, {filter: "audioonly", quality: "highestaudio"}).pipe(fs.createWriteStream(`${options.output}`));
