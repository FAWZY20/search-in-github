import { Router } from "express";
import { getAllUserData } from "./service/user.service";
const api = Router();

api.get("/:username", async (request, response) => {
  const { username } = request.params; 
  const data = await getAllUserData(username) ;

  response.json({
    data
  });
});

export default api;
