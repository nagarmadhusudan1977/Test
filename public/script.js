async function sendData() {
    const name = document.getElementById("nameInput").value;

    const res = await fetch("/api/greet", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
    });

    const data = await res.json();
    document.getElementById("response").innerText = data.message;
}