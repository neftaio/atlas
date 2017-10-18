/**
 * Return the available payment options for given checkout
 */
function getPaymentOptions(checkout) {
    return [
        {
            id: 'bankTransfer',
            label: {
                en: 'Bank Transfer',
                pt: 'Transferência Bancária',
                es: 'Transferencia Bancaria'
            }
        }
    ];
}

/**
 * Exports
 */
export {getPaymentOptions};
