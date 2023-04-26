function schoolLibrary(input) {
    let books = input.shift().split('&');

    let index = 0;
    while (input[index] !== 'Done') {
        let [command, token1, token2] = input[index].split(' | ');
        switch (command) {
            case 'Add Book':
                if (!books.includes(token1)) {
                    books.unshift(token1);
                }
                break;
            case 'Take Book':
                if (books.includes(token1)) {
                    books.splice(books.indexOf(token1), 1);
                }
                break;
            case 'Swap Books':
                if (books.includes(token1) && books.includes(token2)) {
                    let temp = books[books.indexOf(token1)];
                    let index = books.indexOf(token2);
                    books[books.indexOf(token1)] = token2;
                    books[index] = temp;
                }
                break;
            case 'Insert Book':
                if (!books.includes(token1)) {
                    books.push(token1);
                }
                break;
            case 'Check Book':
                if (books[Number(token1)]) {
                    console.log(books[Number(token1)]);
                }
        }
        index++;
    }
    console.log(books.join(', '));
}
schoolLibrary([
    "Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"]) 