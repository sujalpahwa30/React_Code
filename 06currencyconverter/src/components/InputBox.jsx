// eslint-disable-next-line no-unused-vars
import React, {useId} from 'react';

function InputBox({
    
    // eslint-disable-next-line react/prop-types
    label,
    // eslint-disable-next-line react/prop-types
    amount,
    // eslint-disable-next-line react/prop-types
    onAmountChange,
    // eslint-disable-next-line react/prop-types
    onCurrencyChange,
    // eslint-disable-next-line react/prop-types
    currencyOptions = [],
    // eslint-disable-next-line react/prop-types
    selectedCurrency = "usd",
    // eslint-disable-next-line react/prop-types
    amountDisabled = false,
    // eslint-disable-next-line react/prop-types
    currencyDisabled = false,
    // eslint-disable-next-line react/prop-types
    className = "",
}) {

    const id = useId()
    return (
        <div className= {`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1-2'>
                <label htmlFor={id} className='text-black/40 mb-2 inline-block'> {label}</label>
                <input
                id = {id} 
                type="number"
                className='outline-none w-full bg-transparent py-1.5'
                placeholder='Amount'
                disabled={amountDisabled}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full '> Currency Type</p>
            <select 
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectedCurrency}
            onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
            disabled = {currencyDisabled}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>

            </div>
        </div>
    )
}

export default InputBox;