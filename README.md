# Java To-Do List App (Spring Boot)

This is a simple **To-Do List web application** built using **Java** and **Spring Boot**. The app allows users to create, view, update, and delete to-do items. It demonstrates core Spring Boot concepts like REST APIs, MVC, and data persistence.

## 🚀 Features

* Add new to-do items
* View all to-dos
* Mark to-dos as complete/incomplete
* Edit to-do item description
* Delete to-do items

## 🛠 Tech Stack

* **Java 17+**
* **Spring Boot** (Spring Web, Spring Data JPA)
* **H2 Database** (in-memory for development) or any SQL DB
* **Maven** or **Gradle** (build tool)
* (Optional) **Thymeleaf** for basic frontend

## 💻 How to Run

1️⃣ **Clone the repository**

```bash
git clone https://github.com/your-username/todo-spring-boot.git
cd todo-spring-boot
```

2️⃣ **Run the app**

```bash
# If using Maven
mvn spring-boot:run

# If using Gradle
./gradlew bootRun
```

3️⃣ **Access the app**
Open your browser and go to:
`http://localhost:8080/`

## ⚙ API Endpoints (If REST API based)

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | `/todos`      | Get all to-dos     |
| POST   | `/todos`      | Create a new to-do |
| PUT    | `/todos/{id}` | Update a to-do     |
| DELETE | `/todos/{id}` | Delete a to-do     |

## 📂 Project Structure

```
src/main/java
 └── com.yourpackage.todo
      ├── controller
      ├── model
      ├── repository
      └── service
src/main/resources
 └── application.properties
```

## ✨ Future Enhancements

* Add user authentication
* Add due dates and priorities
* Connect to a real database (MySQL/PostgreSQL)
* Add front-end with React/Angular/Vue

## 📝 License

This project is open-source. Feel free to use and modify!
