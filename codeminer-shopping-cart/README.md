### Test CodeminerJP

We need to create a solution for the online shop cart.

### Shipping rules
All shipping calculations are made over the subtotal WITHOUT the shipping costs and WITHOUT any discounts. 
- For purchases above R$400.00 the shipping is free!
- For purchases bellow or equal 10kg the shipping price is: $30.
- Each 5kg above 10kg will add $7 to the shipping price. 

### The system should support these kinds of coupons
- Percentual coupon: are coupons that reduce an amount in percentage of the cost on subtotal.
- Fixed coupon: are coupons with fixed amounts that should reduce over the TOTAL.
- Free Shipping: make the shipping price become 0 when applied, and should have a minimum subtotal requirement

### Enabled Coupons 
- A: percentual coupon of 30%
- FOO: fixed coupon of $100.00
- C: free shipping coupon with minimum value of $300.50

### Available Products
- Banana, price: $10 per kg
- Apple, $20 per kg
- Orange, $30 per kg

### BACKEND

These are the endpoints that you need to write:

- Update products on the cart
- Add coupon
- Finish the checkout and get calculations

All endpoints should receive a header with a user token sent by the user's browser

### FRONTEND

You can use CONSTANTS to define COUPONS and PRODUCTS available.

Try to perform all calculations in real time without any server request. Take care with validations and build a facelit interface if you can. Please use this wireframe as a guide:

![](https://i.imgur.com/yA0G1UK.png)

OBS: A submit button can be placed but it doesn't need to submit anything. You also can just show a flash message of successful sent.

### SETUP

On your terminal, in a directory of your choice, clone the project:

### `git clone https://github.com/ebraimcarvalho/shopping-cart.git`

Then enter the project folder:

### `cd shopping-cart/`

Install the required dependencies:

### `npm i`

Now start the application:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

If you are using Linux and need administrator permissions, add sudo in front of the code to clone and add dependencies:

### `sudo git clone https://github.com/ebraimcarvalho/shopping-cart.git`
### `sudo npm i`

### CONSIDERATIONS

I started this test developing the visual part of the application, the first day was ready;
On the second day, I sought to componentize the application, being recent in this framework, I did not explore this point to the fullest, I believe this part can be better organized to become more readable and scalable.
After componentization, I started the business rules, where I felt more difficult, tried to put the product states along with the product name, price, id, quantity and subtotal information of each item, could not develop the functions to set This information, so I passed some variables to this.state, I was able to advance a little but not satisfactorily.

In theory, I was trying to hear the two inputs that would be changed by the user: the quantity input and the discount coupon input, changing the quantity input and clicking the apply coupon button would call the functions and setState values: item subtotal, shipping, discount amount and total value would be updated automatically. By clicking the button to remove coupon, a function would be called and setState to 0 the discount amount.

I could not put into practice at this time what I was thinking and unfortunately I give the incomplete test.

I also want to point out that my first contact to learn React was on 23/12/2019, exactly to take this test.
My focus in this first half of 2020 is to move forward in pure javascript language and in the second half to focus on this Framework.

I greatly appreciate the opportunity to take my first test for a company, and being Codeminer, is of great honor to me.
I also want to know how long I can apply again and perform another test.
Grateful today and always, Jonathan and Codeminer.

Ebraim Carvalho

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
