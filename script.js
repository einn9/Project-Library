const libraryLoop = document.querySelector("#library-loop");
const dialog = document.querySelector("#form-dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const addBook = document.querySelector(".signupForm");
const firstBookName = document.querySelector(".firstBookName");
const firstAuthorName= document.querySelector(".firstAuthorName");
const firstPages = document.querySelector(".firstPages");
const firstReadStatus = document.querySelector(".firstReadStatus");
const firstCryptoID = document.querySelector(".firstCryptoID");
const firstBook = document.querySelector("#first-book");
const exampleButton = document.querySelector("#remove-button");
const table = document.querySelector("#table-body-id");

// My book array

const myLibrary = [];

// Book prototype function

function Book() {   
}

Book.prototype.pushBook = function() {
    myLibrary.push(nameArray);
}

addBookToLibrary.prototype = Object.create(Book.prototype)
Object.setPrototypeOf(addNewBook.prototype, addBookToLibrary.prototype);

// Object function to add books

function addBookToLibrary(name, author, pages, haveRead) {
    let bookCrypto = self.crypto.randomUUID();
    this.name = name
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
    nameArray = [bookCrypto, this.name, this.author, this.pages, this.haveRead] 
    this.pushBook() 
}

const bookOne = new addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', 'Read')

// Initial book loop

for (let i = 0; i < myLibrary.length; i++) {
    firstBookName.innerHTML += `${myLibrary[i][1]}`
    firstAuthorName.innerHTML += `${myLibrary[i][2]}`
    firstPages.innerHTML += `${myLibrary[i][3]}`
    firstReadStatus.innerHTML += `${myLibrary[i][4]}`
    firstCryptoID.innerHTML += `${myLibrary[i][0]}`
}

 
showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

exampleButton.addEventListener("click", function () {
        firstBook.innerHTML = "";
});


// Add button with unique ID

function createUniqueButton(element) {
  return function() {
    return element++;
    };
}

let counter = createUniqueButton(1);

function addNewBook () {
  
  addBook.addEventListener("submit", (e) => {

    e.preventDefault();

    let bookName = document.querySelector(".bookname-input");
    let authorName = document.querySelector(".author-input");
    let pagesName = document.querySelector(".pages-input");
    let haveReadName = document.querySelector(".haveRead-input");

    const bookFour = new addBookToLibrary(bookName.value, authorName.value, pagesName.value, haveReadName.value)

    const tableBook = document.createElement("tr");
    const tableBookName = document.createElement("td");
    const tableBookAuthor = document.createElement("td");
    const tableBookPages = document.createElement("td");
    const tableBookRead = document.createElement("td");
    const tableBookCrypto = document.createElement("td");
    const tableBookButtonCell = document.createElement("td");
    const tableBookReadChild = document.createElement("td");
    const tableBookReadButton = document.createElement("button");
    const tableBookButton = document.createElement("button");

    tableBookName.classList.add("newBookName");

    const readStatusSelect = document.createElement("select");
    readStatusSelect.classList.add("readStatusForm");

    const selectOptionZero = document.createElement("option");
    selectOptionZero.innerText = "Status";

    const selectOptionOne = document.createElement("option");
    selectOptionOne.innerText = "Read";
    selectOptionOne.classList.add("options");
    selectOptionOne.value = "optionOne";

    const selectOptionTwo = document.createElement("option");
    selectOptionTwo.innerText = "Reading";
    selectOptionTwo.classList.add("options");
    selectOptionTwo.value = "optionTwo";

    const selectOptionThree = document.createElement("option");
    selectOptionThree.innerText = "Unread";
    selectOptionThree.classList.add("options");
    selectOptionThree.value = "optionThree";

    readStatusSelect.appendChild(selectOptionZero);
    readStatusSelect.appendChild(selectOptionOne);
    readStatusSelect.appendChild(selectOptionTwo);
    readStatusSelect.appendChild(selectOptionThree);


    let selectForm = document.querySelector('select');
    let optionChosen = selectForm.children[selectForm.selectedIndex];

    
    tableBookRead.textContent = optionChosen.text;

    tableBookName.textContent = `${nameArray[1]}`; 
    tableBookAuthor.textContent = `${nameArray[2]}`;
    tableBookPages.textContent = `${nameArray[3]}`;
    tableBookRead.textContent = `${nameArray[4]}`;
    tableBookCrypto.textContent = `${nameArray[0]}`;
    table.appendChild(tableBook);
    tableBook.appendChild(tableBookName);
    tableBook.appendChild(tableBookAuthor);
    tableBook.appendChild(tableBookPages);
    tableBook.appendChild(tableBookRead);
    tableBook.appendChild(tableBookCrypto);
    tableBook.appendChild(tableBookButtonCell);

    tableBookRead.appendChild(readStatusSelect);


    tableBookReadChild.appendChild(tableBookReadButton);
    tableBookButtonCell.appendChild(tableBookButton);

    

    tableBookButton.classList.add("newFormButton");
    tableBookButton.id = "one" + counter();

    
    tableBookButtonCell.appendChild(tableBookButton);

    readStatusSelect.addEventListener("click", function () {

      // Look at the previous sibling text to change current read status

      if (readStatusSelect.value == "optionOne") {
        readStatusSelect.previousSibling.textContent = readStatusSelect.options[readStatusSelect.selectedIndex].text;
        tableBookRead.appendChild(readStatusSelect);
        optionChosen  = selectForm.children[selectForm.selectedIndex];
      }
      if (readStatusSelect.value == "optionTwo") {
        readStatusSelect.previousSibling.textContent = readStatusSelect.options[readStatusSelect.selectedIndex].text;
        tableBookRead.appendChild(readStatusSelect);
        optionChosen  = selectForm.children[selectForm.selectedIndex];
      }
      if (readStatusSelect.value == "optionThree") {
        readStatusSelect.previousSibling.textContent = readStatusSelect.options[readStatusSelect.selectedIndex].text;
        tableBookRead.appendChild(readStatusSelect);
        optionChosen  = selectForm.children[selectForm.selectedIndex];
      }
    });


    tableBookButton.addEventListener("click", function () {
        tableBook.innerHTML = "";
    });


    if (bookName.value == "" || authorName.value == "" || pagesName.value == "") {
      alert("Ensure you input a value in all fields!");
    } 
    else {
      console.log("This form has been successfully submitted!");
      console.log(
      `This form has a book name of ${bookName.value} and author name of ${authorName.value}`
    );
    console.log(bookName.value, authorName.value)
    }
  });
}

addNewBook();
