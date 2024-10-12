// create your coffee object array here
var orders = [{type: "latte", milk: true, customer: "Alice"},
    {type: "black", milk: false, customer: "Barry"},
    {type: "americano", milk: false, customer: "Charlie"},
    {type: "iced", milk: true, customer: "Dave"},
    {type: "latte", milk: true, customer: "Ester"}
]
// creat your print order function here
for(let i = 0; i < orders.length; i++) {
   console.log(orders.customer, orders.type, orders.milk)
}