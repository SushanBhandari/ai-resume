import { UserButton } from "@clerk/nextjs";
import { getCurrentUserFromMongoDB } from "@/server-actions/user";

export default async function Home() {
  const response = await getCurrentUserFromMongoDB();
  if (!response.success) {
    return <div>{response.message}</div>;
  }
  const user = response.data;
  const { name, email, clerkUserId, _id } = user;
  return (
    <div className=" flex flex-col gap-5 items-start">
      <h1>Homepage</h1>
      <UserButton />

      <h1>Name : {name} </h1>
      <h1>Email : {email}</h1>
      <h1>Clerk User Id: {clerkUserId}</h1>
      <h1>MongoDB User Id : {_id} </h1>
    </div>
  );
}
