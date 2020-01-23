let todoList;
let fs = require("fs");
fs.readFile("./database.json", (err, data) => {
  if (err) throw err;
  todoList = JSON.parse(data);
});

/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * "help" it lists all the possible commands
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text = text.replace("\n", "");
  if (text === "quit\n" || text === "exit") {
    quit();
  } else if (text.startsWith("hello")) {
    hello(text);
  } else if (text === "help") {
    console.log(
      "type 'quit' or 'exit' for exit.\ntype 'hello' to say 'hello!'." +
        "\ntype hello with any thing to to get this text with '!'." +
        "\ntype 'list' to display it.\ntype add to adding new task." +
        "\ntype 'remove' to remove last task or remove with number to remove specific task by number of task." +
        "\ntype edit to edit last task or edit with task number to check or unchek specific task."
    );
  } else if (text === "list") {
    console.log("----\nLIST\n----\n");
    list();
  } else if (text.startsWith("add ")) {
    add(text);
  } else if (text === "remove") {
    remove();
  } else if (text.startsWith("remove ")) {
    removeByNumber(text);
  } else if (text.startsWith("edit ")) {
    edit(text);
  } else if (text.startsWith("check ")) {
    check(text);
  } else if (text.startsWith("uncheck ")) {
    unCheck(text);
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */

function hello(text) {
  console.log(text.trim() + "!\n");
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  let data = JSON.stringify(todoList);
  fs.writeFile("./database.json", data, err => {
    if (err) throw err;
    console.log("The file has been saved!");
    console.log("Quitting now, goodbye!");
    process.exit();
  });
}
function list() {
  let checksimble = "";
  for (let i = 1; i <= todoList.length; i++) {
    if (todoList[i - 1].done) checksimble = "[✓] ";
    else checksimble = "[ ] ";
    console.log(checksimble + i + "- " + todoList[i - 1].name + "\n");
  }
}
function add(text) {
  text = text.substr(4, text.length);
  todoList[todoList.length] = { name: text };
  console.log("done!");
}
function remove() {
  todoList.pop();
  console.log("done!");
}
function removeByNumber(text) {
  text = text.substr(7, text.length);
  text = parseInt(text - 1);
  if (text > -1 && text < todoList.length) {
    todoList.splice(text, 1);
    console.log("done!");
  } else console.log("this number is not exist!");
}
function edit(text) {
  text = text.replace("\n", "");
  text = text.split(" ");
  if (text[0] == "edit" && text[1] <= todoList.length && text[1] > 0) {
    let task = parseInt(text[1]) - 1;
    text = text.splice(2);
    container = "";
    for (i = 0; i < text.length; i++) container += text[i];
    todoList[task] = { name: container };
    console.log("done! replaced by task of number " + (task + 1));
  } else {
    text = text.splice(1);
    container = "";
    for (i = 0; i < text.length; i++) container += text[i];
    todoList[todoList.length - 1] = { name: container };
    console.log("done! replaced by last task");
  }
}
function check(text) {
  text = text.substr(6, text.length);
  text = parseInt(text) - 1;
  if (text < todoList.length && text >= 0) {
    todoList[text].done = true;
    console.log("done!");
  } else console.log("this number is not exsist!");
}
function unCheck(text) {
  text = text.substr(8, text.length);
  text = parseInt(text) - 1;
  if (text < todoList.length && text >= 0) {
    todoList[text].done = false;
    console.log("done!");
  } else console.log("this number is not exsist!");
}
// The following line starts the application
startApp("Oussama al Houssami");
