async function calculateFinance() {

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

    try {

        const response = await fetch("http://localhost:5000/api/finance/calculate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ income, expenses, investment }),
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.error || "Something went wrong.");
            return;
        }

        // Display results

        document.getElementById("remaining").innerText =
            "₹" + data.remaining.toLocaleString("en-IN");

        document.getElementById("savingRate").innerText =
            data.savingRate + "%";

        document.getElementById("investmentResult").innerText =
            "₹" + data.investment.toLocaleString("en-IN");

        document.getElementById("health").innerText =
            data.health;

        document.getElementById("message").innerText =
            data.message;

    } catch (err) {

        alert("Could not connect to the server. Make sure the backend is running.");
        console.error(err);
    }
}
