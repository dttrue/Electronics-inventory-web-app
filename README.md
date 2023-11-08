# Electronics Inventory Web Application


This is a simple web application for managing electronics

## Features

- View a list of electronic resources displayed as stylish item-cards.
- Remove resources from the list.
- Update the "in stock" status for each resource.
- Add new resources to the inventory.
- Increment and decrement item counts.
- Alert features for user interactions.
- Responsive design for various screen sizes.
- Attractive transitions for various item card images.
- A footer with contact information.

## Getting Started

Follow these steps to get the web application up and running on your local machine!

1. **Clone the Repository:**

   ```Terminal
   git@github.com:dttrue/Electronics-inventory-web-app.git

   cd electronics-inventory-app 
   ```
## Usage

- When you open the web application, you'll see a list of electronic recources displayed as stlish item-cards.
- Each item-card includes the resource name, price, stock count, description, and attractive item images.
- Use the "Remove" button to remove a resource from the list.
- To update the "on stock" status, simply click on the stauts, and it will toggle between "in stock" and "out of stock."
- You can increment and decrement item counts using the provided options.
- Use the form to add new resources to the inventory. Ensure that all required fields are filled before submitting the form.
- The web application includes alert features for user interactions to provide feedback on actions

## Stylish Item Cards

- The web application displays resources using stylish item cards. Each item card includes a resource name, price, stock count, desrciption, and an attractive image. The CSS styles for the item cards are defined in the `styles.css` file. You can customize these styles to create a unique and visually appealing design.

## Increment and Decrement Options

- The item cards provide options to increment and decrement item counts. Click on the "➡️" button to increase the count and the "⬅️" button to decrease it. These options make it easy to manage the quantity of these options by modifying the JavaScript code in the `app.js`file.

## Alert Features 

- This web application includes alert features to provide feedback to users during interactions. For example, you'll receive an alert if you attempt to submit the form without filling in the required fields. The alerts are designed to enhance the user experience and provide guidance on how to use the application effectively.

## Transitions for Item Cards Images

- The item card images are designed with smooth hover transitions to provide an attractive user experience. To customize these transitions, naviagte to the `styles.css` file and look for the CSS rules that apply to the `.item-card img` and `item-card img:hover` selectors. You can adjust properties like`transform` to control the image behavior on hover.

## Footer 

- The web application includes a footer that appears at the bottom of the page. It contains information and copyright details. You can customize the footer's appearance by modifying the CSS rules for the `footer` and `.footer-text` classes in the `styles.css` file.

# Acknowledgments

- Special thanks to Steven Zhang and Maliq Taylor for contributions and support.