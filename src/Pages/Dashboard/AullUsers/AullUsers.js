import { useQuery } from "@tanstack/react-query";

import React from "react";

const AullUsers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>email</th>
            <th>Amin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id} className="hover">
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-xs btn-warning">Make Admin</button>
              </td>
              <td>
                <button className="btn btn-xs btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AullUsers;
