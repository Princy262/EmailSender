# Email Sender Application

The Email Sender Application is a Node.js-based web application that allows users to send emails using **NodeMailer**. It features a simple and user-friendly interface built with **EJS** templates and styled with custom CSS.

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
---

## Overview

The Email Sender Application is designed to simplify the process of sending emails. Users can enter the recipient's email address and a message, and the application will send the email using **NodeMailer**. It also provides feedback on whether the email was sent successfully or if there was an error.

---

## Live Demo

You can visit the application at [Email Sender](https://emailsender-wiua.onrender.com).  

---

## Project Structure

- **public/style.css**: Contains the styles for the application.
- **public/mailing.png**: Favicon or other static assets.
- **views/email-form.ejs**: EJS template for the email form.
- **utils/sendEmail.js**: Handles the email-sending logic using NodeMailer.
- **server.js**: Main server file that sets up routes and handles requests.
- **package.json**: Contains metadata about the project and its dependencies.
- **README.md**: The file you are currently reading.

---

## Setup

1. **Clone the repository** to your local machine:
    ```bash
    git clone https://github.com/Princy262/EmailSender.git
    cd email-sender
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

4. **Open the application** in your browser:
    ```
    http://localhost:3000
    ```

---

## Usage

1. Open the application in your browser.
2. Fill out the email form:
   - Enter the recipient's email address.
   - Write your message in the text area.
3. Click the "Send Email" button to send the email.
4. View the success or error message displayed on the page.

---

## Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature or fix bug"
    ```
4. Push to your branch:
    ```bash
    git push origin feature-name
    ```
5. Submit a pull request.

---