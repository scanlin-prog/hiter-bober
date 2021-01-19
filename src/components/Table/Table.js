import './Table.css';
import printer from '../../images/printer.svg';
import collection from '../../images/collection.svg';
import vk from '../../images/vk_icon.svg';
import facebook from '../../images/facebook_icon.svg';
import ok from '../../images/odnoklassniki_icon.svg';
import twitter from '../../images/twitter_icon.svg';
import whatsapp from '../../images/whatsapp_icon.svg';
import viber from '../../images/viber_icon.svg';
import telegram from '../../images/telegram_icon.svg';

function Table() {
    return(
        <>
            <table className="table" border="1">
                <tr><th>Срок</th><th>Откладываемая сумма в месяц</th></tr>
                <tr><td>3 месяца</td><td>5000</td></tr>
                <tr><td>6 месяцев</td><td>10000</td></tr>
                <tr><td>12 месяцев</td><td>20000</td></tr>
                <tr><td>24 месяца</td><td>40000</td></tr>
            </table>
            <div className="icons">
                <img className="icons_messenger" src={printer} />
                <img className="icons_messenger" src={collection} />
                <img className="icons_messenger" src={vk} />
                <img className="icons_messenger" src={facebook} />
                <img className="icons_messenger icons__messenger_ok" src={ok} />
                <img className="icons_messenger" src={twitter} />
                <img className="icons_messenger" src={whatsapp} />
                <img className="icons_messenger" src={viber} />
                <img className="icons_messenger" src={telegram} />
            </div>
        </>
    )
};

export default Table