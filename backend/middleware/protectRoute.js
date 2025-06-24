import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; // jwt is name of cookie
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password"); // userId isliye likha h kyuki humne generate token function m pass kiya h userid as a argument
    // .select("-password") means password ko hatake saara user ka data user variable m store ho jayega

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    req.user = user; // request m user set kr denge aur controller m idhr se sender id access kr lenge
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
