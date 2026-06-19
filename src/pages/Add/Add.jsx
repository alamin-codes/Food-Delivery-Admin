// Add.jsx
import { useState } from "react";
import { assets } from "../../assets/assets";
import axios from 'axios';
import { toast } from 'react-toastify';
const Add = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",data.price)
    formData.append("category",data.category)
    formData.append("image",image)
    const response = await axios.post(`${url}/api/food/add`, formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  } });
    if (response.data.success) {
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else {
      toast.error(response.data.message)
    }
  }


  return (
    <div className="pt-5 pl-10">
      <form className="space-y-2" onSubmit={onSubmitHandler}>
        <div>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-50"
              src={image ? URL.createObjectURL(image) : assets.parcel_icon}
              alt=""
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        </div>
        <div>
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="border outline-0 px-1 rounded w-80"
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div>
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className="border outline-0 px-1 rounded w-80"
            name="description"
            rows="6"
            placeholder="Write content here"
          ></textarea>
        </div>
        <div className="flex justify-between w-80">
          <div>
            <p>Product category</p>
            <select
              className="border outline-0 px-1 rounded w-38"
              name="category"
              onChange={onChangeHandler}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <p>Product price</p>
            <input
              className="border outline-0 px-1 rounded w-38"
              type="number"
              name="price"
              placeholder="$20"
              onChange={onChangeHandler}
              value={data.price}
            />
          </div>
        </div>
        <button className="border outline-0 px-1 rounded w-30 p-1 bg-black text-white cursor-pointer" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
