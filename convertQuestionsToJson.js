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
//   .on("json", jsonObj => {
//     // combine csv header row and csv line to a json object
//     // jsonObj.a ==> 1 or 4
//     console.log(jsonObj);
//   })
//   .on("done", error => {
//     console.log("end");
//   });

// converter.fromFile(file, function(err, result) {
//   // if an error has occured then handle it

//   console.log("json");

//   if (err) {
//     console.error("An Error Has Occured");
//     console.error(err);
//   }

//   const json = JSON.stringify(result);

//   console.log(json);

// });
