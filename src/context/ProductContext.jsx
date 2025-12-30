import { createContext, useEffect, useState } from "react"
import axios from "../api/axiosInstance";

export const ProductDataContext = createContext()

const ProductContext = ({children}) => {
    const [product , setProduct] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState({ gte: 0, lte: 10000 });
    const [ratings, setRatings] = useState(0);
    const [sortBy, setSortBy] = useState("price");
    const [sortType, setSortType] = useState("asc");
    const [loading, setLoading] = useState(false)

    const getProduct = async() => {
        try {
            const params = {
                page,
                limit,
                keyword,
                categories: category,
                ratings,
                sortBy,
                sortType,
            };
            params["price[gte]"] = priceRange.gte;
            params["price[lte]"] = priceRange.lte;
            const response = await axios.get('/products/all-products', {params})
            console.log(response);
            
            setProduct(response.data.data.docs)
            console.log(response);
            
        } 
        catch (error) {
            console.error(error)    
        }
    }

    useEffect(()=>{
        getProduct()
        console.log("Hello");
        
    },[])


    
  
  
    return (
        <ProductDataContext.Provider value={{product}} >
            {children}
        </ProductDataContext.Provider>
    )
}

export default ProductContext