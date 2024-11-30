import React from "react";

const AvisoLegal: React.FC = () => {
  return (
    <div className="accesibilidad-text">
      <section>
        <h1>Aviso Legal de Conecta’t</h1>
        <p>
          El presente Aviso Legal regula el acceso y uso de la aplicación{" "}
          <strong>Conecta’t</strong>. Al utilizar nuestra plataforma, aceptas
          los términos y condiciones aquí expuestos. Por favor, léelos
          atentamente.
        </p>
      </section>
      <section>
        <h2>1. Identificación del titular</h2>
        <p>
          La aplicación <strong>Conecta’t</strong> es propiedad de:
        </p>
        <ul>
          <li>
            <strong>Razón social:</strong> [Nombre de la empresa]
          </li>
          <li>
            <strong>NIF/CIF:</strong> [Número de identificación fiscal]
          </li>
          <li>
            <strong>Domicilio:</strong> [Dirección física]
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:soporte@conectat.com">soporte@conectat.com</a>
          </li>
          <li>
            <strong>Teléfono:</strong>{" "}
            <a href="tel:+34900123456">+34 900 123 456</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>2. Condiciones de uso</h2>
        <p>
          El acceso a la aplicación es gratuito, pero ciertos servicios pueden
          estar sujetos a registro y/o pago. El usuario se compromete a:
        </p>
        <ul>
          <li>Utilizar la aplicación de manera legal y respetuosa.</li>
          <li>
            No realizar actividades que dañen, sobrecarguen o deterioren el
            funcionamiento de la plataforma.
          </li>
          <li>
            Proporcionar información veraz en el registro y uso de los
            servicios.
          </li>
        </ul>
      </section>
      <section>
        <h2>3. Propiedad intelectual e industrial</h2>
        <p>
          Todos los contenidos de <strong>Conecta’t</strong>, incluyendo texto,
          imágenes, logotipos, diseños y software, están protegidos por derechos
          de propiedad intelectual e industrial. Queda prohibida su
          reproducción, distribución o modificación sin autorización expresa del
          titular.
        </p>
      </section>
      <section>
        <h2>4. Responsabilidad</h2>
        <p>
          El titular de <strong>Conecta’t</strong> no se responsabiliza de:
        </p>
        <ul>
          <li>Interrupciones o fallos en el acceso a la aplicación.</li>
          <li>Daños derivados del uso indebido de la plataforma.</li>
          <li>Contenidos externos a los que pueda enlazar la aplicación.</li>
        </ul>
      </section>
      <section>
        <h2>5. Legislación aplicable y jurisdicción</h2>
        <p>
          Este Aviso Legal se rige por la legislación española. Para cualquier
          controversia derivada del uso de la aplicación, ambas partes se
          someten a los juzgados y tribunales del domicilio del usuario, siempre
          que este sea considerado consumidor, o a los juzgados del titular en
          caso contrario.
        </p>
      </section>
      <section>
        <h2>6. Contacto</h2>
        <p>
          Para cualquier consulta relacionada con este Aviso Legal, contáctanos
          en:
        </p>
        <p>
          📧 <a href="mailto:soporte@conectat.com">soporte@conectat.com</a>
          <br />
          📞 <a href="tel:+34900123456">+34 900 123 456</a>
        </p>
      </section>
    </div>
  );
};

export default AvisoLegal;
