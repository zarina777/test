import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateProject } from "./store/projectsSlice";

const UpdateProjectModal = ({ handleClose, project }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    reset(project);
  }, [project, reset]);

  const onSubmit = (data) => {
    dispatch(updateProject(data));
    handleClose();
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  return (
    <div onClick={handleOverlayClick} className="fixed inset-0 flex items-center justify-center bg-[#1a1a1a73] bg-opacity-75 z-50">
      <div className="bg-[#ccffb2]  p-6 shadow-lg rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Update Project</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: "Title is required" })}
              className="outline-none mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && <p className="text-red-500 text-xs mt-2">{errors.title.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: "Description is required" })}
              className="outline-none mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.description && <p className="text-red-500 text-xs mt-2">{errors.description.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="startingDate" className="block text-sm font-medium text-gray-700">
              Starting Date
            </label>
            <input
              type="date"
              id="startingDate"
              {...register("startingDate", { required: "Starting Date is required" })}
              className="outline-none mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {errors.startingDate && <p className="text-red-500 text-xs mt-2">{errors.startingDate.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="finishingDate" className="block text-sm font-medium text-gray-700">
              Finishing Date
            </label>
            <input
              type="date"
              id="finishingDate"
              {...register("finishingDate", { required: "Finishing Date is required" })}
              className="outline-none mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {errors.finishingDate && <p className="text-red-500 text-xs mt-2">{errors.finishingDate.message}</p>}
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Update Project
          </button>
        </form>

        <button onClick={handleClose} className="mt-4 py-1 px-3 bg-[#33333357] text-white rounded-md hover:bg-[#17171757] focus:outline-none">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateProjectModal;
