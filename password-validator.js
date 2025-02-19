function validatePassword(password) {
    if (typeof password !== "string") return false;
    if (password.length < 12 || password.length > 64) return false;
    if (/\s/.test(password)) return false; // No spaces allowed

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@#$%^&+=!]/.test(password);

    // Prevent 3+ consecutive identical characters
    if (/(.)\1{2,}/.test(password)) return false;

    const commonPasswords = new Set(["Password1!", "Qwerty123$", "12345678!", "Welcome1!"]);
    if (commonPasswords.has(password)) return false;

    return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}

console.log(validatePassword("StrongP@ssw0rd123!"));