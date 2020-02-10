import React, { Component } from "react";

import "../app.scss";
import "../styles/help.scss";

export default class Help extends Component {
  render() {
    if (!this.props.visible) return "";
    else
      return (
        <div id="help">
          <h1>gStation</h1>
          <br></br>
          <br></br>
          <h2> | PREGUNTAS FRECUENTES | </h2>
          <p>
            ¿Hacen envíos al interior?<br></br>
            <br></br> Hacemos envíos a todo el país mediante OCA, que es un
            servicio Puerta a Puerta (puede llegar a tu domicilio o a la
            sucursal de OCA más cercana a tu domicilio).
            <br></br>
            <br></br>
            ¿Que costo tiene un envío? <br></br>
            <br></br>El costo del mismo se abona con el pedido, es decir, el
            pedido incluye el costo del envío. El valor del envío depende de las
            dimensiones del paquete y distancia. Podrás saber el costo del envío
            en tiempo real desde www.gstation.com ingresando tu código postal en
            el producto a adquirir o a tu pedido. Y según el pedido desde la
            misma web se le informa si es bonificado el mismo.
            <br></br>
            <br></br>
            ¿Cuánto demora?<br></br>
            <br></br> El plazo del envío estimado es entre 4 y 9 días hábiles
            dependiendo el lugar de destino. Igualmente, una vez que sea
            despachado tu pedido se te enviará un correo electrónico con el
            traking del envío de OCA. Por otro lado, desde Mi Cuenta -
            Información del Pedido, encontrarás el mismo traking de OCA.
            <br></br>
            <br></br>
            ¿Realizan envíos por mensajería (moto)?<br></br> <br></br>El envío
            por MotoExpress es un servicio único para los clientes que residan
            en C.A.B.A y alrededores (consultar en la web localidades que abarca
            el envío). La coordinación de la entrega del pedido se realiza
            telefónicamente con nuestros representantes de atención al cliente,
            ellos se comunican con usted o viceversa, lo que ocurra primero). El
            valor del envío de la MotoEspress se abona si o si al cadete de la
            mensajería.
            <br></br>
            <br></br>
            ¿Cuáles son las formas de pago?<br></br>
            <br></br> Las formas de pago en son efectivo, transferencia o
            depósito bancario, tarjetas de crédito o débito en el local
            (consultar recargos), y MercadoPago (tarjetas de crédito, Pagofacil
            y Rapipago). Pero para tener el precio especial de Facebook es
            únicamente efectivo, transferencia o depósito bancario. Sino es el
            precio normal.
            <br></br>
            <br></br>
            ¿Puedo pagar con tarjeta?<br></br>
            <br></br> Sí podes, y aceptamos prácticamente todas las tarjetas de
            crédito en el local, o si estas en el interior lo mediante
            MercadoPago (la misma web te da esta opción de pago). El precio por
            este medio es el de lista, no aplicándose descuento ni promociones
            vigentes, salvo que aclare lo contrario.
            <br></br>
            <br></br>
            ¿Puedo pagar en cuotas sin interés?<br></br> <br></br>En el local
            tenes cuotas con interés. Pero por MercadoPago dependiendo la
            tarjeta que tengas te ofrece cuotas sin interés. El link para saber
            cuáles son las tarjetas con promos es:
            https://www.mercadopago.com.ar/promociones
            <br></br>
            <br></br>
            ¿Cuánto es el interés que cobra MercadoPago por pagar con tarjetas
            que no estén en promoción?<br></br>
            <br></br> Para ver la tabla de interés actualizada que está cobrando
            MercadoPago podes ingresar hace click acá
            https://www.mercadopago.com.ar/ayuda/costos-financiacion_621
            <br></br>
            <br></br>
            ¿Por qué veo dos precios, un “Precio de Lista” y un “Precio
            especial”? <br></br>
            <br></br>Porque a los usuarios que acceden desde Facebook les
            hacemos un precio especial si el pago es contado, y por contado
            tomamos únicamente: efectivo billete, depósito y transferencias
            bancarias.
            <br></br>
            <br></br>
            ¿Los precios publicados en la web en que moneda están? <br></br>
            <br></br>
            Todos los precios de la web están expresados en pesos argentinos.
            <br></br>
            <br></br>
            ¿Son precios Finales o más IVA?<br></br>
            <br></br> Todos los precios son finales IVA incluido.
            <br></br>
            <br></br>
            ¿Entregan factura y garantía?<br></br> En absolutamente todas las
            ventas que realizamos se entrega factura fiscal en donde especifica
            el tiempo de la garantía. Bajo ningún concepto ni excepción
            realizamos ventas sin su respectiva factura.
            <br></br>
            <br></br>
            ¿Puedo pagar con tarjeta de débito? Sí podes, y se te cobra el
            “Precio especial”.
            <br></br>
            <br></br>
            ¿Necesito un presupuesto, como hago?<br></br> <br></br>Simplemente
            desde la web vas agregando los productos y el sistema te va sumando
            los productos. Todos los productos, stock y precios son reales y al
            momento.
            <br></br>
            <br></br>
            ¿Puedo pagar por MercadoPago con el precio especial?<br></br>
            <br></br> No, el precio especial únicamente es por pago contado, y
            por contado tomamos únicamente: efectivo billete, depósito y
            transferencias bancarias.
            <br></br>
            <br></br>
            ¿Puedo pagar por Rapipago o Pago Facíl con el precio especial?
            <br></br>
            <br></br> No al precio especial, porque sería por medio de
            MercadoPago y no es considerado contado, por contado tomamos
            únicamente: efectivo billete, depósito y transferencias bancarias.
            En ese caso recomendamos pagar por deposito desde cualquier banco.
            <br></br>
            <br></br>
            ¿Cuáles son los horarios de atención?<br></br>
            <br></br> Los horarios de atención son de lunes a viernes de 11 a
            19hs, y sábados de 11 a 17hs.
            <br></br>
            <br></br>
            ¿Tienen sucursales?<br></br>
            <br></br>No tenemos ninguna sucursal, nuestro único punto de entrega
            al público es en la Ciudad Autónoma de Buenos Aires en en la calle
            Roseti al 2118.
            <br></br>
            <br></br>
            ¿Cómo hago un pedido?<br></br>
            <br></br> Para armar un pedido simplemente vas agregando al carrito
            todos los productos que queres, y al finalizar pones comprar. En el
            1er paso te pregunta si necesitas envío, luego la forma de pago,
            luego accedes como cliente o creas un cliente nuevo según
            corresponda confirmas el pedido y te asigna un número de pedido y te
            da los datos de pago según corresponda.
            <br></br>
            <br></br>
            Ya tengo el número de pedido ¿Cómo prosigo?<br></br> <br></br>En el
            caso que sea con envío tenes que realizar 1ro el pago y
            automáticamente cuando se acredita el pago tu pedido se despacha, en
            el caso de ser pago por banco recorda informar el pago desde
            www.gstation.com/pagos adjuntado el comprobante, es fundamenta en
            caso de ser más de un comprobante de pago subirlo de a uno e
            informar el importe exacto. Ni bien su pedido se despache por la
            forma de envío convenida el sistema le va a estar enviando un mail
            indicando que se despachó y con el número de guía en los casos que
            corresponda. Y también en todo momento se puede ver el estado del
            pedido desde www.gstation.com/pedidos .<br></br>
            <br></br>
            ¿Quiero reservar mercadería?<br></br>
            <br></br> No hacemos ningún tipo de reserva de mercadería,
            únicamente la mercadería abona o con comprobante de pago se reserva.
            <br></br>
            <br></br>
            ¿Hacen factura A? ¿Cómo la solicito?<br></br> <br></br>Efectivamente
            hacemos factura A, y en el caso de ser un cliente nuevo tiene que
            ingresar el cliente con número de CUIT y en las observaciones del
            pedido aclarar que es con factura A.
            <br></br>
            <br></br>
            ¿Tengo un producto en garantía que me fallo, que hago?<br></br>
            <br></br> Primero tenes que identificar si la garantía es con Newton
            Station SRL o con el fabricante. Para esto en la factura indica
            además del tiempo con quien corresponde la factura. En el caso de
            indicar solo el tiempo, entonces la garantía es con Newton Station
            SRL, en este caso tiene que acercar el producto todas las cajas y
            accesorio tal cual se le entrego junto a la fotocopia de la factura
            de compra. Pero en caso de decir un fabricante luego de la fecha es
            con el fabricante o service oficial siempre en el país. Por ejemplo
            “3 años oficial” sería con el service de fabricante como puede ser
            MSI, Gigabyte o Samsung, y los datos de service oficial de cada
            marca que trabajamos están en:
            http://www.gstation.com/index.php?seccion=7. Cualquier duda
            escribanos a rma@gstation.com.
            <br></br>
            <br></br>
            ¿Cómo obtengo el juego y/o beneficios de los productos que se
            promocionan ese beneficio?<br></br>
            <br></br> Todos los canjes de los juegos y/o beneficios se hacen de
            forma posterior a la entrega del producto y es totalmente de forma
            digital. Los canjes se realiza desde www.gstation.com/canje con los
            datos de la factura de compra y el mail registrado en la compra. Se
            toma como fecha válida, para la vigencia de las promociones, la
            fecha en que fue creado el pedido vía web por el cliente, y no la
            fecha de pago ni la fecha de la factura.
          </p>
          <br></br>
        </div>
      );
  }
}
