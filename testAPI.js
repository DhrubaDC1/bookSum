const url = "https://openlibrary.org/search.json?subject=technology";
const headers = new Headers({
  "User-Agent": "MyAppName/1.0 (myemail@example.com)",
});
const options = {
  method: "GET",
  headers: headers,
};
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.docs.length; i++) {
      let title = data.docs[i].title;
      let authors = data.docs[i].author_name.join(", ");
        let finalText = title + "by" + authors;
      console.log(finalText);
    }
  })
  .catch((error) => console.error("Error:", error));
