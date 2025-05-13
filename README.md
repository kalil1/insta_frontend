## InstaClone Project

This project consists of two main components:

1. **Rails API** - Backend service.
2. **React Frontend** - Client-side application.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Ruby** (version 2.7.x or higher)
- **Rails** (version 6.x or higher)
- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)
- **PostgreSQL** (version 12.x or higher)

## Setup Instructions

### 1. Clone the Repositories

First, clone the repositories for both the frontend and the backend.

```bash
# Clone the Rails API
git clone https://github.com/kalil1/insta_clone.git

# Clone the React frontend
git clone https://github.com/kalil1/insta_frontend.git
```
### 2. Setting Up the Rails API
1. Navigate to the Rails API Directory
```bash
cd insta_clone
```
2. Install Gems
```bash
bundle install
```
3. Configure the Database
- Update the config/database.yml file with your PostgreSQL credentials if necessary.

- Set Up the Database
```bash
rails db:create
rails db:migrate
```
4. Seed the Database
To populate the database with initial data:

```bash
rails db:seed
```
- Start the Rails Server
The API is configured to run on port 5000:

```bash
rails server -p 5000
# The Rails API should now be running at http://localhost:5000.
```
### 3. Setting Up the React Frontend
1. Navigate to the React Frontend Directory
```bash
cd ../insta_frontend
```
- Install Dependencies
```bash
npm install
```
- Start the React App

```bash
npm start
# The React app should now be running at http://localhost:3000.
```

4. Access the Application
- With both the Rails API and React frontend running, you can now interact with the app by navigating to http://localhost:3000 in your browser.

## Troubleshooting
- Ensure that PostgreSQL is running and accessible.
Verify that the ports 3000 (for React) and 5000 (for Rails API) are not in use by other applications.
# Quick Preview 
![INSTACLONE](https://github.com/kalil1/insta_frontend/blob/main/public/UpdatedFE.png)
![INSTACLONE](https://github.com/kalil1/insta_frontend/blob/main/public/PM.png)
