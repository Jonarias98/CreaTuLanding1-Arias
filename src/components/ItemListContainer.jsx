const ItemListContainer = ({ saludo }) => {
  return (
    <div className="container mt-5">
      <div className="alert alert-primary text-center" role="alert">
        {saludo}
      </div>
    </div>
  );
};

export default ItemListContainer;
