// Main application file
const LoginSystem = require('./login');

console.log("Hello World!");

function main() {
    console.log("Application started");
    
    // Initialize login system
    const loginSys = new LoginSystem();
    loginSys.register("admin", "password123");
    loginSys.login("admin", "password123");
}

main();
