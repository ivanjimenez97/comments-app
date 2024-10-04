import { useEffect, useState } from "react";
import PageTitle from "../../components/base/PageTitle";
import axiosClient from "../../AxiosClient";
import Edit from "../../components/icons/Edit";
import Delete from "../../components/icons/Delete";
import AlertMessage from "../../components/base/AlertMessage";
import Modal from "../../components/base/Modal.jsx";
import { FormatLongDateTime } from "../../components/hooks/FormatDate.jsx";

export default function CommentIndex() {
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);

  const [comment, setComment] = useState({
    id: null,
    email: "",
    description: "",
    createdAt: null,
    updatedAt: null,
  });

  const [selectedRecord, setSelectedRecord] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [errorsOnDelete, setErrorsOnDelete] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get("/comments");
      setRecords(res.data.records);
      console.log("Records:", res);
    } catch (error) {
      console.log("Ocurrio un error al intentar obtener los registros:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = async () => {
    console.log("Current Data", comment);
    if (comment.id) {
      try {
        const res = axiosClient.patch(`/comments/${comment.id}`, comment);
        if (res.status === 201) {
          setComment({
            id: null,
            email: "",
            description: "",
            createdAt: null,
            updatedAt: null,
          });
          getData();
        }
      } catch (error) {
        console.log("Create Comment Error", error);
      }
    } else {
      try {
        const res = axiosClient.post("/comments", comment);
        if (res.status === 201) {
          setComment({
            id: null,
            email: "",
            description: "",
            createdAt: null,
            updatedAt: null,
          });
          getData();
        }
      } catch (error) {
        console.log("Edit Comment Error", error);
      }
    }
  };

  // ***** EDIT MODAL *****

  const setEditComment = (record) => {
    setComment(record);
    console.log("Edit Record Data", record);
  };

  const clearComment = (e) => {
    e.preventDefault();

    setComment({
      id: null,
      email: "",
      description: "",
      createdAt: null,
      updatedAt: null,
    });
  };

  // ***** DELETE MODAL *****

  const handleDeleteRecord = (record) => {
    setSelectedRecord(record);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedRecord(null);
    setErrorsOnDelete(null);
  };

  const onDelete = (e) => {
    e.preventDefault();
    axiosClient
      .delete(`/comments/${selectedRecord.id}`)
      .then(() => {
        //This another option to avoid reloading all the comments history.
        //setRecords(records.filter((record) => record.id !== selectedRecord.id));
        getData();
        setIsDeleteModalOpen(false);
        setSelectedRecord(null);
        setErrorsOnDelete(null);
      })
      .catch((error) => {
        //console.error("Error deleting record:", error);
        setErrorsOnDelete(error.response.data.message);
      });
  };

  return (
    <div className="mt-5 mb-5">
      <div className="bg-white p-3 rounded-lg shadow-lg mb-7">
        <PageTitle
          title={comment.id ? "Edit Comment" : "Leave Comments"}
          classes={`px-2`}
        />
        <form className="mt-5" onSubmit={onSubmit}>
          <div className="flex flex-wrap items-center mb-3">
            {comment.id && (
              <div className="basis-1/2 px-2 mb-4">
                <p htmlFor="email" className="font-medium w-full mb-0">
                  ID: {comment.id}
                </p>
              </div>
            )}
            {comment.createdAt && (
              <div className="basis-1/2 px-2 mb-3">
                <p htmlFor="email" className="font-medium w-full mb-0 text-end">
                  <FormatLongDateTime date={comment.createdAt} />
                </p>
              </div>
            )}
            <div className="basis-full 2xl:basis-1/2 px-2 mb-4">
              <label htmlFor="email" className="font-medium w-full mb-3">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={comment.email}
                onChange={(e) =>
                  setComment({ ...comment, email: e.target.value })
                }
                className="bg-white border rounded-lg p-2 w-full"
                required
              />
            </div>

            <div className="basis-full 2xl:basis-1/2 px-2 mb-4">
              <label htmlFor="description" className="font-medium w-full mb-3">
                Description:
              </label>
              <textarea
                name="description"
                id="description"
                value={comment.description}
                onChange={(e) =>
                  setComment({ ...comment, description: e.target.value })
                }
                className="bg-white border rounded-lg p-2 w-full h-auto"
                required
              ></textarea>
            </div>

            <div className="basis-full text-end px-2 mb-4">
              {comment.email && comment.description && (
                <button
                  className="bg-white border border-zinc-500 hover:border-zinc-300 hover:bg-zinc-300 px-3 py-2 rounded-lg text-zinc-700 hover:text-white me-5"
                  onClick={(e) => clearComment(e)}
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

      <div className="bg-white p-5 rounded-lg shadow-lg">
        <PageTitle title={"Comments History"} classes={`mb-5`} />
        <ul>
          {/* This part of the code is displayed when loading is set to true */}
          {loading && !records.length > 0 && (
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
                <h3 className="text-lg text-indigo-700 font-bold">
                  {record.email}
                </h3>
                <p className="font-normal text-zinc-500">
                  {record.description}
                </p>
                <p className="font-normal mb-3 text-zinc-400">
                  <FormatLongDateTime date={record.createdAt} />
                </p>
                <div className="flex">
                  <button
                    className="px-3 py-2 bg-indigo-500 rounded-lg text-white me-5"
                    onClick={() => setEditComment(record)}
                  >
                    <Edit className="w-[1.25rem] h-[1.25rem]" />
                  </button>
                  <button
                    className="px-3 py-2 bg-red-500 rounded-lg text-white"
                    onClick={() => handleDeleteRecord(record)}
                  >
                    <Delete className="w-[1.25rem] h-[1.25rem]" />
                  </button>
                </div>
              </li>
            ))}

          {!loading && records.length <= 0 && (
            <AlertMessage
              message="Records not found."
              classes={`bg-yellow-300 font-bold text-gray-700 text-sm text-center`}
            />
          )}

          {/* This is the Delete Modal Component */}

          <Modal
            isOpen={isDeleteModalOpen}
            onClose={handleCloseDeleteModal}
            title="Attention!"
            onConfirm={onDelete}
          >
            <p className="text-center">
              Are you sure you want to delete this record?
            </p>
            <br />
            {errorsOnDelete && (
              <AlertMessage
                classes={"bg-red-500 text-white"}
                message={
                  <div className="w-full">
                    <p className="font-medium text-center">
                      An error occurred while trying to delete the record.
                    </p>{" "}
                    <br />
                    <p className="font-normal">{errorsOnDelete}</p>
                  </div>
                }
              />
            )}
            <p className="font-normal text-center">
              <b>Email:</b> <br />
              {selectedRecord && selectedRecord.email}
            </p>
            <p className="font-normal text-center">
              <b>Creation Date:</b> <br />
              {selectedRecord && (
                <FormatLongDateTime date={selectedRecord.createdAt} />
              )}
            </p>
          </Modal>
        </ul>
      </div>
    </div>
  );
}
