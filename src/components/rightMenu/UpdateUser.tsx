"use client";

import { updateProfile } from "@/lib/action";
import { User } from "@prisma/client";
import Image from "next/image";
import { useActionState, useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';


const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(false)

  const [state, formAction] = useActionState(updateProfile, { 
    success: false, error: false 
  })

  return (
    <div>
      <span
        className="text-blue-500 cursor-pointer text-xs"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="p-12 bg-[#161B22] rounded-xl relative shadow-md flex flex-col gap-2 w-full md:w-2/3 xl:w-1/2">
            <button
              className="self-end text-gray-500"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <form action={(formData) => 
              formAction({formData,cover:  cover?.secure_url || ""})
            } 
              className="flex flex-col gap-4"
            >
              <h1 className=" text-gray-500">Update Profile</h1>
              <CldUploadWidget
                uploadPreset="social"
                onSuccess={(result) => setCover(result.info)}
              >
                {({ open }) => {
                  return (
                    <div className="flex flex-col gap-4 my-4" onClick={() => open()}>
                      <label htmlFor="">Cover Picture</label>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                          src={user.cover || "/cover.png"}
                          alt=""
                          width={32}
                          height={32}
                          className="w-12 h-8 rounded-md object-cover"
                        />
                        <span className="text-xs underline text-gray-600">Change</span>
                      </div>
                    </div>
                  );
                }}
              </CldUploadWidget>
              {/* WRAPPER */}
              <div className="flex flex-wrap justify-between gap-2  xl:gap-4">
                {/* INPUTS */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">First Name</label>
                  <input
                    type="text"
                    placeholder={user.name || "Rechal"}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="name"
                  />
                </div>
                {/* INPUTS */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">Surname</label>
                  <input
                    type="text"
                    placeholder={user.surname || "Charlotte"}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="surname"
                  />
                </div>
                {/* INPUTS */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">Description</label>
                  <input
                    type="text"
                    placeholder={user.description || "Your self-worth is determined by you. ..."}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="description"
                  />
                </div>
                {/* INPUTS */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">City</label>
                  <input
                    type="text"
                    placeholder={user.city || "Pune"}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="city"
                  />
                </div>
                {/* INPUT */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">School</label>
                  <input
                    type="text"
                    placeholder={user.school || "DAV"}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="school"
                  />
                </div>
                {/* INPUTS */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">Work</label>
                  <input
                    type="text"
                    placeholder={user.work || "Google"}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="work"
                  />
                </div>
                {/* INPUTS */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">Website</label>
                  <input
                    type="text"
                    placeholder={user.website || "rupsa.netlify"}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="website"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white p-2 rounded "
              >
                Update
              </button>
              {state.success && <span className="text-green-500">Profile has been updated!</span>}
              {state.error && <span className="text-red-600">Something went wrong</span>}
            </form>
          </div>
        </div>
      )}
    </div>
  )
};

export default UpdateUser;
