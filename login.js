// Login system
class LoginSystem {
    constructor() {
        this.users = [];
    }
    
    register(username, password) {
        this.users.push({ username, password });
        console.log(`User ${username} registered`);
    }
    
    login(username, password) {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (user) {
            console.log(`User ${username} logged in successfully`);
            return true;
        }
        console.log("Invalid credentials");
        return false;
    }
}

module.exports = LoginSystem;
