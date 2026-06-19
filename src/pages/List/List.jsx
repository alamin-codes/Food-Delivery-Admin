// List.jsx

import { useEffect, useState } from "react"
import  axios  from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list, setList] = useState([]);
  const fetchList = async () => {
    const respons = await axios.get(`${url}/api/food/list`);
    if (respons.data.success) {
      setList(respons.data.data)
    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async(foodId) => {
    const response = await axios.post( `${url}/api/food/remove`, {id:foodId});
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error(response.data.error)
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className="m-10">
      <h2 className="text-2xl font-bold">All Food List</h2>
      <div>
        <div className="grid grid-cols-5 border mb-3">
          <b className="flex justify-center border">Image</b>
          <b className="flex justify-center border">Name</b>
          <b className="flex justify-center border">Category</b>
          <b className="flex justify-center border">Price</b>
          <b className="flex justify-center border">Action</b>
        </div>
        {list.map((item, index) => {
          return(
            <div key={index} className="grid grid-cols-5 border items-center mb-3">
              <div className="p-2"><img className="w-40 flex justify-center h-full items-center" src={`${url}/images/`+item.image} alt="" /></div>
              <p className="flex justify-center border-x h-full items-center">{item.name} </p>
              <p className="flex justify-center border-r h-full items-center">{item.category} </p>
              <p className="flex justify-center border-r h-full items-center">${item.price} </p>
              <p className="flex justify-center h-full items-center cursor-pointer" onClick={() => removeFood(item._id)}>X </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List