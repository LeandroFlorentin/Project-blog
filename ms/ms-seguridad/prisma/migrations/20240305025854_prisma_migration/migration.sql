-- CreateTable
CREATE TABLE "users" (
    "iduser" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idfollow" SERIAL NOT NULL,
    "perfil_image" JSONB,
    "social_media" JSONB,
    "last_modification" TIMESTAMP(3) NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL,
    "disabled" BOOLEAN NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("iduser")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
