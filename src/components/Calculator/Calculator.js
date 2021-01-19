import './Calculator.css';
import removeButton from '../../images/remove_icon_grey.svg';
import resetButton from '../../images/calculator_reset.svg';

function Calculator() {
    return (
        <section className="calculator">
            <div className="calculator__inner">
                <div className="calculator__section">
                    <h3 className="calculator__header">Заработок в месяц</h3>
                    <div className="calculator__fields">
                        <div className="calculator__field">
                            <input className="calculator-input__label" placeholder="Доход"/>
                            <input className="calculator-input__value" placeholder="0"/>
                        </div>
                        <div className="calculator__field">
                            <input className="calculator-input__label" placeholder="Доход"/>
                            <input className="calculator-input__value" placeholder="0"/>
                            <img className="calculator__field-remove" src={removeButton} />
                        </div>
                    </div>
                    <div className="calculator__add-field">
                        <span className="calculator__add-field-plus">&#215;</span>
                        <span className="calculator__add-field-label"> Добавить строку</span>
                    </div>
                    <div className="calculator__subtotal">
                        <span>Итого</span>
                        <span className="calculator__subtotal-bold">30 000</span>
                    </div>
                </div>
                <div className="calculator__section">
                    <h3 className="calculator__header">Расходы</h3>
                    <div className="calculator__fields">
                        <div className="calculator__field">
                            <input className="calculator-input__label" placeholder="Траты"/>
                            <input className="calculator-input__value" placeholder="0"/>
                        </div>
                        <div className="calculator__field">
                            <input className="calculator-input__label" placeholder="Траты"/>
                            <input className="calculator-input__value" placeholder="0"/>
                            <img className="calculator__field-remove" src={removeButton} />
                        </div>
                    </div>
                    <div className="calculator__add-field">
                        <span className="calculator__add-field-plus">&#215;</span>
                        <span className="calculator__add-field-label"> Добавить строку</span>
                    </div>
                    <div className="calculator__subtotal">
                        <span>Итого</span>
                        <span className="calculator__subtotal-bold">5 000</span>
                    </div>
                </div>
                <div className="calculator__section">
                    <h3 className="calculator__header">Необходимая сумма накопления</h3>
                    <div className="calculator__range">
                        <div className="calculator__range-input"></div>
                        <div className="calculator__range-input-progress">0</div>
                        <div className="calculator__range-input-min">0</div>
                        <div className="calculator__range-input-max">20000</div>
                        <input type="range" min="0" max="20000" className="calculator__range-input-value" />
                    </div>
                </div>
                <div className="calculator__section calculator__section_result">
                 <p className="calculator__result">= 833 &#8381;</p>
                 <div className="calculator__reset">
                 <svg class="calculator__reset-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" id="cross">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00043 6.41405L1.70791 9.70673L0.293726 8.29248L3.58622 4.99984L0.293091 1.70671L1.7073 0.292497L5.0004 3.58559L8.29335 0.29248L9.70753 1.70673L6.41461 4.9998L9.70712 8.29231L8.2929 9.70652L5.00043 6.41405Z"></path>
</svg>
                     <span className="calculator__reset-text">Очистить поля</span>
                 </div>
                </div>
            </div>
        </section>
    )
}

export default Calculator