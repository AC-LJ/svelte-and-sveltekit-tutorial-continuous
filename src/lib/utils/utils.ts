// a great place to put some utility functions

export async function getWord() {
    const response = await fetch(
        "https://random-word-api.herokuapp.com/word?number=1",
    );
    // console.log(response)
    const data = await response.json();
    if (Math.random() > 0.3) return data;
    else return Error("Simulated failure");
}
