function validatePassword(password) {
    if (typeof password !== "string") {
        return false;
    }
    // Checking that the password length isn't out of bounds
    if (password.length < 12 || password.length > 64) {
        return false;
    }
    // Removing spaces
    if (/\s/.test(password)) {
        return false;
    }

    // Prevent 3+ consecutive identical characters
    if (/(.)\1{2,}/.test(password)) {
        return false;
    }
    // Checks that it has a capital alphanumerical character
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    // Checks that it has a lowercase alphanumerical character
    if (!/[a-z]/.test(password)) {
        return false;
    }
    // Checks that it has a numeric character
    if (!/\d/.test(password)) {
        return false;
    }
    // Checks that it has a special character
    if (!/[@#$%^&+=!]/.test(password)) {
        return false;
    }

    // Checks that there isn't a sequence of decimal characters too long
    // For example if maxDecimalSequence = 3 than sequences like "123" and "678" are disallowed
    // With a maxDecimalSequence of 4 "1234" would be disallowed
    const maxDecimalSequence = 4;
    // Regex to find the pattern
    const pattern = new RegExp("\\d".repeat(maxDecimalSequence));
    if (pattern.test(password)) {
        // Loop that iterates through each sequence
        for (let i = 0; i <= 10 - maxDecimalSequence; i++) {
            // Sequence is constructed
            let sequence = `${i}`;
            for (let j = 1; j < maxDecimalSequence; j++) {
                sequence += `${i+j}`;
            }
            // Checking if the sequence is present
            if (password.includes(sequence)) {
                return false;
            }
        }
    }
    // A set of common keywords to exclude
    const commonKeywords = new Set(["password", "qwerty", "welcome"]);
    // Checking each keyword to make sure they are excluded
    for (const keyword of commonKeywords) {
        if (password.toLowerCase().includes(keyword)) {
            return false;
        }
    }
    return true;
}

// Commented out test cases
// Black box test cases
// console.log(validatePassword("StrongP@ssw0rd1230!"));
// console.log(validatePassword("Strong P@ssw0rd123!"));
// console.log(validatePassword("weakpassword"));
// console.log(validatePassword("Password123!"));
// console.log(validatePassword("tG|n{0DV?,<53u{£8q9bhB;U\"xz|)2rL6Au18eT4n1Sy0NcD4&OhNdt&qv2v%QpEDau\"M5"));
// console.log(validatePassword("lowerp@ssw0rd123!"));
// console.log(validatePassword("UPPERP@SSW0RD123!"));
// console.log(validatePassword("P@sswordNumberless!"));
// console.log(validatePassword("Password123456789"));
// console.log(validatePassword("Sh0rt!"));
// console.log(validatePassword("StrongP@@@ssw0rd123!"));
// console.log(validatePassword("12444$$%%77711!"));

// Bonus test cases
// console.log(validatePassword("$%$%$%$%$%$%$%!!!!%$!"));
// console.log(validatePassword(123456789123456789));
// console.log(validatePassword("StrongP@ssw0rd123!👍👋☝♻✔🚗🍝"));