"use client";

import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`${process.env.DOMAIN}/api/users?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
    
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      Delete
    </button>
  );
}