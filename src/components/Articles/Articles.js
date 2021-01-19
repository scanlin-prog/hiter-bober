import './Articles.css'
import savingMoney from '../../images/Kak-ekonomit-dengi-pravilno-sovety-i-rekomendacii.jpg';
import extraWaste from '../../images/ubezhdeniya-iz-za-kotorykh-teryayutsya-dengi-620x412.jpg';
import piggyBank from '../../images/prichiny-priobreteniya-svini-kopilki-620x412.jpg';
import wealthGene from '../../images/hiter-bober-gen-bogststva-1-620x412.png';
import retirementIncome from '../../images/reit-1-620x412.jpg';
import buyingApartment from '../../images/Kak-zarabotat-na-kvartiru-za-1-god.jpg';
import webDevelopSecond from '../../images/webDevelopSecond.jpg';
import webDevelopThird from '../../images/webDevelopThird.jpg';
import webDevelopFourth from '../../images/webDevelopFourth.jpg';
import arrow from '../../images/next-or-back.svg';

function Articles() {
    return(
            <section className="articles">
                <h3 className="articles__plan-title">Будет полезно ознакомиться</h3>
                <div className="articles__plan-links">
                    <a><img className="articles__plan-link" src={savingMoney} /></a>
                    <a><img className="articles__plan-link" src={extraWaste} /></a>
                    <a><img className="articles__plan-link" src={piggyBank} /></a>
                    <img src={arrow} className="articles__plan-arrow articles__plan-arrow_right" />
                    <img src={arrow} className="articles__plan-arrow articles__plan-arrow_left" />
                </div>
                <div className="articles__plan-links">
                    <a><img className="articles__plan-link" src={wealthGene} /></a>
                    <a><img className="articles__plan-link" src={retirementIncome} /></a>
                    <a><img className="articles__plan-link" src={buyingApartment} /></a>
                    <img src={arrow} className="articles__plan-arrow articles__plan-arrow_right" />
                    <img src={arrow} className="articles__plan-arrow articles__plan-arrow_left" />
                </div>
                <h3 className="articles__plan-title">Ещё больше онлайн-калькуляторов</h3>
                <div className="articles__plan-links">
                    <a><img className="articles__plan-link" src={webDevelopSecond} /></a>
                    <a><img className="articles__plan-link" src={webDevelopThird} /></a>
                    <a><img className="articles__plan-link" src={webDevelopFourth} /></a>
                </div>
            </section>
    )
}

export default Articles