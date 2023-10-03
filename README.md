# walmart-list

This is an app I am creating to make my mother and my weekly shopping experience at Walmart faster and more productive. It is a shopping list. You can add new items to it either from a dropdown list of previously entered items, or from typing in a new entry. As you put items in your cart from the list, you can select the item and it will be crossed off. I'm contemplating check boxes instead. 

Now then, we have created a specific path that we travel through Walmart for convenience. Based on this route that we take, I have created some basic 'Category Areas' and numbered them in the order that we walk to them. When I add items to the Shopping List, I have the option of specifying which category that item can be found in. Therefor the items get sorted in my list and placed under their declared category. This eliminates having to backtrack from not seeing an item until after passing that area.

I hope to, at some later time, incorporate Walmart's API's to do a product search in real time and record the actual isle number that an item is located as well as if it is in-stock inside the store or not. Then possibly even include a map with the isles numbered accordingly and GPS to visually help find the items on the list. 

TO USE:
Clone to your local drive. Using VS Code, open the folder titled "walmart-list". Open the terminal (I use Bash terminal) and type 'npm install' to load all the required dependencies. Then type 'npm start' to run it. Depending on which device you wish to view it on (web, android, ios) just press the corresponding letter when it displays in the terminal. And voilà!
