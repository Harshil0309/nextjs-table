import EditUserForm from "@/components/EditUserForm";
import connectDB from "../../../../db";
import User from "../../../../models/user";

const getUserById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "GET",
      cache: "no-store",
    });
    // console.log(res)

    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditUser({ params }) {
  // console.log(params);
  const { id } = params;
  // console.log("this is the id ");
  console.log(id);
  await connectDB();
  const curruser = await User.findById(id);
  console.log(curruser);
  // const user = await getUserById(id);
  // console.log(user);
  // const { name, phone_number, email, hobbies } = curruser;

  return (
    <div>edit</div>
    // <EditUserForm
    //   id={id}
    //   name={name}
    //   phone_number={phone_number}
    //   email={email}
    //   hobbies={hobbies}
    // />
  );
}
