import inquirer from "inquirer";
import showBanner from "node-banner";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    JPY: 111.04 // Adding JPY to currency list
};
async function convertCurrency() {
    try {
        // Display banner
        await showBanner("CURRENCY CONVERTER", "If you want currency convert, let's get started");
        const Question = await inquirer.prompt([
            {
                name: "from",
                type: "list",
                message: "Enter from ",
                choices: ['POUND', 'USD', 'EUR', 'GBP', 'INR', 'PKR']
            },
            {
                name: "to",
                type: "list",
                message: "Enter to",
                choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'JPY']
            },
            {
                name: 'amount',
                type: "number",
                message: "Enter Amount "
            }
        ]);
        const fromCurrency = currency[Question.from];
        const toCurrency = currency[Question.to];
        const amount = Question.amount;
        if (!fromCurrency || !toCurrency) {
            console.log("Invalid currency selection.");
            return;
        }
        if (isNaN(amount)) {
            console.log("Invalid amount. Please enter a valid number.");
            return;
        }
        const convertedAmount = (amount / fromCurrency) * toCurrency;
        console.log(`${amount} ${Question.from} equals ${convertedAmount.toFixed(2)} ${Question.to}`);
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
convertCurrency();
