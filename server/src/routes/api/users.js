import { Router } from "express";
import { getAllUserData } from "./service/user.service";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const api = Router();

api.get("/:username", async(request, response) => {
    const { username } = request.params;
    const data = await getAllUserData(username);
    const user = await prisma.user.create({
        data: {
          login: data.user.login,
          name: data.user.name,
          company: data.user.company,
          avatar_url: data.user.avatar_url,
          location: data.user.location,
          followers: data.user.followers,
          following: data.user.following
        },
    });
    //response.json(user)
});

export default api;