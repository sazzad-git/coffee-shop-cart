export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
      return {
        ...state,
        item: state.item.filter((curElem) => {
          return curElem.id !== action.payload;
        }),
      };
    }
  
    if (action.type === "CLEAR_CART") {
      return { ...state, item: [] };
    }
  
    if (action.type === "INCREMENT") {
      const updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });
  
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "DECREMENT") {
      const updatedCart = state.item
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity - 1 };
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity >= 0);
      return { ...state, item: updatedCart };
    }

    if (action.type === "CREAMPLUS") {
      const updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, cream: curElem.cream + 1 };
        }
        return curElem;
      });
  
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "CREAMMINUS") {
      const updatedCart = state.item
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, cream: curElem.cream - 1 };
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity >= 0);
      return { ...state, item: updatedCart };
    }


    if (action.type === "MILKPLUS") {
      const updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, milk: curElem.milk + 1 };
        }
        return curElem;
      });
  
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "MILKMINUS") {
      const updatedCart = state.item
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, milk: curElem.milk - 1 };
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity >= 0);
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "GET_TOTAL") {
      let { totalItem, totalAmount } = state.item.reduce(
        (accum, curVal) => {
          let { price, quantity, cream, milk } = curVal;
  
          let updatedAmount = price * quantity;
          let updatedCream = price * cream;
          let updatedMilk = price * milk;
          let updatedTotalAmount = updatedAmount + updatedCream +updatedMilk;
          accum.totalAmount += updatedTotalAmount;
  
          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    }
    return state;
  };
  