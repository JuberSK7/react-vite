import { Provider } from "react-redux"
import store from "./store"
import router from "./router"
import { RouterProvider } from "react-router-dom"

export default (props) => {

  return <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
}