const Hapi = require("@hapi/hapi");
const routes = require("./routes/routes");
const pasienRoutes = require("./routes/pasienRoutes");
const userRoutes = require("./routes/userRoutes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route(routes);
  server.route(pasienRoutes);
  server.route(userRoutes);

  await server.start();
  console.log(`Server berjalan di ${server.info.uri}`);
};

init();
