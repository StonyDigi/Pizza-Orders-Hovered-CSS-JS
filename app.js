const orders = [
    {
        id: 1,
        pizza: "Hawaii",
        extra: "Kukorica",
        ital: "Pepsi zero",
        ar: 2350,
        kep: "https://images.pexels.com/photos/14000254/pexels-photo-14000254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
    {
        id: 2,
        pizza: "Songoku",
        extra: "Sajt",
        ital: "Fanta narancs",
        ar: 2150,
        kep: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
    {
        id: 3,
        pizza: "Húsimádó",
        extra: "Csípős Paprika",
        ital: "Ásványvíz",
        ar: 2500,
        kep: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 4,
        pizza: "Pikáns",
        extra: "Sajt",
        ital: "Nestea",
        ar: 2900,
        kep: "https://images.pexels.com/photos/14000081/pexels-photo-14000081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 5,
        pizza: "Bolognai",
        extra: "Oliva",
        ital: "Fanta narancs",
        ar: 2450,
        kep: "https://images.pexels.com/photos/2274787/pexels-photo-2274787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 6,
        pizza: "Korfu",
        extra: "Csirke",
        ital: "Pepsi zero",
        ar: 3600,
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }

]

const result = document.querySelector(".result");

let output = "";

orders.map((pizza => {

    output += `
              <div class="order">
                <div>
                    <img src="${pizza.kep} alt="${pizza.pizza}" />
                </div>
                
                <h3>${pizza.pizza}<h3>
                <hr>
                <h4>Ár: ${pizza.ar} Ft</h4>
                <p>Extra: ${pizza.extra}</p>
                <p>Ital: ${pizza.ital}</p>

              </div>`;

              result.innerHTML = output;
}))


