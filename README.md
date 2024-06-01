# Web Programming Project

This is a Web Programming project using Node.js and MongoDB, designed to run in a Docker container.

## Project Setup

Follow these steps to set up and run the project:

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)

### Cloning the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/Web_Programming_Project.git
cd Web_Programming_Project
```

### Build and Run the Containers

Build the docker and run the containers

```bash
docker-compose up --build
```

This command will build the Docker image and start both the application and the MongoDB container. The Node.js application will be accessible at http://localhost:9000.


# Additional Notes

## Environment Variables

Ensure you have a .env file in the root of the project with the following contents:


```env
PORT=9000
MONGODB=mongodb://mongo:27017/pizzaAPI
SECRET_KEY=a7db7ashd7ashd7ahsd7ashd7ashd7hasd7g2367f4e219er
ACCESS_KEY=klcdbg3of78hrovi-+fdgfdb-*gfd/bc32
ACCESS_EXPIRES=30m
REFRESH_KEY=drjh23rgoh9856-+543y647*/brte/vfdh654*
REFRESH_EXPIRES=3d
PAGE_SIZE=25
```

# Accessing the Application
Open your web browser and go to
```web
http://localhost:9000
```
#MongoDB

The MongoDB instance will be accessible inside the Docker network at mongodb://mongo:27017/pizzaAPI.

#Stopping the Containers

To stop the containers, press Ctrl+C in the terminal where the containers are running. Alternatively, you can use the following command in another terminal:

```bash
docker-compose down
```



