import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from 'axios';
import ProductTable from "../../components/ProductTable/ProductTable";
import { useNavigate } from "react-router-dom";
const URL = import.meta.env.VITE_SERVER_URL;
const token = localStorage.getItem('token');






export default function AdminProduct() {


  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  
  
  const[productId,setProductId]=useState();
  const navigate=useNavigate();
//primer cambio 
const [imageFile, setImageFile] = useState(null);

  async function getCategories() {
    try {
      const response = await axios.get(`${URL}/categories`);
      console.log(response)
      const categoriesDB = response.data;
      console.log(categoriesDB)

      setCategories(categoriesDB);
    } catch (error) {

    }
  }


  async function getProducts() {
    try {
      const response = await axios.get(`${URL}/products`);
      const products = response.data.products;

      setDbProducts(products);


    } catch (error) {
      console.log(error);

    }
  }




  useEffect(() => {
    getProducts();
    getCategories();

  }, [])

  async function deleteProduct(id) {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async function (result) {
      if (result.isConfirmed) {

        try {

          if (!token) return
          console.log(`Delete Product ${id}`);


          await axios.delete(`${URL}/products/${id}`, { headers: { 'authorization': token } });

          Swal.fire({
            title: 'Product deleted',
            text: `Product  was deleted`,
            icon: "success",
            timer: 1500
          });

          getProducts();
        }


        catch (error) {
          console.log(error);
          Swal.fire('Error deleting', 'User not deleted', 'error');

          if (error.response.status === 403) {
            return logout();
          }
        }

      }
    });





  }



  const { register, handleSubmit, setValue } = useForm();



  async function submitedData(data) {

    console.log(data);



    const formData=new FormData();



    for(const key of Object.keys(data)){
      if(key ==='image'){
        formData.append(key,data.image[0])
        continue;
      }
      formData.append(key, data[key])
    }
   
    


    
    try {
      

      if(productId){
        if(!token)return;

        const response=await axios.put(`${URL}/products/${productId}`,formData,{ headers: { 'authorization': token } });
        
        Swal.fire({
          icon: "success",
          title: "Product edited"
        });
        
        getProducts();
        setProductId(null);

        
        
        return;

        
      }

      
      const product = await axios.post(`${URL}/products`, formData);
      console.log(product);
      Swal.fire({
        icon: "success",
        title: "Product added"
      });
      setFormValue();
      getProducts();
      
      
      
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Error adding Product"
      });
      if (error.response.status === 403) {
        return logout();
      }
      
    }

  }
function logout(){
  if (error.response.status === 403) {
    localStorage.removeItem("currentUser");
    localStorage.removeItem('token');
    navigate("/");
    
  }
}
function handleImageChange(event) {
  const selectedImage = event.target.files[0];
  setImageFile(selectedImage);
  setValue("image", selectedImage);
}
  function setFormValue(prod) {
 
    setProductId(prod?._id || "");

    setValue("name", prod?.name || "");
    setValue("price", prod?.price || "");
    setValue("date", prod?.date || "");

    setValue("characteristics", prod?.characteristics || "");
  



  }



  return (
    <>
      <div className="admin-dashboard">
        <div className="form-container-form">
          
          <div className="top-form">
            <h2 className="admin-form-title">Product
              {
                productId && (
                  <button className="btn btn-delete" onClick={()=>setFormValue()}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )
              }
            </h2>
          </div>


          <form className="admin-form" onSubmit={handleSubmit(submitedData) }encType="multipart/form-data"
           >
            <label className="form-label" htmlFor="product">Product</label>
            <input type="text" id="product" className="admin-input" {...register("name")} />

            <label className="form-label" htmlFor="price">Price</label>
            <input id="price" type="number" className="admin-input" {...register("price")} />
            
            <label className="form-label" htmlFor="characteristics">Characteristics</label>
         <textarea id="characteristics" className="admin-input" {...register("characteristics")} ></textarea>

            <label className="form-label" htmlFor="date">Date</label>
            <input id="date" className="admin-input" {...register("date")} />

            <label className="form-label" htmlFor="image">Image</label>
            <input type="file" accept="image/*" className="admin-input" {...register("image")} />
            

            Active<input type="checkbox" className="admin-input" {...register("active")} />



            <div className="input-group">
              <label className="form-label" htmlFor="category">Select Category</label>
              <select name="" id="category" {...register("category")}>
                {
                  categories.map((category) => (
                    <option key={category.name} value={category._id}>{category.name}</option>
                  ))
                }
              </select>
            </div>


            <div className="input-group">

              <button type="submit" className={productId ? "btn-success" : ""}>

                {
                  productId ? "Edit Product" : "Add Product"
                }

              </button>
            </div>


          </form>


        </div>

        <div className="table-container">
          <>
           
            <ProductTable products={dbProducts}
              deleteProduct={deleteProduct}
              setFormValue={setFormValue} />

          </>
        </div>
      </div>
    </>
  )


}


