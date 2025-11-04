# 🧩 JavaScript Callbacks — Tutorial

## 1. What is a Callback?

A **callback** is a **function passed as an argument** to another function, which will be **executed later** (after some operation completes).

It’s a way to make code **asynchronous** — so that long tasks don’t block the program.

### 💡 Example: Simple Callback

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // executing the callback
}

function sayBye() {
  console.log("Goodbye!");
}

// Using the callback
greet("John", sayBye);
````

#### 🖥️ Output:

```
Hello John
Goodbye!
```

---

## 2. Why are Callbacks Important?

JavaScript is **single-threaded**, so it uses callbacks to handle **asynchronous tasks** like:

* Reading files
* Making API calls
* Waiting for user actions

Without callbacks, JS would freeze while waiting for a slow task!

### 💡 Example: Async with `setTimeout`

```js
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log("Data received!");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);
```

#### 🖥️ Output:

```
Fetching data...
Data received!
Processing data...
```

---

## 3. Problem 1: Callback Hell 😵

When callbacks are **nested inside each other**, code becomes messy and hard to read.

### 💀 Example: Callback Hell

```js
setTimeout(() => {
  console.log("Step 1: Fetching user...");
  setTimeout(() => {
    console.log("Step 2: Getting user posts...");
    setTimeout(() => {
      console.log("Step 3: Getting comments...");
    }, 1000);
  }, 1000);
}, 1000);
```

#### 🖥️ Output:

```
Step 1: Fetching user...
Step 2: Getting user posts...
Step 3: Getting comments...
```

😩 This is **Callback Hell** — nested functions make it hard to maintain.

---

## 4. Problem 2: Inversion of Control

When you give a callback to another function, you **lose control** of when (or if) it’s called.

The other function decides how/when to use your callback.

### 💡 Example: Inversion of Control

```js
function doTask(callback) {
  // The library controls when to call your function
  console.log("Doing task...");
  
  // What if the library calls callback twice or not at all?
  callback();
  callback(); // ❌ Called twice (unexpected)
}

function onDone() {
  console.log("Task done!");
}

doTask(onDone);
```

#### 🖥️ Output:

```
Doing task...
Task done!
Task done!
```

😬 The callback ran twice — something the developer didn’t expect.
That’s called **Inversion of Control** — you hand over control of your code’s flow.

---

## 5. Better Alternatives

To avoid callback issues, modern JavaScript uses:

* **Promises** → cleaner chaining
* **async/await** → even cleaner, like synchronous code

### 💡 Same Example Using Promises (Cleaner!)

```js
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1: Fetching user...");
      resolve();
    }, 1000);
  });
}

function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2: Getting user posts...");
      resolve();
    }, 1000);
  });
}

function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3: Getting comments...");
      resolve();
    }, 1000);
  });
}

fetchUser()
  .then(getPosts)
  .then(getComments);
```

#### 🖥️ Output:

```
Step 1: Fetching user...
Step 2: Getting user posts...
Step 3: Getting comments...
```

🎯 Much cleaner, readable, and easier to handle errors.

---

## 🧠 Summary

| Concept                  | Description                                              | Example Issue                         |
| ------------------------ | -------------------------------------------------------- | ------------------------------------- |
| **Callback**             | Function passed to another function to be executed later | Common in async tasks                 |
| **Callback Hell**        | Too many nested callbacks → messy code                   | Nested `setTimeout`                   |
| **Inversion of Control** | Losing control of when a callback executes               | Library calls callback multiple times |
| **Fix**                  | Use **Promises** or **async/await**                      | Cleaner async code                    |
