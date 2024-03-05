// "use client"
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import AddBtn from "./AddBtn";
import EditUserForm from "./EditUserForm";

const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });
    // console.log(res);
    if (!res.ok) {
      throw new Error("failed to catch users");
    }
    // console.log(res)
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Userlist() {
  //   const [rows, setRows] = useState([]);

  const users = await getUsers();
  //   console.log(users);
  //   setRows(users);
  // const [selectedRows, setSelectedRows] = useState([]);
  //   const handleSelectRow = (id) => {
  //     const selectedIndex = selectedRows.indexOf(id);
  //     let newSelected = [];

  //     if (selectedIndex === -1) {
  //       newSelected = newSelected.concat(selectedRows, id);
  //     } else if (selectedIndex === 0) {
  //       newSelected = newSelected.concat(selectedRows.slice(1));
  //     } else if (selectedIndex === selectedRows.length - 1) {
  //       newSelected = newSelected.concat(selectedRows.slice(0, -1));
  //     } else if (selectedIndex > 0) {
  //       newSelected = newSelected.concat(
  //         selectedRows.slice(0, selectedIndex),
  //         selectedRows.slice(selectedIndex + 1)
  //       );
  //     }

  //     setSelectedRows(newSelected);
  //   };

  //   const isSelected = (id) => selectedRows.indexOf(id) !== -1;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {/* <input type="checkbox" className="form-checkbox rounded-md" /> */}
              Select
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Phone Number
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Hobbies
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Update/Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.users.map((row) => (
            <tr
              key={row._id}
              //   className={isSelected(row.id) ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-md"
                  //   checked={isSelected(row.id)}
                  //   onChange={() => handleSelectRow(row.id)}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{row._id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {row.phone_number}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.hobbies}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex gap-2">
                  <RemoveBtn id={row._id} />
                  <Link id={row._id} href={`/editUser/${row._id}`}>
                    Edit
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <button className="background-color blue">Email the List</button>
      </table>
      <AddBtn />
    </main>
  );
}
