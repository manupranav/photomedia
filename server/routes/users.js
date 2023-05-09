import { express } from "express";

import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controller/users.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

router.patch("/:id/:friendd", verifyToken, addRemoveFriend);

export default router;
