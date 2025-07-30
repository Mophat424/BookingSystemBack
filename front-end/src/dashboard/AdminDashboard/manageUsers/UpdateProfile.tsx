// import { useForm, type SubmitHandler, type Resolver } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useAppDispatch, useAppSelector } from "../../../app/store";
// import { updateUser } from "../../../features/users/userListSlice";
// import { toast } from "sonner";
// import { useEffect } from "react";
// import '../ManageUsers/ManageUsers.css';

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

// type UpdateProfileInputs = {
//   first_name: string;
//   last_name: string;
//   image_url: string;
//   contact_phone?: string;
//   address?: string;
// };

// type YupSchemaType = {
//   first_name: string;
//   last_name: string;
//   image_url: string;
//   contact_phone?: string | undefined;
//   address?: string | undefined;
// };

// const schema = yup.object<YupSchemaType>({
//   first_name: yup.string().max(100, "Max 100 characters").required("First name is required"),
//   last_name: yup.string().max(100, "Max 100 characters").required("Last name is required"),
//   image_url: yup.string().url("Invalid URL").required("Image URL is required"),
//   contact_phone: yup.string().max(20, "Max 20 characters").notRequired(),
//   address: yup.string().max(255, "Max 255 characters").notRequired(),
// }).required();

// type UpdateProfileProps = {
//   user: PublicUser | null;
//   isOpen: boolean;
//   onClose: () => void;
//   refetch?: () => void;
// };

// const UpdateProfile = ({ user, isOpen, onClose, refetch }: UpdateProfileProps) => {
//   const dispatch = useAppDispatch();
//   const token = useAppSelector((state) => state.user.token);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm<UpdateProfileInputs>({
//     resolver: (yupResolver(schema) as unknown) as Resolver<UpdateProfileInputs, object>,
//     defaultValues: {
//       first_name: user?.first_name || "",
//       last_name: user?.last_name || "",
//       image_url: user?.image_url || "",
//       contact_phone: user?.contact_phone || "",
//       address: user?.address || "",
//     },
//   });

//   useEffect(() => {
//     if (user && isOpen) {
//       setValue("first_name", user.first_name || "");
//       setValue("last_name", user.last_name || "");
//       setValue("image_url", user.image_url || "");
//       setValue("contact_phone", user.contact_phone || "");
//       setValue("address", user.address || "");
//     } else if (!isOpen) {
//       reset();
//     }
//   }, [user, isOpen, setValue, reset]);

//   const onSubmit: SubmitHandler<UpdateProfileInputs> = async (data) => {
//     if (!user) {
//       toast.error("No user selected for update.");
//       return;
//     }
//     if (!token) {
//       toast.error("Authentication token missing.");
//       return;
//     }
//     try {
//       const response = await fetch(`http://localhost:8081/auth/users/${user.user_id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(data),
//       });
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`Failed to update profile: ${errorText || response.statusText}`);
//       }
//       const updatedUser = { ...user, ...data };
//       dispatch(updateUser(updatedUser));
//       toast.success("Profile updated successfully!");
//       if (refetch) refetch();
//       onClose();
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       toast.error(`Failed to update profile: ${error instanceof Error ? error.message : "Unknown error"}`);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <dialog id="update_profile_modal" className="modal modal-middle" open>
//       <div className="modal-box bg-gray-600 text-white w-full max-w-300 mx-auto rounded">
//         <h3 className="font-bold text-lg mb-10">Update Profile</h3>
//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
//           <div>
//             <input
//               type="text"
//               {...register("first_name")}
//               placeholder="First Name"
//               className="input-text w-full p-5 border-2 border-gray-300 rounded focus:border-blue-500 text-lg"
//             />
//             {errors.first_name && <span className="error-text text-red-700">{errors.first_name.message}</span>}
//           </div>
//           <div>
//             <input
//               type="text"
//               {...register("last_name")}
//               placeholder="Last Name"
//               className="input-text w-full p-5 border-2 border-gray-300 rounded focus:border-blue-500 text-lg"
//             />
//             {errors.last_name && <span className="error-text text-red-700">{errors.last_name.message}</span>}
//           </div>
//           <div>
//             <input
//               type="text"
//               {...register("image_url")}
//               placeholder="Image URL"
//               className="input-text w-full p-5 border-2 border-gray-300 rounded focus:border-blue-500 text-lg"
//             />
//             {errors.image_url && <span className="error-text text-red-700">{errors.image_url.message}</span>}
//           </div>
//           <div>
//             <input
//               type="text"
//               {...register("contact_phone")}
//               placeholder="Contact Phone"
//               className="input-text w-full p-5 border-2 border-gray-300 rounded focus:border-blue-500 text-lg"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               {...register("address")}
//               placeholder="Address"
//               className="input-text w-full p-5 border-2 border-gray-300 rounded focus:border-blue-500 text-lg"
//             />
//           </div>
//           <div className="modal-action flex flex-col sm:flex-row gap-5">
//             <button type="submit" className="btn btn-primary w-full sm:w-auto p-5">
//               Update
//             </button>
//             <button
//               className="btn w-full sm:w-auto p-5"
//               type="button"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </dialog>
//   );
// };

// export default UpdateProfile;







import { useForm, type SubmitHandler, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { updateUser } from "../../../features/users/userListSlice";
import { toast } from "sonner";
import { useEffect } from "react";
import '../ManageUsers/ManageUsers.css';

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

type UpdateProfileInputs = {
  first_name: string;
  last_name: string;
  image_url: string;
  contact_phone?: string;
  address?: string;
};

type YupSchemaType = {
  first_name: string;
  last_name: string;
  image_url: string;
  contact_phone?: string | undefined;
  address?: string | undefined;
};

const schema = yup.object<YupSchemaType>({
  first_name: yup.string().max(100, "Max 100 characters").required("First name is required"),
  last_name: yup.string().max(100, "Max 100 characters").required("Last name is required"),
  image_url: yup.string().url("Invalid URL").required("Image URL is required"),
  contact_phone: yup.string().max(20, "Max 20 characters").notRequired(),
  address: yup.string().max(255, "Max 255 characters").notRequired(),
}).required();

type UpdateProfileProps = {
  user: PublicUser | null;
  isOpen: boolean;
  onClose: () => void;
  refetch?: () => void;
};

const UpdateProfile = ({ user, isOpen, onClose, refetch }: UpdateProfileProps) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UpdateProfileInputs>({
    resolver: (yupResolver(schema) as unknown) as Resolver<UpdateProfileInputs, object>,
    defaultValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      image_url: user?.image_url || "",
      contact_phone: user?.contact_phone || "",
      address: user?.address || "",
    },
  });

  useEffect(() => {
    if (user && isOpen) {
      setValue("first_name", user.first_name || "");
      setValue("last_name", user.last_name || "");
      setValue("image_url", user.image_url || "");
      setValue("contact_phone", user.contact_phone || "");
      setValue("address", user.address || "");
    } else if (!isOpen) {
      reset();
    }
  }, [user, isOpen, setValue, reset]);

  const onSubmit: SubmitHandler<UpdateProfileInputs> = async (data) => {
    if (!user) {
      toast.error("No user selected for update.");
      return;
    }
    if (!token) {
      toast.error("Authentication token missing.");
      return;
    }
    try {
      const response = await fetch(`http://localhost:8081/auth/users/${user.user_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update profile: ${errorText || response.statusText}`);
      }
      const updatedUser = { ...user, ...data };
      dispatch(updateUser(updatedUser));
      toast.success("Profile updated successfully!");
      if (refetch) refetch();
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(`Failed to update profile: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  if (!isOpen) return null;

  return (
    <dialog id="update_profile_modal" className="manage-users-modal" open>
      <div className="manage-users-modal-box">
        <h3>Update Profile</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="manage-users-modal-box form">
          <label>First Name:</label>
          <input
            type="text"
            {...register("first_name")}
            placeholder="First Name"
            className="manage-users-modal-box input"
          />
          {errors.first_name && <span className="error-text">{errors.first_name.message}</span>}
          <label>Last Name:</label>
          <input
            type="text"
            {...register("last_name")}
            placeholder="Last Name"
            className="manage-users-modal-box input"
          />
          {errors.last_name && <span className="error-text">{errors.last_name.message}</span>}
          <label>Image URL:</label>
          <input
            type="text"
            {...register("image_url")}
            placeholder="Image URL"
            className="manage-users-modal-box input"
          />
          {errors.image_url && <span className="error-text">{errors.image_url.message}</span>}
          <label>Contact Phone:</label>
          <input
            type="text"
            {...register("contact_phone")}
            placeholder="Contact Phone"
            className="manage-users-modal-box input"
          />
          <label>Address:</label>
          <input
            type="text"
            {...register("address")}
            placeholder="Address"
            className="manage-users-modal-box input"
          />
          <div className="modal-action">
            <button type="submit" className="btn btn-secondary">
              Update
            </button>
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateProfile;