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
todoList = ["wakeUp", "goToCodi", "getExperience", "getMoreExperience"];
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
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text.startsWith("hello")) {
    hello(text);
  } else if (text === "help\n") {
    console.log(
      "type 'quit' or 'exit' for exit.\ntype 'hello' to say 'hello!'." +
        "\ntype hello with any thing to to get this text with '!'." +
        "\ntype 'list' to display it\ntype add to adding new task." +
        "\ntype 'remove' to remove last task \nor remove with number to remove specific task by number of task."
    );
  } else if (text.startsWith("list\n")) {
    list();
  } else if (text.startsWith("add")) {
    add(text);
  } else if (text === "remove\n") {
    remove();
  } else if (text.startsWith("remove")) {
    removeByNumber(text);
  } else if (text.startsWith("remove")) {
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
  console.log("Quitting now, goodbye!");
  process.exit();
}
function list() {
  for (let i = 1; i <= todoList.length; i++)
    console.log(i + "- " + todoList[i - 1] + "\n");
}
function add(text) {
  text = text.substr(4, text.length);
  todoList.push(text);
  console.log("done!");
}
function remove() {
  todoList.pop();
  console.log("done!");
}
function removeByNumber(text) {
  text = text.substr(7, text.length);
  todoList.splice(parseInt(text - 1), 1);
  console.log("done!");
}

// The following line starts the application
startApp("Oussama al Houssami");
