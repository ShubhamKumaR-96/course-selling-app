const { Router } = require("express"); // Destructure Router from express
const bcrypt = require("bcrypt");
const { z, string } = require("zod");
const { User } = require("../schema/db");
const userRouter = Router(); // Create a router instance

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  const requiredBody = z.object({
    email: z.string().min(4).max(20).email(),
    password: z.string().min(8).max(50),
    firstname: z.string().min(8).max(50),
    lastname: z.string().min(8).max(50),
  });

  const parsedatawithSuccess = requiredBody.safeParse(req.body);

  if (!parsedatawithSuccess.success) {
    res.status(400).json({ err: parsedatawithSuccess.error });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await User.create({
      email: email,
      password: hashedPassword,
      firstname: firstname,
      lastname: lastname,
    });

    res.json({
      message: "Signup successful",
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Signin endpoint
userRouter.post("/signin", (req, res) => {
  // Corrected the endpoint path
  res.json({
    message: "Signin successful",
  });
});

// Purchases endpoint
userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "List of purchases",
  });
});

// Export the router
module.exports = userRouter; // Export directly, no need for an object
