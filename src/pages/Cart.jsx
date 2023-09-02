import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>

  {
    cart.length > 0  ? 
    (<div className="flex mx-auto gap-6  flex-wrap ">


      <div className=" p-4 mx-3 w-[50%]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div className="mt-16">
          <div className="text-[3rem] text-slate-500 font-bold font-serif">Your Cart Summary</div>
              <p>
                <span className="text-[2rem] text-slate-700 font-serif mt-8">Total Items: {cart.length}</span>
              </p>
        </div>

        <div className="mt-1 mb-11 flex  ">
            <p className="text-[2em] text-slate-800 font-serif">Total Amount: ${totalAmount}
            </p>
        </div>

          <button className="w-[10rem]  h-[2.5rem] bg-green-500 text-white text-[1rem]
            font-semibold  rounded-md p-1 mt-8  ">
              CheckOut Now
          </button>

      </div>


    </div>) 

    : 
      (<div>
      <h1 className="text-[3rem] text-center mt-20 font-serif ">Cart Empty</h1>
      <Link to={"/"}>
        <div className="mx-auto flex justify-center mt-8">
        <button className="w-[12rem] h-[3rem] p-1 rounded-md bg-green-700 text-white hover:bg-green-600 font-semibold ">
          Shop Now
        </button>
        </div>
      </Link>
    </div>)
  }
  
    </div>
  );
};

export default Cart;
