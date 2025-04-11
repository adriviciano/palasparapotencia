export default function PalaCard({ nombre, enlace }) {
    return (
      <section>
        <h3>Compra {nombre} en Amazon</h3>
        <iframe 
          src={enlace}
          frameborder="0">
        </iframe>
      </section>
    );
  }
  