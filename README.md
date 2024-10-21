# Treasury Management

This project is a **Treasury Management** built with **Next.js**, **TypeScript**, and **Formik**. It is designed to handle and display payment transactions between accounts. The app features a form for initiating payments, server-side data fetching for accounts, and client-side pagination and data fetching for transactions.

### Features

- **Payment Initiation**: Users can initiate payments by filling out a form with payer and payee account details, the amount, and currency.
- **Accounts List**: Accounts data is fetched server-side and displayed in a paginated view on the client.
- **Transaction History List**: Transaction history is fetched client-side based on the account number selected from the drop-down.
- **Toast Notifications**: Real-time feedback for the user when initiating a payment.
- **Form Validation**: Built-in validation using Formik and Yup to ensure correct data input.

### Tech Stack

- **Next.js** (v14)
- **TypeScript**
- **Formik** for form handling
- **Yup** for validation
- **Moment.js** for date formatting
- **Toast Notifications** via [Sonner](https://www.npmjs.com/package/sonner) for displaying client-side alerts

## Getting Started

### Prerequisites

- **Node.js** >= 18.x.x
- **pnpm** for package management

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/NoyanAziz/treasury-management.git
    ```
2. Install dependencies:
    ```bash
    cd treasury-management
    pnpm install
    ```

### Running the Development Server

To start the development server, run:

```bash
pnpm dev
```

### Reference
This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.
