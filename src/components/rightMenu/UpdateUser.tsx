"use client";

import { updateProfile } from "@/lib/action";
import { User } from "@prisma/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CldUploadWidget } from 'next-cloudinary';

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    try {
      await updateProfile(formData, cover?.secure_url);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update profile. Please try again.' });
    }
  };

  if (!clientRendered) {
    return null;
  }

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h1 className="text-gray-500">Update Profile</h1>
              {message && (
                <div className={`p-2 rounded ${message.type === 'success' ? 'text-green-500' : 'text-red-500'} text-center`}>
                  {message.text}
                </div>
              )}
              <CldUploadWidget 
                uploadPreset="social" 
                onSuccess={(result) => setCover(result.info)}
              >
                {({ open }) => (
                  <div className="flex flex-col gap-4 my-4" onClick={() => open()}>
                    <label htmlFor="">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={cover?.secure_url || user.cover || "/cover.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-600">Change</span>
                    </div>
                  </div>
                )}
              </CldUploadWidget>
              <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">First Name</label>
                  <input
                    type="text"
                    placeholder={user.name || "Rechal"}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="name"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">Surname</label>
                  <input
                    type="text"
                    placeholder={user.surname || "Charlotte"}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="surname"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">Description</label>
                  <input
                    type="text"
                    placeholder={user.description || "Your self-worth is determined by you. ..."}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="description"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">City</label>
                  <input
                    type="text"
                    placeholder={user.city || "Pune"}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="city"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">School</label>
                  <input
                    type="text"
                    placeholder={user.school || "DAV"}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="school"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-xs text-gray-500">Work</label>
                  <input
                    type="text"
                    placeholder={user.work || "Google"}
                    className="border border-gray-400 p-2 rounded bg-[#161B22]"
                    name="work"
                  />
                </div>
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
                className="mt-4 bg-blue-500 text-white p-2 rounded"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
