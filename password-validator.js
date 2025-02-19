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
console.log(validatePassword("Strong P@ssw0rd123!"));
console.log(validatePassword("weakpassword"));
console.log(validatePassword("Password123!"));
console.log(validatePassword("tG|n{0DV?,<53u{£8q9bhB;U\"xz|)2rL6Au18eT4n1Sy0NcD4&OhNdt&qv2v%QpEDau\"M5"));
console.log(validatePassword("lowerp@ssw0rd123!"));
console.log(validatePassword("UPPERP@SSW0RD123!"));
console.log(validatePassword("P@sswordNumberless!"));
console.log(validatePassword("Password123456789"));
console.log(validatePassword("Sh0rt!"));
console.log(validatePassword("StrongP@@@ssw0rd123!"));
console.log(validatePassword("12444$$%%77711!"));