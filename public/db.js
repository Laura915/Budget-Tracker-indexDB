let db;

// creates "budget" database.
const request = indexedDB.open("budget", 1);

// creates "pending" schema
request.onupgradeneeded = function(event) {
   const db = event.target.result;
   db.createObjectStore("pending", { autoIncrement: true });
 };

request.onsuccess = event => {
    console.log(request.result);
};
