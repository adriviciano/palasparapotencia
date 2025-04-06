export default function PalaCard({ nombre, imagen, precio, enlace }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
        <img src={imagen} alt={nombre} style={{ width: "100%" }} />
        <h2>{nombre}</h2>
        <p>{precio}</p>
        <a href={enlace} target="_blank" rel="nofollow sponsored noopener">
          Ver en Amazon
        </a>
      </div>
    );
  }
  