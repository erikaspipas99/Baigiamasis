import bcrypt from "bcrypt";

async function password() {
  const h = await bcrypt.hash("vadyba123", 10);
  console.log(h);
}
password();
