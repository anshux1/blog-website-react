import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";


export const AppContext = createContext({})


export const ContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(null)

  const value = { loading, setLoading, posts, setPosts, page, setPage, totalPage, setTotalPage }

  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const useBlogs = async () => {
      setLoading(true )
      const data = await axios.get( apiUrl , { params: { page } })
      setPosts(data.data.posts)
      setTotalPage(data.data.totalPages)
      setLoading(false)
    }
    useBlogs()
  },[page])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}