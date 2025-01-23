import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProject } from "./store/projectsSlice";
import CreateModal from "./CreateModal";
import EditModal from "./EditModal";

export default function App() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const handleDelete = (id) => {
    dispatch(removeProject({ id }));
  };

  function openCreateModal() {
    setIsCreateModalOpen(true);
  }

  return (
    <div className="w-full h-[100vh] bg-teal-100">
      <div className="container mx-auto p-6 ">
        <h1 className="text-center text-4xl font-bold mb-6 text-blue-900 ">Projects</h1>

        <button onClick={openCreateModal} className="py-2 px-4 bg-blue-500 text-white rounded-md mb-6 hover:bg-blue-600">
          Add New Project +
        </button>

        <div className="mt-8">
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
            {!projects.length && <h2>No project found...</h2>}
            {projects.map((project) => (
              <li key={project.id} className="p-4 bg-white shadow-lg rounded-md flex flex-col justify-between">
                <div>
                  <h2 className="font-semibold text-xl"> {project.title}</h2>
                  <p> {project.description}</p>
                  <p>
                    <strong>Starting Date:</strong> {project.startingDate}
                  </p>
                  <p>
                    <strong>Finishing Date:</strong> {project.finishingDate}
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-end">
                  <div className="flex gap-1">
                    <button
                      onClick={() => {
                        setEditingProject(project);
                        setIsEditModalOpen(true);
                      }}
                      className="py-1 px-3 bg-blue-900 text-white rounded-md hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(project.id)} className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                  <span className="justify-self-end text-gray-600">{project.createdAt}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Modals */}
        {isCreateModalOpen && <CreateModal handleClose={() => setIsCreateModalOpen(false)} />}

        {isEditModalOpen && <EditModal handleClose={() => setIsEditModalOpen(false)} project={editingProject} />}
      </div>
    </div>
  );
}
