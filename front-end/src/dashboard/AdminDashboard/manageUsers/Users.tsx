// // src/dashboard/AdminDashboard/manageUsers/Users.tsx
// import { useState, useEffect } from "react";
// import { useAppSelector, useAppDispatch } from "../../../app/store";
// import { setLoading, setUsers, setError, updateUser } from "../../../features/users/userListSlice";

// // Define PublicUser interface locally
// interface PublicUser {
//   user_id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   role: "user" | "admin" | null;
//   isVerified?: boolean;
//   created_at?: string;
//   updated_at?: string;
//   image_url?: string;
//   contact_phone?: string;
//   address?: string;
// }

// const Users = () => {
//   const { users, loading, error } = useAppSelector((state) => state.userList);
//   const dispatch = useAppDispatch();
//   const { token, user: authUser } = useAppSelector((state) => state.user) as { token: string | null; user: PublicUser | null };
//   const [selectedUser, setSelectedUser] = useState<PublicUser | null>(null);
//   const [selectedUserForUpdate, setSelectedUserForUpdate] = useState<PublicUser | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       if (!token || !authUser?.role) return;
//       dispatch(setLoading());
//       try {
//         const url = authUser.role === 'admin' ? 'http://localhost:8081/auth/users' : `http://localhost:8081/auth/users?userId=${authUser.user_id}`;
//         const response = await fetch(url, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (!response.ok) throw new Error('Failed to fetch users');
//         const result = await response.json();
//         dispatch(setUsers(result));
//       } catch (err: unknown) {
//         let message = 'Network error occurred';
//         if (err instanceof Error) message = err.message;
//         dispatch(setError(message));
//       }
//     };
//     fetchUsers();
//   }, [dispatch, token, authUser]);

//   return (
//     <div>
//       {/* Change Role Modal */}
//       <ChangeRole user={selectedUser} />

//       {/* Update Profile Modal */}
//       <UpdateProfile user={selectedUserForUpdate} refetch={() => {
//         if (authUser?.role === 'admin') dispatch(setUsers([...users])); // Simple refetch for admin
//       }} />

//       {/* Display Users */}
//       {loading && <p className="loading">Loading users...</p>}
//       {error && <p className="text-red-500">Error fetching users</p>}
//       {users.length > 0 ? (
//         <div className="overflow-x-auto">
//           <table className="table table-xs">
//             <thead>
//               <tr className="bg-gray-600 text-white text-md lg:text-lg">
//                 <th className="px-4 py-2">First Name</th>
//                 <th className="px-4 py-2">Last Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Role</th>
//                 <th className="px-4 py-2">Verified</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user: PublicUser) => (
//                 <tr key={user.user_id} className="hover:bg-gray-300 border-b border-gray-400">
//                   <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.first_name}</td>
//                   <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.last_name}</td>
//                   <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.email}</td>
//                   <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.role}</td>
//                   <td className="px-4 py-2 border-r border-gray-400 lg:text-base">
//                     <span className={`badge ${user.role === "admin" || user.isVerified ? "badge-success" : "badge-warning"}`}>
//                       {user.role === "admin" || user.isVerified ? (
//                         <span className="text-green-700 lg:text-base">Verified</span>
//                       ) : (
//                         <span className="text-yellow-700 lg:text-base">Not Verified</span>
//                       )}
//                     </span>
//                   </td>
//                   <td className="px-4 py-2">
//                     <button
//                       className="btn btn-sm btn-primary text-blue-500 mr-2"
//                       onClick={() => {
//                         setSelectedUser(user);
//                         (document.getElementById('role_modal') as HTMLDialogElement)?.showModal();
//                       }}
//                     >
//                       Change Role
//                     </button>
//                     <button
//                       className="btn btn-sm btn-secondary text-green-500"
//                       onClick={() => {
//                         setSelectedUserForUpdate(user);
//                         (document.getElementById('update_profile_modal') as HTMLDialogElement)?.showModal();
//                       }}
//                     >
//                       Update Profile
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p>No users found.</p>
//       )}
//     </div>
//   );
// };

// export default Users;












// // src/dashboard/AdminDashboard/manageUsers/Users.tsx
// import { useState, useEffect } from "react";
// import { useAppSelector, useAppDispatch } from "../../../app/store";
// import { setLoading, setUsers, setError } from "../../../features/users/userListSlice"; // Removed unused updateUser
// import ChangeRole from "./ChangeRole"; // Added import
// import UpdateProfile from "./UpdateProfile"; // Added import
// import '../ManageUsers/ManageUsers.css'; // Adjust path based on your structure

// // Define PublicUser interface locally
// interface PublicUser {
//   user_id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   role: "user" | "admin" | null;
//   isVerified?: boolean;
//   created_at?: string;
//   updated_at?: string;
//   image_url?: string;
//   contact_phone?: string;
//   address?: string;
// }

// const Users = () => {
//   const { users, loading, error } = useAppSelector((state) => state.userList); // Updated to match store
//   const dispatch = useAppDispatch();
//   const { token, user: authUser } = useAppSelector((state) => state.user) as { token: string | null; user: PublicUser | null };
//   const [selectedUser, setSelectedUser] = useState<PublicUser | null>(null);
//   const [selectedUserForUpdate, setSelectedUserForUpdate] = useState<PublicUser | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       if (!token || !authUser?.role) return;
//       dispatch(setLoading());
//       try {
//         const url = authUser.role === 'admin' ? 'http://localhost:8081/Users' : `http://localhost:8081/Users?userId=${authUser.user_id}`;
//         const response = await fetch(url, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (!response.ok) throw new Error('Failed to fetch users');
//         const result = await response.json();
//         dispatch(setUsers(result));
//       } catch (err: unknown) {
//         let message = 'Network error occurred';
//         if (err instanceof Error) message = err.message;
//         dispatch(setError(message));
//       }
//     };
//     fetchUsers();
//   }, [dispatch, token, authUser]);

//   return (
//     <div>
//       {/* Change Role Modal */}
//       <ChangeRole user={selectedUser} />

//       {/* Update Profile Modal */}
//       <UpdateProfile user={selectedUserForUpdate} refetch={() => {
//         if (authUser?.role === 'admin') dispatch(setUsers([...users])); // Simple refetch for admin
//       }} />

//       {/* Display Users */}
//       {loading && <p className="loading">Loading users...</p>}
//       {error && <p className="text-red-500">Error fetching users</p>}
//       {users.length > 0 ? (
//         <div className="overflow-x-auto">
//           <table className="table table-xs">
//             <thead>
//               <tr className="bg-gray-600 text-white text-md lg:text-lg">
//                 <th className="px-4 py-2">First Name</th>
//                 <th className="px-4 py-2">Last Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Role</th>
//                 <th className="px-4 py-2">Verified</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user: PublicUser) => (
//                 <tr key={user.user_id} className="hover:bg-gray-300 border-b border-gray-400">
//                   <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.first_name}</td>
//                   <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.last_name}</td>
//                   <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.email}</td>
//                   <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.role}</td>
//                   <td className="px-4 py-2 border-r border-gray-400 lg:text-base">
//                     <span className={`badge ${user.role === "admin" || user.isVerified ? "badge-success" : "badge-warning"}`}>
//                       {user.role === "admin" || user.isVerified ? (
//                         <span className="text-green-700 lg:text-base">Verified</span>
//                       ) : (
//                         <span className="text-yellow-700 lg:text-base">Not Verified</span>
//                       )}
//                     </span>
//                   </td>
//                   <td className="px-4 py-2">
//                     <button
//                       className="btn btn-sm btn-primary text-blue-500 mr-2"
//                       onClick={() => {
//                         setSelectedUser(user);
//                         (document.getElementById('role_modal') as HTMLDialogElement)?.showModal();
//                       }}
//                     >
//                       Change Role
//                     </button>
//                     <button
//                       className="btn btn-sm btn-secondary text-green-500"
//                       onClick={() => {
//                         setSelectedUserForUpdate(user);
//                         (document.getElementById('update_profile_modal') as HTMLDialogElement)?.showModal();
//                       }}
//                     >
//                       Update Profile
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p>No users found.</p>
//       )}
//     </div>
//   );
// };

// export default Users;












// src/dashboard/AdminDashboard/manageUsers/Users.tsx
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/store";
import { setLoading, setUsers, setError } from "../../../features/users/userListSlice";
import ChangeRole from "./ChangeRole";
import UpdateProfile from "./UpdateProfile";
import '../ManageUsers/ManageUsers.css'; // Import the CSS

// Define PublicUser interface locally
interface PublicUser {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: "user" | "admin" | null;
  isVerified?: boolean;
  created_at?: string;
  updated_at?: string;
  image_url?: string;
  contact_phone?: string;
  address?: string;
}

const Users = () => {
  const { users, loading, error } = useAppSelector((state) => state.userList);
  const dispatch = useAppDispatch();
  const { token, user: authUser } = useAppSelector((state) => state.user) as { token: string | null; user: PublicUser | null };
  const [selectedUser, setSelectedUser] = useState<PublicUser | null>(null);
  const [selectedUserForUpdate, setSelectedUserForUpdate] = useState<PublicUser | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token || !authUser?.role) {
        console.log("No token or role:", { token, authUser });
        return;
      }
      dispatch(setLoading());
      try {
        console.log("Fetching from:", authUser.role === 'admin' ? 'http://localhost:8081/Users/' : `http://localhost:8081/Users?userId=${authUser.user_id}`);
        const response = await fetch(authUser.role === 'admin' ? 'http://localhost:8081/Users/' : `http://localhost:8081/Users?userId=${authUser.user_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Fetch error:", response.status, errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Fetched users:", result);
        dispatch(setUsers(result));
      } catch (err: unknown) {
        let message = 'Network error occurred';
        if (err instanceof Error) message = err.message;
        console.error("Fetch error details:", err);
        dispatch(setError(message));
      }
    };
    fetchUsers();
  }, [dispatch, token, authUser]);

  return (
    <div>
      <ChangeRole user={selectedUser} />
      <UpdateProfile user={selectedUserForUpdate} refetch={() => {
        if (authUser?.role === 'admin') dispatch(setUsers([...users]));
      }} />
      {loading && <p className="manage-users-loading">Loading users...</p>}
      {error && <p className="manage-users-error">Error fetching users: {error}</p>}
      {users.length > 0 ? (
        <div className="manage-users-table-container">
          <table className="manage-users-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Verified</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: PublicUser) => (
                <tr key={user.user_id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`manage-users-badge ${user.role === "admin" || user.isVerified ? "manage-users-badge-success" : "manage-users-badge-warning"}`}>
                      {user.role === "admin" || user.isVerified ? "Verified" : "Not Verified"}
                    </span>
                  </td>
                  <td>
                    <button
                      className="manage-users-modal-box btn btn-primary"
                      onClick={() => {
                        setSelectedUser(user);
                        (document.getElementById('role_modal') as HTMLDialogElement)?.showModal();
                      }}
                    >
                      Change Role
                    </button>
                    <button
                      className="manage-users-modal-box btn btn-secondary"
                      onClick={() => {
                        setSelectedUserForUpdate(user);
                        (document.getElementById('update_profile_modal') as HTMLDialogElement)?.showModal();
                      }}
                    >
                      Update Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="manage-users-error">No users found.</p>
      )}
    </div>
  );
};

export default Users;