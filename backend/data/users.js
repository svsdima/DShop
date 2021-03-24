import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Администратор',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Николай Вилисов',
        email: 'nik@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Анна Резникова',
        email: 'anna@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;