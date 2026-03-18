// 1. CONST: Shop ka naam fix hai (Nahi badalna chahiye)
const shopName = "Anuj Electronics & Repairing";

// 2. LET: Total bill badal sakta hai kyunki naye items judenge
let totalBill = 0;


// 3. VAR: Purana tarika (Hum use karenge sirf ye dekhne ke liye ki ye leak hota hai)
if (true) {
    var discountStatus = "10% Discount Applied!"; 
    let secretCode = "SAVE10"; // Ye sirf is 'if' ke andar rahega
}

// --- Bill Calculation ---
const componentPrice = 500; // Const: Ek item ka price fix hai
totalBill = totalBill + componentPrice; // Let: Total badal kar 500 ho gaya

// --- Output ---
console.log("--- " + shopName + " ---");
console.log("Total Bill: " + totalBill);

// Var vs Let ka magic dekhiye:
console.log("Discount Info: " + discountStatus); // ✅ Var bahar bhi dikh raha hai (Leak)
// console.log(secretCode); // ❌ Agar aap ise uncomment karenge toh ERROR aayega