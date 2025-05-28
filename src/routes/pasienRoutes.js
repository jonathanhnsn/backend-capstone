const {
  addPasienHandler,
  getAllPasienHandler,
  getPasienByIdHandler,
  updatePasienByIdHandler,
  deletePasienByIdHandler,
} = require("../handlers/pasienHandler");

const pasienRoutes = [
  {
    method: "POST",
    path: "/pasien",
    handler: addPasienHandler,
  },
  {
    method: "GET",
    path: "/pasien",
    handler: getAllPasienHandler,
  },
  {
    method: "GET",
    path: "/pasien/{pasienId}",
    handler: getPasienByIdHandler,
  },
  {
    method: "PUT",
    path: "/pasien/{pasienId}",
    handler: updatePasienByIdHandler,
  },
  {
    method: "DELETE",
    path: "/pasien/{pasienId}",
    handler: deletePasienByIdHandler,
  },
];

module.exports = pasienRoutes;
