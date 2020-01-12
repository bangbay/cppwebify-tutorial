const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.argv[2] || 3000);

const types = [
  {
    title: "pure_node",
    description: "Execute a really primitive implementation of prime sieve in Node.js"
  },
  {
    title: "standalone_args",
    description: "Execute C++ executable as a child process, using command line args and stdout.  Based on /cpp/standalone_stdio"
  },
  {
    title: "standalone_usr",
    description: "Execute C++ executable as a child process, using direct user input.  Based on /cpp/standalone_usr"
  },
  {
    title: "standalone_file",
    description: "Execute C++ executable as a child process, using an input and output file.  Based on /cpp/standalone_flex_file"
  },
  {
    title: "addonsync",
    description: "Creating a Synchronous Node Addon that can be called like any other module.  Based on /cpp/nodeprime_sync"
  },
  {
    title: "addon",
    description: "Creating a Asynchronous Node Addon that can be called like any other module.  Based on /cpp/nodeprime"
  }
  ];


types.forEach(function (type) {
  app.use(`/${type.title}`, require(`./routes/${type.title}`));
});

app.get("/", function (req, res) {
  res.render("index", { routes: types});
});

app.listen(app.get("port"), function () {
  console.log(`App running at http://localhost:${app.get("port")}; press Ctrl-C to terminate.`);
});
