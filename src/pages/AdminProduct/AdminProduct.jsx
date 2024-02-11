import { useForm } from "react-hook-form";








export default function AdminProduct() {
  const { register, handleSubmit } = useForm();




  
  
  

  function submitedData(data) {
    
  }
  return (
    <>
      <div className="admin-dashboard">
        <div className="form-container">
          <h2>Carga de producto</h2>


          <form className="admin-form" onSubmit={handleSubmit(submitedData)}>
            <label htmlFor="product">Product</label>
            <input type="text" id="product" className="admin-input" {...register("name")} />

            <label htmlFor="price">Price</label>
            <input id="price" type="number" className="admin-input" {...register("price")} />
            <label htmlFor="characteristics">Characteristics</label>
            <textarea id="characteristics" className="admin-input" {...register("characteristics")} ></textarea>
            <label htmlFor="date">Date</label>
            <input id="date" className="admin-input" {...register("date")} />

            <label htmlFor="image">Image</label>
            <input type="url" className="admin-input" {...register("image")} />

            Active<input type="checkbox" className="admin-input" {...register("active")} />

            <select className="admin-input" {...register("category")} >
            <option value="kitchen">Kitchen</option>
                <option value="bathroom">Bathroom</option>
                <option value="restroom">Restroom</option>
                <option value="livingRoom">Living Room</option>
            
            </select>

            <div className="input-group">
              <label htmlFor="category">Select Category</label>
              <select name="category" id="category" {...register("category")}>
           
                

              </select>
            </div>


            


            
            <button type="submit">Create Product</button>

          </form>


        </div>

        <div className="table-container">
          <h2>tabla de productos</h2>
        </div>
      </div>
    </>
  )


}



