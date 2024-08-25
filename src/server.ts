import fastify from "fastify";
import { users } from "./routes/users";
import fastifyCors from "@fastify/cors";
const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(users);

app.listen({ port: 3333, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info(`Server listening on ${address}`);
});
