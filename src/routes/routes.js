const routes = [
  {
    method: "GET",
    path: "/",
    handler: () => "Halo, API Identifikasi Pasien & Rekam Medis",
  },

  {
    method: "GET",
    path: "/{any*}",
    handler: () => "Halaman tidak ditemukan",
  },
];

module.exports = routes;
