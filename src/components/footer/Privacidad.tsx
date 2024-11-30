import React from "react";

const Privacidad: React.FC = () => {
  return (
    <div className="accesibilidad-text">
      <section>
        <p>
          En <strong>Conecta’t</strong>, tu privacidad es nuestra prioridad.
          Esta política explica cómo recopilamos, usamos, almacenamos y
          protegemos tu información, así como el uso de cookies en nuestra
          aplicación. Te invitamos a leerla detenidamente para entender cómo
          tratamos tus datos.
        </p>
      </section>
      <section>
        <h2>1. Información que recopilamos</h2>
        <p>
          Para ofrecerte la mejor experiencia, recopilamos los siguientes datos:
        </p>
        <ul>
          <li>
            <strong>Datos personales:</strong> como tu nombre, correo
            electrónico, y otros datos que nos proporcionas al registrarte.
          </li>
          <li>
            <strong>Datos de uso:</strong> información sobre cómo interactúas
            con nuestra aplicación, como funciones utilizadas y tiempo de uso.
          </li>
          <li>
            <strong>Información técnica:</strong> dirección IP, tipo de
            dispositivo y sistema operativo.
          </li>
        </ul>
      </section>
      <section>
        <h2>2. Uso de tus datos</h2>
        <p>Utilizamos tu información para:</p>
        <ul>
          <li>Proporcionar y personalizar los servicios de Conecta’t.</li>
          <li>Mejorar el rendimiento y la experiencia de usuario.</li>
          <li>
            Comunicarnos contigo, enviarte notificaciones y resolver consultas.
          </li>
          <li>Garantizar la seguridad de tu cuenta.</li>
        </ul>
      </section>
      <section>
        <h2>3. Compartición de datos</h2>
        <p>
          <strong>Conecta’t</strong> no comparte tus datos personales con
          terceros, excepto:
        </p>
        <ul>
          <li>Cuando sea requerido por ley.</li>
          <li>
            Para prestar servicios esenciales, como el mantenimiento de la
            plataforma, siempre bajo estrictos acuerdos de confidencialidad.
          </li>
        </ul>
      </section>
      <section>
        <h2>4. Seguridad de tus datos</h2>
        <p>
          Adoptamos medidas técnicas y organizativas para proteger tu
          información contra accesos no autorizados, pérdidas o modificaciones.
        </p>
      </section>
      <section>
        <h2>5. Uso de cookies</h2>
        <p>
          Las cookies nos ayudan a mejorar tu experiencia en{" "}
          <strong>Conecta’t</strong>. Usamos:
        </p>
        <ul>
          <li>
            <strong>Cookies esenciales:</strong> necesarias para que la
            aplicación funcione correctamente.
          </li>
          <li>
            <strong>Cookies analíticas:</strong> para entender cómo usas la
            aplicación y mejorarla continuamente.
          </li>
        </ul>
        <p>
          Puedes gestionar tus preferencias de cookies desde la configuración de
          tu dispositivo o navegador.
        </p>
      </section>
      <section>
        <h2>6. Tus derechos</h2>
        <p>Tienes derecho a:</p>
        <ul>
          <li>Acceder a tus datos personales.</li>
          <li>Rectificar información inexacta.</li>
          <li>
            Solicitar la eliminación de tus datos cuando ya no sean necesarios.
          </li>
          <li>
            Retirar tu consentimiento para el tratamiento de datos en cualquier
            momento.
          </li>
        </ul>
        <p>
          Para ejercer tus derechos, escríbenos a{" "}
          <a href="mailto:soporte@conectat.com">soporte@conectat.com</a>.
        </p>
      </section>
      <section>
        <h2>7. Cambios en esta política</h2>
        <p>
          <strong>Conecta’t</strong> se reserva el derecho de actualizar esta
          política para reflejar mejoras en la aplicación o cambios legales.
          Notificaremos cualquier cambio significativo con antelación.
        </p>
      </section>
      <section>
        <h2>Contacto</h2>
        <p>
          Si tienes preguntas sobre nuestra política de privacidad y cookies,
          contáctanos en:
        </p>
        <p>
          📧 <a href="mailto:soporte@conectat.com">soporte@conectat.com</a>
          <br />
          📞 <a href="tel:+34900123456">+34 900 123 456</a>
        </p>
        <p>
          Gracias por confiar en Conecta’t. Trabajamos constantemente para
          garantizar la protección de tu privacidad y brindarte una experiencia
          excepcional.
        </p>
      </section>
    </div>
  );
};

export default Privacidad;
