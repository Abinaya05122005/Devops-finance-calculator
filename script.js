function calculateFinance() {

    let income = Number(
        document.getElementById("income").value
    );

    let expenses = Number(
        document.getElementById("expenses").value
    );

    let investment = Number(
        document.getElementById("investment").value
    );


    if (income <= 0) {

        alert("Please enter a valid monthly income.");

        return;
    }


    if (expenses < 0 || investment < 0) {

        alert("Expenses and investment cannot be negative.");

        return;
    }


    // Calculate remaining money

    let remaining = income - expenses - investment;


    // Calculate savings rate

    let savingRate =
        ((income - expenses) / income) * 100;


    if (savingRate < 0) {
        savingRate = 0;
    }


    // Financial health

    let health;

    let message;


    if (remaining < 0) {

        health = "Poor";

        message =
            "Your expenses are higher than your available income. Try reducing unnecessary expenses.";

    }
    else if (savingRate < 10) {

        health = "Needs Improvement";

        message =
            "Your savings rate is low. Consider increasing your monthly savings.";

    }
    else if (savingRate < 20) {

        health = "Average";

        message =
            "Your finances are stable, but you can improve your savings rate.";

    }
    else {

        health = "Good";

        message =
            "Great job! You are maintaining a healthy savings rate.";

    }


    // Display results

    document.getElementById("remaining").innerText =
        "₹" + remaining.toLocaleString("en-IN");


    document.getElementById("savingRate").innerText =
        savingRate.toFixed(1) + "%";


    document.getElementById("investmentResult").innerText =
        "₹" + investment.toLocaleString("en-IN");


    document.getElementById("health").innerText =
        health;


    document.getElementById("message").innerText =
        message;
}
