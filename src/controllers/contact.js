const getUserContact = (req, res) => {
    res.send('get user contact all user');
    }

const createUserContact = (req, res) => {
    res.send('Create a new user contact');
    }

const updateUserContact = (req, res) => {
    res.send('update a user contact');
    }

const deleteUserContact = (req, res) => {
    res.send('delete user');
    }

module.exports = { getUserContact, createUserContact, updateUserContact, deleteUserContact }