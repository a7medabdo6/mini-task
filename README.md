# Running the React App Locally

This guide provides step-by-step instructions to set up and run the React app locally using Yarn.

## Prerequisites

Ensure the following software is installed on your machine:

- [Node.js](https://nodejs.org/) (v20 or later is recommended)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) (v1.x or later)

You can verify the installations by running the following commands:

```bash
node -v
yarn -v
```

## Clone the Repository

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/a7medabdo6/mini-task.git
   ```

2. Navigate to the project directory:
   ```bash
   cd mini-task
   ```

## Install Dependencies

Install all the required dependencies by running:

```bash
yarn install
```

This command will read the `package.json` file and install the necessary packages.

## Running the Development Server

To start the development server, run:

```bash
yarn start
```

This will start the application and make it available at:

```
http://localhost:3000
```

The terminal will display the exact URL.

## Building the Application

To create a production build of the application, run:

```bash
yarn build
```

The optimized build will be available in the `build/` directory. You can deploy this directory to a static server.

## Using Tailwind CSS

This project uses Tailwind CSS for styling. If you make changes to the `tailwind.config.js` file, restart the development server to apply the updates.

## Notes

- If you encounter any issues, make sure all dependencies are correctly installed and the versions of Node.js and Yarn match the prerequisites.
- For any custom environment variables, create a `.env` file in the root directory and add your configurations.

## Additional Resources

- [React Documentation](https://reactjs.org/)
- [Yarn Documentation](https://classic.yarnpkg.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
