const baseUrl = `https://harlinskyi.somee.com/api/Pizza`
let promise = new Promise(async function (resolve, reject) {
    var pizzas = await fetch(`${baseUrl}/list`)
        .then(response => response.json());
    setTimeout(() => resolve(pizzas), 300);

});
