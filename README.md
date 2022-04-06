# Nextjs MongoDB Blog
veryBlog is an open-source blog with [Nextjs](https://nextjs.org) and [MongoDB](https://www.mongodb.com) database.

![localhost_3000_](https://user-images.githubusercontent.com/76770827/162028213-a3892802-7e5e-4d10-be51-7136f8298b27.png)

## Setup
### Cloning and Installing The Dependencies

Clone the repository to your local machine:

```bash
git clone https://github.com/SorenaPaydar/Nextjs-MongoDB-Blog.git
```
Install the dependencies:
```bash
npm install 
```

### Environment Setup

Create a file called .env.local in the root folder of the project and fill in the information as shown below:
```bash
MONGO_URL= #CONNECTION_STRING
API_URL=http://localhost:3000/api/blogs
```
> Create MongoDB Atlas database and replace your database connection string with #CONNECTION_STRING.

> Set driver version to `2.2.12 or later`.

### Starting the server

You can now start the server using the following command:
```bash
npm run dev
```
or
```bash
npm run build
```
after build process completed use the following command to start the server:
```bash 
npm run start
```
