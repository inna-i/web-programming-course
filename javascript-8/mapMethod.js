const users = [
    { name: 'Tony Stark'},
    { name: 'Bruce Wayne'},
    { name: 'Johny Depp'},
    { name: 'Bruce Willis'},
    { name: 'Bruce Wayne'},
];

const onlineUsers = users.map((user, index) => {
    const [firstName, lastName] = user.name.split(' ');

    return {
        name: user.name,
        firstName,
        lastName,
    }
});

console.log(onlineUsers)
