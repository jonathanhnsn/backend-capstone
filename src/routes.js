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
    path: "/users",
    handler: (request, h) => {
      return 'halo, ini user'
    }
  },
  {
    method: "GET",
    path: "/users/{userID}",
    handler: (request, h) => {
      const {userID} = request.params;
      return `halo, ini user ${userID}`;
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