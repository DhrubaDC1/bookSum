const axios = require("axios");
const fs = require("fs");

let response = axios
  .post(
    "http://localhost:11434/api/generate",
    {
      model: "llama3",
      prompt:
        "Write me a 1300 or more words of summary of the book A Brief History of Time by Stephen Hawkins. It should be like you're telling me everything in the book as a story",
      stream: true,
    },
    { responseType: "stream" }
  )
  .then(function (response) {
    // Pipe the response data to a writable stream
    const writer = fs.createWriteStream("streaming-data.txt");

    // Handling events if needed
    response.data.on("data", function (chunk) {
      let chunkData = JSON.parse(chunk.toString()).response;
      writer.write(chunkData);
      // Handle chunk of data
    });

    response.data.on("end", function () {
      // Handle end of stream
    });
  })
  .catch(function (error) {
    console.log(error);
  });
