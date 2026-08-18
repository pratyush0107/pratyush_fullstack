const fs = require("fs");
fs.writeFile("student.txt", "Hello CSE-25", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File created successfully");

    // 2. Read the file
    fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("File content:", data);

        // 3. Write new content
        fs.writeFile("student.txt", "Welcome to Node.js", (err) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("File written successfully");
        });
    });
});