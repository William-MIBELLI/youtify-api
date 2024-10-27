import Fastify from "fastify";
import youtubeRoutes from './routes/youtube/routes'

const fastify = Fastify({
  logger: true
});

fastify.register(youtubeRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 8000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}
start();