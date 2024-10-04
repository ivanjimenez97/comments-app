//CommentIndexTs.tsx
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import PageTitle from "../../ts-components/base/PageTitle";
import axiosClient from "../../AxiosClient.ts";
import Edit from "../../ts-components/icons/Edit";
import Delete from "../../ts-components/icons/Delete";
import AlertMessage from "../../ts-components/base/AlertMessage";
import Modal from "../../ts-components/base/Modal";
import { FormatLongDateTime } from "../../ts-components/hooks/FormatDate";

// Type definitions for the comment
interface Comment {
  id: number | null;
  email: string;
  description: string;
  createdAt: string | null;
  updatedAt: string | null;
}

// Type for individual records
interface Record extends Comment {}

export default function CommentIndexTs() {
  const [loading, setLoading] = useState<boolean>(false);
  const [records, setRecords] = useState<Record[]>([]);

  const [comment, setComment] = useState<Comment>({
    id: null,
    email: "",
    description: "",
    createdAt: null,
    updatedAt: null,
  });

  const [selectedRecord, setSelectedRecord] = useState<Record | null>(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [errorsOnDelete, setErrorsOnDelete] = useState<string | null>(null);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get("/comments");
      setRecords(res.data.records);
      console.log("Records:", res);
    } catch (error) {
      console.log("Error fetching records:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Current Data", comment);
    try {
      if (comment.id) {
        const res = await axiosClient.patch(`/comments/${comment.id}`, comment);
        if (res.status === 201) {
          resetComment();
          getData();
        }
      } else {
        const res = await axiosClient.post("/comments", comment);
        if (res.status === 201) {
          resetComment();
          getData();
        }
      }
    } catch (error) {
      console.log("Error handling submit", error);
    }
  };

  const resetComment = () => {
    setComment({
      id: null,
      email: "",
      description: "",
      createdAt: null,
      updatedAt: null,
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const setEditComment = (record: Record) => {
    setComment(record);
    console.log("Edit Record Data", record);
  };

  const clearComment = (e: FormEvent) => {
    e.preventDefault();
    resetComment();
  };

  const handleDeleteRecord = (record: Record) => {
    setSelectedRecord(record);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedRecord(null);
    setErrorsOnDelete(null);
  };

  const onDelete = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axiosClient.delete(`/comments/${selectedRecord?.id}`);
      getData();
      handleCloseDeleteModal();
    } catch (error: any) {
      setErrorsOnDelete(error.response.data.message);
    }
  };

  return (
    <div className="mt-5 mb-5 block 2xl:flex 2xl:justify-center">
      <div className="bg-white relative h-fit overflow-y-auto p-3 rounded-lg shadow-lg mb-7 max-w-4xl 2xl:mx-2">
        <PageTitle
          title={comment.id ? "Edit Comment" : "Leave Comments"}
          classes={`px-2`}
        />
        <form className="mt-5" onSubmit={onSubmit}>
          <div className="flex flex-wrap items-center mb-3">
            {comment.id && (
              <div className="basis-1/2 px-2 mb-4">
                <p className="font-medium w-full mb-0">ID: {comment.id}</p>
              </div>
            )}
            {comment.createdAt && (
              <div className="basis-1/2 px-2 mb-3">
                <p className="font-medium w-full mb-0 text-end">
                  <FormatLongDateTime date={comment.createdAt} />
                </p>
              </div>
            )}
            <div className="basis-full px-2 mb-4">
              <label htmlFor="email" className="font-medium w-full mb-3">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={comment.email}
                onChange={handleInputChange}
                className="bg-white border rounded-lg p-2 w-full"
                required
              />
            </div>

            <div className="basis-full px-2 mb-4">
              <label htmlFor="description" className="font-medium w-full mb-3">
                Description:
              </label>
              <textarea
                name="description"
                id="description"
                value={comment.description}
                onChange={handleInputChange}
                className="bg-white border rounded-lg p-2 w-full h-auto"
                required
              ></textarea>
            </div>

            <div className="basis-full text-end px-2 mb-4">
              {comment.email && comment.description && (
                <button
                  className="bg-white border border-zinc-500 hover:border-zinc-300 hover:bg-zinc-300 px-3 py-2 rounded-lg text-zinc-700 hover:text-white me-5"
                  onClick={clearComment}
                >
                  Clear
                </button>
              )}
              <button
                type="submit"
                className="bg-green-500 px-3 py-2 rounded-lg text-white"
              >
                {comment.id ? "Update" : "Comment"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-lg max-w-4xl 2xl:mx-2">
        <PageTitle title={"Comments History"} classes={`mb-5`} />
        <ul>
          {loading && !records.length && (
            <AlertMessage
              classes={
                "bg-blue-200 font-bold text-gray-700 text-sm text-center"
              }
              message={"Loading..."}
            />
          )}
          {!loading &&
            records.length > 0 &&
            records.map((record, index) => (
              <li
                key={index}
                className="bg-white border border-gray-200 rounded-lg hover:shadow-lg px-5 py-3 mb-5"
              >
                <h3 className="text-lg font-bold text-blue-700">
                  {record.id}. {record.email}
                </h3>
                <p>{record.description}</p>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setEditComment(record)}
                    className="bg-yellow-500 p-2 rounded-lg text-white"
                  >
                    <Edit width="25" height="25" />
                  </button>
                  <button
                    onClick={() => handleDeleteRecord(record)}
                    className="bg-red-500 p-2 rounded-lg text-white"
                  >
                    <Delete width="25" height="25" />
                  </button>
                </div>
              </li>
            ))}

          {!loading && records.length === 0 && (
            <AlertMessage
              classes={
                "bg-gray-200 font-bold text-gray-700 text-sm text-center"
              }
              message={"No records found"}
            />
          )}
        </ul>
      </div>

      {isDeleteModalOpen && selectedRecord && (
        <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
          <PageTitle title={"Delete Comment"} classes={`mb-5`} />
          <form className="mt-5" onSubmit={onDelete}>
            <div className="px-2 mb-4 text-center">
              <p>
                Are you sure you want to delete the record:{" "}
                <strong>{selectedRecord?.email}</strong>?
              </p>
              {errorsOnDelete && (
                <AlertMessage
                  classes={
                    "bg-red-300 font-bold text-red-700 text-sm text-center mt-2"
                  }
                  message={errorsOnDelete}
                />
              )}
            </div>

            <div className="text-center">
              <button
                className="bg-gray-500 px-3 py-2 rounded-lg text-white me-5"
                onClick={handleCloseDeleteModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 px-3 py-2 rounded-lg text-white"
              >
                Delete
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
