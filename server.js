const express = require("express");
const path = require("path");
const sendEmail = require("./utils/sendEmail");
const app = express();
const PORT = process.env.PORT || 3000;

// Set the views directory and view engine
app.set("views", path.join(__dirname, "views")); // Explicitly set the views directory
app.set("view engine", "ejs");

// Serve static assets
app.use(express.static("public"));

// Parse form data
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Routing
app.get("/", (req, res) => {
  res.render("email-form"); // Render the email-form.ejs file
});

// Route to send the email
app.post("/send-email", async (req, res) => {
  try {
    const { email, message } = req.body;
    console.log(email, message);
    await sendEmail(email, message);
    res.render("email-form", {
      status: "success",
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).render("email-form", {
      status: "error",
      message: "Error sending email.",
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});