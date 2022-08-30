# w9-inventory-app

## Overview

| Features 	| As a user...                                                                      	|
|----------	|-----------------------------------------------------------------------------------	|
| Tier 1   	| I want to view all items in the inventory.<br>I want to view any individual item. 	|
| Tier 3   	| I want to remove an item from the inventory.                                      	|
| Tier 4   	| I want to remove an item from the inventory.                                      	|
| Tier 5   	| CSS or Pick your next feature.                                                    	|



## User Stories

* Objective: Students will collaborative build an Inventory App for a Local Warehouse

### Tier I — MVP Application

* As a User, I want to view all items in inventory
	* Sequelize Model for Item
	* Name, Description, Price, Category, Image
	* Express Route to GET all Items
	* Front-end View for all Items

* As a User, I want to view any individual item 
	* Express Route to GET one Item
	* Front-end view for one item (click to see)


### Tier II — Adding an Item

* As a User, I want to add an item by completing a form
	* Add Item front-end form
	* Express Route to ADD the Item
	* Form or Fetch request to add item when form is submitted

### Tier III — Deleting an Item

* As a User, I want to  remove an item from inventory
	* Delete button on Single Item View
	* Express Route to DELETE the Items
	* Fetch request to delete item when button is clicked

 
### Tier IV — Updating an Item

* As a User, I want to edit an item by filling a form
	* Edit form on Single Item View
	* Express Route to UPDATE the Items
	* Fetch request to update item when form is submitted

### Tier V — Bonus Stuff

* As a User, I want my Inventory site to be visually stunning

* As a User, I want to add items to a cart and purchase

* As a User, I want to use the application on a mobile browser

* As an Admin, I want all Add and Edit item requests to have server-side validations