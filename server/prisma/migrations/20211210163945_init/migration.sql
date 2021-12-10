-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "login" TEXT,
    "avatar_url" TEXT,
    "name" TEXT,
    "company" TEXT,
    "location" TEXT,
    "followers" INTEGER,
    "following" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
