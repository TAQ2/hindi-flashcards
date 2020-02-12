const fs = require("fs");
const csv = require("csvtojson");
const file = "./questions.csv";

csv()
  .fromFile(file)
  .then(jsonObj => {
    fs.writeFile(
      "./src/questions.json",
      JSON.stringify(jsonObj),
      "utf8",
      function(err) {
        if (err) {
          console.error("An Error Has Occured");
          console.error(err);
        } else {
          console.log("saved!");
        }
      }
    );
  });
