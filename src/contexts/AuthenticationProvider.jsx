import { useReducer, useCallback, useMemo } from "react";
import { AuthContext } from "./AuthenticationContext";
import { useNavigate } from "react-router-dom";

const initialState = {
    user: null,
    email: null,
    isAuthenticated: false,
    cart: [],
    totalItems: 0,
    totalPrice: 0,
};

function calculateTotals(cart) {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
    return { totalItems, totalPrice };
}

function authReducer(state, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                email: action.payload
            };
        case "LOGOUT":
            return initialState;
        case "UPDATE_QTY": {
            const updatedCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    const newQty =
                        action.payload.type === "plus"
                            ? item.qty + 1
                            : Math.max(1, item.qty - 1);

                    return { ...item, qty: newQty };
                }
                return item;
            });

            const totalItems = updatedCart.reduce((sum, item) => sum + item.qty, 0);
            const totalPrice = updatedCart.reduce((sum, item) => sum + item.qty * item.price, 0);

            return {
                ...state,
                cart: updatedCart,
                totalItems,
                totalPrice
            };
        }
        case "ADD_TO_CART": {
            let updatedCart;

            const existing = state.cart.find(item => item.id === action.payload.id);

            if (existing) {
                updatedCart = state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                updatedCart = [...state.cart, { ...action.payload, qty: 1 }];
            }

            const { totalItems, totalPrice } = calculateTotals(updatedCart);

            return {
                ...state,
                cart: updatedCart,
                totalItems,
                totalPrice
            };
        }
        case "REMOVE_FROM_CART": {
            const updatedCart = state.cart.filter(item => item.id !== action.payload);

            const { totalItems, totalPrice } = calculateTotals(updatedCart);

            return {
                ...state,
                cart: updatedCart,
                totalItems,
                totalPrice
            };
        }
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const navigate = useNavigate();

    const login = useCallback((email, password) => {
        if (email === "admin@gmail.com" && password === "admin123") {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: { email }
            });
            navigate("/product");
        } else {
            console.error("Invalid credentials");
        }
    }, [navigate]);

    const logout = useCallback(() => {
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "CLEAR_CART" })
    }, []);

    const addItem = useCallback((id, image, name, price) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { 
                id, 
                image, 
                name, 
                price 
            }
        });
    }, []);

    const removeItem = useCallback((id => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id
        })
    }), [])

    const updateQty = useCallback((id, type) => {
        dispatch({
            type: "UPDATE_QTY",
            payload: { id, type }
        });
    }, []);

    const value = useMemo(() => ({
        ...state,
        dispatch,
        login,
        logout,
        addItem,
        updateQty,
        removeItem,
    }), [state, login, logout, addItem, updateQty, removeItem]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};