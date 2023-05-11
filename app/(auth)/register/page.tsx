import { redirect } from "next/navigation";

export default async function Register () {
  return redirect('/login')
}