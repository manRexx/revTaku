import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@a.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Manik Rawat",
    email: "man@gmail.com",
    password: bcrypt.hashSync("wr32weqr2", 10),
  },
  {
    name: "Mard S",
    email: "dad@d.com",
    password: bcrypt.hashSync("adsfdf24324", 10),
  },
];

export default users;
