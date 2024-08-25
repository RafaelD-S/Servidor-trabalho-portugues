-- CreateTable
CREATE TABLE "Users" (
    "id" VARCHAR(36) NOT NULL DEFAULT gen_random_uuid(),
    "ip" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataDeNascimento" VARCHAR(10) NOT NULL,
    "email" TEXT NOT NULL,
    "jaGolpe" BOOLEAN NOT NULL,
    "oQueAconteceu" TEXT NOT NULL,
    "conheceGolpe" BOOLEAN NOT NULL,
    "conheceQueAconteceu" TEXT NOT NULL,
    "meioMaisComum" TEXT NOT NULL,
    "tipoMaisComum" TEXT NOT NULL,
    "modeloCelular" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
