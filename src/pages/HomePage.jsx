import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

export const HomePage = () => {
  const data = useAuth();
  console.log(data);

  return (
    <div>
      <Card>
        <h1 className="text-3xl font-bold my-4">Home Page</h1>
        <p>
          {" "}
          Bienvenid@s a Z I L L A, una nueva plataforma para comprar y vender productos.
          Aquí podrás encontrar miles de productos certificados vendidos por personas repartidas
          por todo el mundo. 


          3 CARDS CON PRODUCTOS
        </p>
      </Card>
    </div>
  );
};
