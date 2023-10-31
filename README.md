# Welcome to the Payment App with Next.js, Supabase, and Hanko.io Authentication

Hey there! This project is all about building a Payment App from scratch using some cool technologies:

- [Next.js](https://nextjs.org/): Our frontend framework.
- [Supabase](https://supabase.io/): The database that stores our user data and transactions.
- [Hanko.io](https://www.hanko.io/): Our authentication provider. We're using this to make sure our users are who they say they are.

## What's in the Box

### Setting Up the Next.js App

1. We started by creating a Next.js app. If you're not familiar with Next.js, it's a fantastic framework for building React applications.

2. Then, we installed a couple of essential dependencies, such as `supabase-js` and `jose`.

### Configuring the Supabase Database

1. The heart of our app is Supabase, a powerful database-as-a-service. We configured it and created two important tables:

   - `users`: It stores user data, including their ID, email, user ID, and balance.
   - `transactions`: This one keeps track of all the transactions happening in our app.

### Authentication with Hanko.io

1. Authentication is a critical part of any app. We chose Hanko.io for this purpose, and it's working like a charm. Users get a JWT token after they log in.

### User Registration and Database Interaction

1. We created an API route in Next.js for user registration. Here's how it works:
   
   - We read the JWT token from Hanko.io to get the user's info.
   - Then, we check if the user is already in our `users` table. If not, we create a new record for them.

### Handling Transactions

1. Our app lets users send money to each other. We built an API route for handling these transactions.

2. Here's what happens when a transaction is initiated:

   - We check if the user is authorized to perform the transaction.
   - We fetch the sender's and receiver's data from the `users` table.
   - Calculate the new balances for both parties.
   - Update their balances in the database.

### Frontend Components

1. Our app includes various frontend components like the balance display, transaction form, and notification panel. They make our app user-friendly.

### Fetching User Data

1. We created a function to fetch user data from the backend. When you log in, your data is displayed, including your balance and transaction status.

### Error Handling

1. We've implemented error handling for API requests and transactions. If something goes wrong, we show error messages to the user.

### Integration with Paystack (Optional)

If you need payment integration, you can follow Paystack's documentation. This part is optional and can be adapted to your specific payment requirements. This is not yet applied to our app

## How to Use the App

1. Register and log in with Hanko.io authentication.

2. You'll be rewarded with a fake 1,000 naira to perform transaction.

3. You can now send money to other users using their email address.

4. Your balance and transaction history are available for you to check out.

5. You can't fund or withdraw from your account yet, so have fun as you play around.

## Some Additional Notes
1. Ensure you have robust security measures in place, especially for handling transactions and user data.

2. Keep your dependencies and type declarations up to date.

3. This project serves as a solid foundation for your payment application. Feel free to build on it and add more features as needed.

Happy coding! If you have any questions or need assistance, don't hesitate to ask.