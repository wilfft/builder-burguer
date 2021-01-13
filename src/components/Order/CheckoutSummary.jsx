import Burguer from "../Burguer/Burguer";
import BotaoModal from "../ui/BotaoModal/BotaoModal";
import "./CheckoutSummary.css";
const checkoutSummary = (props) => {
  return (
    <div className="checkoutSummary">
      <h2>Esperamos que você goste muito ;)</h2>
      <div style={{ width: "100%", heigth: "300px", margin: "auto" }}></div>
      <Burguer ingredientes={props.ingredientes} />
      <BotaoModal botaoTipo="sucesso">FINALIZA</BotaoModal>
      <BotaoModal botaoTipo="falha">CANCELA</BotaoModal>
    </div>
  );
};
export default checkoutSummary;
