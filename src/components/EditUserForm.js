"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditUserForm({ id, name,phone_number,email,hobbies}) {
  const [newName, setNewName] = useState(name);
// const [newDescription, setNewDescription] = useState(description);
  const [newPhone,setNewPhone] =useState(phone_number);
  const [newEmail,setNewemail]=useState(email);
  const [newHobbies,setNewHobbies]=useState(hobbies);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newPhone,newEmail,newHobbies }),
      });

      if (!res.ok) {
        throw new Error("Failed to update user");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="User name"
      />

<input
        onChange={(e) => setNewPhone(e.target.value)}
        value={newPhone}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="User Phone"
      />

<input
        onChange={(e) => setNewemail(e.target.value)}
        value={newEmail}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="User Email"
      />

<input
        onChange={(e) => setNewHobbies(e.target.value)}
        value={newHobbies}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="User Hobbies"
      />

      

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update User
      </button>
    </form>
  );
}