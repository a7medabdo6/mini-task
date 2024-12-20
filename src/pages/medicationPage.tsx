import React, { useState, useEffect } from "react";
import MedicationTable from "../components/MedicationsList/Table";
import { useMedications } from "../apis/Medications";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import SidebarLayout from "../components/common/SidebarLayout";
import Pagination from "../components/common/Pagination";

const PostTable: React.FC = () => {
  const { data, isLoading, isError } = useMedications();
  const [medications, setMedications] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (data) {
      setMedications(data);
    }
  }, [data]);

  const filteredMedications = medications.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentMedications = filteredMedications.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const totalPages = Math.ceil(filteredMedications.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleUpdate = (id: number) => {
    const updatedMedications = [...medications];
    const medication = updatedMedications.find((med) => med.id === id);

    if (medication) {
      const updatedTitle = prompt("Update Name", medication.title);
      const updatedBody = prompt("Update Description", medication.body);

      if (updatedTitle && updatedBody) {
        medication.title = updatedTitle;
        medication.body = updatedBody;

        setMedications(updatedMedications);
      }
    }
  };

  const handleDelete = (id: number) => {
    // Filter out the deleted medication and update the state
    const updatedMedications = medications.filter((med) => med.id !== id);
    setMedications(updatedMedications);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <SidebarLayout>
      <div className="container mx-auto mt-4">
        <div className="mb-4 flex items-center ">
          <input
            type="text"
            placeholder="Search Medications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <MedicationTable
          medications={currentMedications}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </SidebarLayout>
  );
};

export default PostTable;
