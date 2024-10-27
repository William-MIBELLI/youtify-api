import { FastifyInstance } from "fastify";
import { SpotifyPlaylistBody } from "./schemas";



async function routes(fastify: FastifyInstance, options: Object) {
  fastify.get("/test", async (request, reply) => {
    return { message: "ici CA TEST MON POTE." };
  });


  fastify.post<{ Body: SpotifyPlaylistBody}>('/playlist', async (request, reply) => {
    const { playlist } = request.body;
    console.log('PLAYLIST : ', playlist);
    return { message: 'chat' };
  })
}

export default routes