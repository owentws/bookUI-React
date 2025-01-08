import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FormAddBook = () => {

  const { id } = useParams();  // ดึง bookId จาก URL
  const navigate = useNavigate();  // ใช้สำหรับนำทางหลังจากบันทึกข้อมูล


  // State สำหรับเก็บข้อมูลในฟอร์ม
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    pageCount: "",
    price: "",
    publishDate: "",
    imgUrl: "", // สำหรับ URL รูป
  });

  useEffect(() => {
    getData();
    if (id) {
      // ถ้ามี id ให้ทำการดึงข้อมูลหนังสือจาก API
      client
        .get(`/${id}`)
        .then((response) => {
          setFormData(response.data);  // เก็บข้อมูลหนังสือที่ดึงมา
          setLoading(false);
        })
        .catch((error) => {
          setError("Error fetching book data");
          setLoading(false);
        });
    } else {
      setLoading(false);  // หากไม่มี id ก็ไม่ต้องทำอะไร
    }
  }, [id]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateBook();  // ถ้ามี id แสดงว่าเป็นการอัปเดต
    } else {
      console.log(formData); // ตรวจสอบข้อมูลใน formData
      createBook();  // ถ้าไม่มี id แสดงว่าเป็นการสร้างใหม่
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // console.log(`Changed: ${name} = ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const client = axios.create({
    baseURL: "http://localhost:8080/api/book",
  });

  function getData() {
    client
      .get("/getBooksData") // Replace with your API endpoint
      .then((response) => {
        if (response.data && response.data.length > 0) {
          // setDataBook(response.data); // Store data if response is valid and has items
        } else {
          setError("No data available"); // Set error if response data is empty
        }
        setLoading(false); // Stop loading once data is fetched or error is set
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data"); // Set error if API call fails
        setLoading(false); // Stop loading on error
      });
  }

  function createBook() {
    client.post("/save", formData).then((response) => {
      getData();
      navigate("/test") 
    });
  }

  const updateBook = () => {
    client.put("/edit", formData).then((response) => {
      navigate("/test");  // ไปที่หน้าหลักหลังจากแก้ไขเสร็จ
    });
  };

  if (loading) return <p>Loading...</p>; // Display loading state
  //เช็คเออเร่อ
  if (error) return <p>{error}</p>; // Display error message if there’s an issue

  return (
    <div className="lg-container mb-5 mx-auto ">
      <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto">
        <div className="rounded-lg shadow-lg bg-white mt-5 py-8 px-12 ">
          <h1 className="text-2xl font-semibold mb-16 ">Create Book</h1>

          {/* ฟอร์มที่จะเก็บข้อมูล */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <input
                className="border bg-slate-50 w-full px-4 py-2 mb-4"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange} // ใช้ handleChange
                placeholder="Enter the book title"
                required
              />
              <label>Author</label>
              <input
                className="border bg-slate-50 w-full px-4 py-2 mb-4"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange} // ใช้ handleChange
                placeholder="Enter the author's name"
                required
              />
              <label>Categories</label>
              <select
                className="w-full bg-slate-50 border px-4 py-2 mb-4"
                name="category"
                value={formData.category}
                onChange={handleChange} // ใช้ handleChange
                required
              >
                <option value="">Select a category</option>
                <option value="fiction">Fiction</option>
                <option value="novel">Educational</option>
                <option value="education">Non-Fiction</option>
                <option value="documentary">Self-Help</option>
              </select>
              <label>Description</label>
              <textarea
                className="w-full h-48 border bg-slate-50 px-4 py-2 mb-4 resize-none"
                name="description"
                value={formData.description}
                onChange={handleChange} // ใช้ handleChange
                placeholder="Enter a brief description of the book"
              ></textarea>
              <div className="flex  w-3/4 gap-4 mb-4">
                <div className="flex-1 flex-col">
                  <label>Page Count</label>
                  <input
                    className="border w-full px-4 py-2 mt-2 bg-slate-50"
                    type="number"
                    name="pageCount"
                    value={formData.pageCount}
                    onChange={handleChange} // ใช้ handleChange
                    placeholder="Enter the number of pages"
                    min="1"
                    required
                  />
                </div>
                <div className="flex-1 flex-col">
                  <label>Price</label>
                  <input
                    className="border bg-slate-50 w-full px-4 py-2 mt-2"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange} // ใช้ handleChange
                    placeholder="Enter the price"
                    required
                  />
                </div>
                <div className="flex-1 flex-col">
                  <label>Publish Date</label>
                  <input
                    className="border bg-slate-50 w-full px-4 py-2 mt-2"
                    type="date"
                    name="publishDate"
                    value={formData.publishDate}
                    onChange={handleChange} // ใช้ handleChange
                  />
                </div>
              </div>
              <label>Image URL</label>
              <input
                className="border bg-slate-50 w-3/4 px-4 py-2 mb-12"
                type="url"
                name="imgUrl"
                value={formData.imgUrl}
                onChange={handleChange} // ใช้ handleChange
                placeholder="Enter the URL of the book image"
              />
            </div>

            <button
              className="text-white bg-btn1 px-8 py-2 rounded-lg hover:bg-black"
              type="submit"
            >
              {id ? "Update" : "Create"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddBook;
