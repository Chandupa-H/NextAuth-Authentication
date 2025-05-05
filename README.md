# NextAuth Authentication App

This is a Next.js application demonstrating user authentication using **NextAuth.js** with Google and Apple providers, integrated with **MongoDB** for user storage. The app features a home page with navigation, a sign-up/sign-in page, a protected page (accessible only to authenticated users), and a public page. It uses the **Next.js App Router**, Client Components, and **Tailwind CSS** for styling.

## Features

- **Authentication**: Sign in with Google or Apple using NextAuth.js.
- **Session Management**: Client-side session handling with `useSession` and `SessionProvider`.
- **Protected Routes**: Middleware protects the `/protected` route, redirecting unauthenticated users to `/signup`.
- **MongoDB Integration**: Stores user data (email, name, provider) in MongoDB.
- **Responsive UI**: Styled with Tailwind CSS, featuring a clean and modern design.
- **Navigation**: Home page with buttons for Protected, Public, Sign In, Sign Up, and Sign Out.
- **Error-Free**: Resolves common NextAuth issues (e.g., `useSession` errors, server/client component conflicts).

## Technologies

- **Next.js**: 14.x (App Router)
- **NextAuth.js**: 4.x (Authentication)
- **MongoDB**: 5.x/6.x (Database)
- **Mongoose**: 7.x (MongoDB ORM)
- **Tailwind CSS**: 3.x (Styling)
- **Node.js**: 18.x or later
- **JavaScript**: No TypeScript

## Prerequisites

Before running the project, ensure you have:

- **Node.js**: Version 18.x or later ([Download](https://nodejs.org/))
- **MongoDB**: Local or cloud instance (e.g., MongoDB Atlas) ([Setup](https://www.mongodb.com/docs/manual/installation/))
- **Google Cloud Console**: For Google OAuth credentials ([Guide](https://developers.google.com/identity/protocols/oauth2))
- **Apple Developer Account**: For Apple Sign-In credentials ([Guide](https://developer.apple.com/sign-in-with-apple/))
- **Git**: For cloning the repository ([Download](https://git-scm.com/))

## Setup Instructions

1. Clone the Repository

```bash
git clone https://github.com/Chandupa-H/NextAuth-Authentication.git
cd your-repo-name

2. Install Dependencies
npm install

3. Configure Environment Variables
Create a .env.local file in the root directory and add these

MONGODB_URI=mongodb://localhost:27017/yourdbname
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
APPLE_CLIENT_ID=your_apple_client_id
APPLE_CLIENT_SECRET=your_apple_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret

NEXTAUTH_SECRET: A random string (e.g., generate with openssl rand -base64 32).

5. Run the Development Server
npm run dev


Home Page (/): Displays navigation buttons:
Protected: Navigates to /protected (requires authentication).
Unprotected: Navigates to /NotProtected (accessible to all).
Sign In: Navigates to /signup for login.
Sign Up: Navigates to /signup for registration.
Sign Out: Appears when logged in, logs out and redirects to /.
Sign Up/Sign In (/signup): Log in with Google or Apple.
Protected Page (/protected): Shows user email if logged in; redirects to /signup if not.
Public Page (/public-page): Public content.
```
