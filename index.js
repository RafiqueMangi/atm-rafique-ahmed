import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly Enter Your Id"
    },
    {
        type: "number",
        name: "userPin",
        message: "kindly Enter Your Pin"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving",],
        message: "select your account type",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast Cash", "withdraw",],
        message: "select your transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [500, 5000, 10000, 20000],
        message: "select your amount",
        when(answers) {
            return answers.transactionType == "fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "withdraw";
        },
    },
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remianing = balance - EnteredAmount;
        console.log("your remaining balance is", remianing);
    }
    else {
        console.log("Insuficient Balance  ");
    }
}
