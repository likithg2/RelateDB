# 🔗 RelateDB

**Exploring document relationships with MongoDB and Mongoose.**

RelateDB is a hands-on Node.js project that demonstrates how related data can be organized, connected, and retrieved in MongoDB using Mongoose. It explores referenced documents, document population, and embedded subdocuments through practical examples.

## ✨ Features

- **Customer–Order Relationships:** Associate customers with multiple orders using document references.
- **User–Post Relationships:** Connect posts to their respective authors.
- **Document Population:** Retrieve referenced documents using Mongoose's population functionality.
- **Selective Field Population:** Retrieve specific fields from related documents.
- **Embedded Subdocuments:** Store multiple addresses within a user document.
- **MongoDB Connectivity:** Connect to a local MongoDB database through Mongoose.

## 🛠️ Tech Stack

- Node.js
- JavaScript
- MongoDB
- Mongoose

## 📁 Project Structure

- **models/customer.js:** Demonstrates customer and order relationships.
- **models/posts.js:** Demonstrates user and post relationships, including population and field selection.
- **models/user.js:** Demonstrates embedded address subdocuments.
- **package.json:** Contains project metadata and dependencies.
- **package-lock.json:** Records the resolved dependency versions.

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Community Server running locally

### Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Install the dependencies using npm.
4. Ensure the local MongoDB server is running.
5. Run each JavaScript file separately from the project root using Node.js.

The examples connect to a local MongoDB database named **relationDemo**.

## 📚 Concepts Explored

### 1. Referenced Documents

Learn how one document can store references to other documents using MongoDB ObjectIds. This is demonstrated through customer–order and user–post relationships.

### 2. Population

Explore how Mongoose resolves document references and retrieves related data. The project also demonstrates selecting specific fields from populated documents.

### 3. Embedded Subdocuments

Understand how related information, such as a user's addresses, can be stored directly inside a parent document.

### 4. Referenced vs. Embedded Data

Compare the two approaches to data modeling and understand when separately managed documents or embedded information may be more appropriate.

## 🎯 Learning Objectives

- Understand relationships in a document-oriented database.
- Work with Mongoose schemas and models.
- Establish references between MongoDB documents.
- Retrieve related documents through population.
- Select specific fields from referenced documents.
- Model nested data using embedded subdocuments.

## ⚠️ Notes

- This project is intended for learning and experimentation.
- Run each example separately to observe its behavior.
- Repeated execution of insertion operations may create duplicate records.
- MongoDB must be running locally before executing the examples.

## 👨‍💻 Author

**Likith G**

GitHub: [likithg2](https://github.com/likithg2)

## 📄 License

For educational use. Add a license if you intend to distribute the project under specific terms.
