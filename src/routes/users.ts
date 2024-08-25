import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function users(app: FastifyInstance) {
  app.get("/users", async () => {
    const users = await prisma.users.findMany();

    return users;
  });
  app.post("/users", async (request, reply) => {
    const body: any = request.body;
    const users = await prisma.users.create({
      data: {
        nome: body.nome,
        ip: body.ip,
        dataDeNascimento: body.dataDeNascimento,
        email: body.email,
        jaGolpe: body.jaGolpe,
        oQueAconteceu: body.oQueAconteceu,
        conheceGolpe: body.conheceGolpe,
        conheceQueAconteceu: body.conheceQueAconteceu,
        meioMaisComum: body.meioMaisComum,
        tipoMaisComum: body.tipoMaisComum,
        modeloCelular: body.modeloCelular,
      },
    });
    reply.send({
      mensagem: `Dados recebidos: ${body.nome}, ${body.ip}, ${body.dataDeNascimento}, ${body.email}, ${body.jaGolpe}, ${body.oQueAconteceu}, ${body.conheceQueAconteceu}, ${body.meioMaisComum}, ${body.tipoMaisComum}, ${body.modeloCelular}`,
    });
  });
}
