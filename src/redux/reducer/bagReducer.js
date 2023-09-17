import { createSlice } from "@reduxjs/toolkit"


const initialState={
    user:{
        img:<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width={200} class="rounded mx-auto d-block" alt="..."/>,
        name:"Aman",
        email:"aman@gmail.com",
        phoneNo:"9557548668",
        password:"12345",
        address:"Nagar Road, pune, Maharastra",
        payment : "UPI Trsnsaction"
    },
    cart:[],
    caetTotalQuantity:0,
    cartTotalAmoumt:0,
    wishlist:[],
    OrderHistory:[],
    product:null,
}

const bagReducer=createSlice({
    name:"bag",
    initialState,
    reducers:{
        setProduct:(state,action) =>{
            state.product=action.payload
        },
        addCart:(state,action)=>{
            const existingIndex =state.cart.findIndex(
                (item)=> item.id===action.payload.id
            );
            if(existingIndex>=0){
                state.cart[existingIndex]={
                    ...state.cart[existingIndex],
                    cartQuantity :state.cart[existingIndex].cartQuantity +1,
                };
            }
            else{
                let tempProductIntem ={...action.payload,cartQuantity:1};
                state.cart.push(tempProductIntem)
            }
        },
        decreaseCart:(state,action)=>{
            const itemIndex = state.cart.findIndex(
                (item)=>item.id===action.payload.id
            );
            if(state.cart[itemIndex].cartQuantity>1){
                state.cart[itemIndex].cartQuantity -=1;
            }
            else if(state.cart[itemIndex].cartQuantity === 1){
                const nextCartItem =state.cart.filter(
                    (item)=>item.id !==action.payload.id
                );
                state.cart =nextCartItem;
            }
        },
        removeCart:(state,action)=>{
            state.cart.map((cartItem)=>{
                if(cartItem.id ===action.payload.id){
                    const nextCartItem=state.cart.filter(
                        (item)=>item.id !==cartItem.id
                    );
                    state.cart = nextCartItem;
                }
                return state;
            });
        },
        getTotals :(state)=>{
            let{total,quantity}=state.cart.reduce(
                (cartTotal,cartItem)=>{
                    const {price,cartQuantity}=cartItem;
                    const itemTotal =price * cartQuantity;

                    cartTotal.taotal +=itemTotal;
                    cartTotal.quantity +=cartQuantity;

                    return cartTotal;
                },
                {
                    total:0,
                    quantity:0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.caetTotalQuantity=quantity;
            state.cartTotalAmoumt=total;

        },
        clearCart :(state)=>{
            state.cart=[];
        },
        addWishlist:(state,action)=>{
            const existingIndex=state.wishlist.findIndex(
                (item)=>item.id ===action.payload.id
            );
            if(existingIndex>=0){
                state.wishlist[existingIndex]={
                    ...state.wishlist[existingIndex]
                };

            }
            else{
                let tempProductIntem={...action.payload};
                state.wishlist.push(tempProductIntem)
            }
        },
        removeWishlist:(state,action)=>{
            state.wishlist.map((wishlistItem)=>{
                if(wishlistItem.id=== action.payload.id){
                    const nextWishlistItem =state.wishlist.filter(
                        (item)=>item.id !==wishlistItem.id
                    );
                    state.wishlist=nextWishlistItem;
                }
                return state;
            });
        },
        clearWishlist:(state)=>{
            state.wishlist=[]
        },
        renameName:(state,action)=>{
            state.user.name=action.payload
        },
        
        addOrderHistory:(state,action)=>{
            state.OrderHistory=[...state.OrderHistory,action.payload]
            // state.OrderHistory.push(action.payload)
        },
    }
})


export default bagReducer.reducer;
export const { addCart, renameName, clearWishlist, setProduct,decreaseCart,getTotals,clearCart, addOrderHistory,addWishlist,removeCart, removeWishlist} = bagReducer.actions;

