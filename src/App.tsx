// Packages
import { Route, Routes } from "react-router";

// Layouts
import DashboardLayout from "./modules/layout/dashboard-layout";

// Pages
import Dashboard from "./modules/dashboard/pages";
import Products from "./modules/products/pages";

// Provider
import { ProductProvider } from "./modules/products/context/product-contetx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/products"
            element={
              <ProductProvider>
                <Products />
              </ProductProvider>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
