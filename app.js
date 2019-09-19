const order = {
    toppings: [],
    basePrice: 80,
    total: 80
}

const toppings = [{
    name: 'pepperoni',
    price: 20
}, {
    name: 'mushroom',
    price: 40
}, {
    name: 'cheese',
    price: 0
}, {
    name: 'pineapple',
    price: 30
}
]

// Cache topping containers
let $pizza = null;
let $mushrooms = null;
let $pepperoni = null;
let $pineapple = null;
let $total = null;

$(document).ready(function () {
    // Write the best jQuery ever here
    $pizza = $(".pizza");
    $mushrooms = $(".mushrooms");
    $pepperoni = $(".pepperonis");
    $pineapple = $(".pineapples");
    $total = $("#total");

    $("#pepperoni").click(function () {
        if ($pepperoni.children().length == 0) {
            let topping = generateTopping(toppings[0]);
            $pepperoni.html(topping);
            pushOrder(0, "add");
        }
        else {
            $pepperoni.empty();
            pushOrder(0)
        }
    })

    $("#mushroom").click(function () {
        if ($mushrooms.children().length == 0) {
            let topping = generateTopping(toppings[1]);
            $mushrooms.html(topping);
            pushOrder(1, "add");
        }
        else {
            $mushrooms.empty();
            pushOrder(1);
        }
    })
    $("#cheese").click(function () {
        $pizza.toggleClass("no-cheese")
        if(order.toppings.cointains(toppings[2])){
            pushOrder(2)
        }
        else{
        pushOrder(2, "add")
        }
    })
    $("#pineapple").click(function () {
        if ($pineapple.children().length == 0) {
            let topping = generateTopping(toppings[3]);
            $pineapple.html(topping);
            pushOrder(3, "add");
        }
        else {
            $pineapple.empty();
            pushOrder(3);

        }
    })
});

function pushOrder(index, opperation = "subtract") {
    if (opperation == "add") {
        order.total = order.total + toppings[index].price;
        order.toppings.push(toppings[index].name);
        $total.text(order.total);
    }
    else {
        order.total = order.total - toppings[index].price;
        $total.text(order.total);
        order.toppings = $.grep(order.toppings, function(value){
            return value != toppings[index].name;
        })
    }
}

// Automatically generate the toppings based on the name and id from the button.
function generateTopping(topping) {
    const looper = Array(10).fill(topping.name);
    return looper.map(item => `<div class="${item}"></div>`).join('');
}