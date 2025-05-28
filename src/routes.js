const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return 'halo, ini lagi buat API'
    }
  },
  {
    method: "GET",
    path: "/user",
    handler: (request, h) => {
      return 'halo, ini user'
    }
  },
  {
    method: "GET",
    path: "/user/{userID}",
    handler: (request, h) => {
      const {userID} = request.params;
      return `halo, ini user ${userID}`;
    }
  },
  {
    method: "GET",
    path: "/user/{userID}/{name}",
    handler: (request, h) => {
      const {userID} = request.params;
      const {name} = request.params;
      return `halo, ini ${name} dengan id ${userID}`;
    }
  },
  {
    method: "GET",
    path: "/{any*}",
    handler: (request, h) => {
      return 'halaman tidak ditemukan';
    }
  },
];

module.exports = routes;