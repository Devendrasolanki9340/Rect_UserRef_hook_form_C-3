
import { useForm } from 'react-hook-form';


const RHF = () => {

    let {
        register,handleSubmit,reset  ,formState:{errors},}= useForm()
     
        const formSubmit = (data)=>{
            console.log(data)
            reset()
        }

  return (
      <div className="w-80 h-screen ">
        REACT HOOK FORM
      <form 
       onSubmit={handleSubmit(formSubmit)}
      className="flex p-6 rounded bg-white flex-col gap-4">

        <input
          {...register("productName")}
          className="p-2 border border-gray-400 rotate"
          type="text"
          placeholder="Product name"
        />

        <input  
          {...register("price")}
          className="p-2 border border-gray-400 rotate"
          type="text"
          placeholder="Price"
        />
        <input  
          {...register("category")}
        className="p-2 border border-gray-400 rotate" type="text" placeholder="Category" />

        <input
          {...register("image")}
         type="text" placeholder="image" />
        <button className="p-2 bg-blue-600 text-white rounded-2xl">
          Create
        </button>
      </form>
    </div>
  )
}

export default RHF
