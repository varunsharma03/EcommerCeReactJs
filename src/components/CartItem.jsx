
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="mx-auto">

      <div className="flex flex-col mx-auto border-slate-500 px-5   border-b-2 py-5">

        <div>
          <img src={item.image} className="w-[200px] " />
        </div>
        <div>
          <h1 className="text-slate-700 text-[2rem] py-1">{item.title}</h1>
          <h1 className="text-slate-600 text-[1rem] ">{item.description}</h1>
          <div className="flex justify-between  ">
            <p className="text-[2rem] text-blue-500">{item.price} </p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase size={40} className="cursor-pointer" />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
