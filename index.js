const names = ['Lisa', 'Kaitlin', 'Jan'];

const msgCards = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        msgCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return msgCards;
}
//writeCards(names, 'surprise'); 

function countDown(n) {
    while (n >= 0) {
        console.log(n--);
    }
}
//countDown(10);