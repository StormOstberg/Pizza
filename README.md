# jQuery Pizza Builder Excercise
Use jQuery to build your own pizza order

# Instructions
Write jQuery to dynamically add and remove toppings

## Adding toppings
Link events to the buttons to insert new toppings to the pizza. If a topping is already added, it should be removed. 
The total of the order should also be updated as the toppings change.
The toppings array contains the related prices.

# IMPORTANT: 
Use the generateToppings function. Insert the returned value of the function into the corresponding topping container. 
i.e.
Click the mushroom button should insert the result of the generateToppings function into the <div class="mushrooms"></div> div.


## Cheese topping
To add/remove the cheese you need to toggle a class on the <div class="pizza"></div> element. 
Adding the class "no-cheese" will remove the cheese.
Removing the class "no-cheese" will add the cheese back to the pizza

## Generate toppings function
The generate toppings function will automatically generate the HTML required to insert the toppings. Make use of the button id to check which topping should be inserted.
button for pepperoni has an id of pepperoni, so this will be used to generate the correct HTML for the pepperoni items.

# NOTES
This project is Non-prescriptive and you have total freedom to improve or change it as you desire. The end result must be:
Clicking a topping button should add it to the pizza. 
Clicking a topping button should remove the topping if it is already added.
Update the price according to the current toppings on the pizza. 
