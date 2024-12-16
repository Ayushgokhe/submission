document.addEventListener('DOMContentLoaded', () => {
    const bundleOptions = document.querySelectorAll('.bundle-option');
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    const hideAllSizeSelectors = () => {
        document.querySelectorAll('.size-selectors').forEach(selector => {
            selector.classList.add('hidden');
        });
    };

    bundleOptions.forEach((option, index) => {
        option.addEventListener('click', () => {
            bundleOptions.forEach(opt => opt.classList.remove('selected'));
            
            option.classList.add('selected');
            
            radioButtons[index].checked = true;
            
            hideAllSizeSelectors();
            
            const sizeSelector = option.querySelector('.size-selectors');
            if (sizeSelector) {
                sizeSelector.classList.remove('hidden');
            }
        });
    });

    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', () => {
            console.log(`${select.id} changed to ${select.value}`);
        });
    });

    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const selectedBundle = document.querySelector('input[name="bundle"]:checked');
        const selectedOption = selectedBundle.closest('.bundle-option');
        const pairCount = selectedOption.querySelector('.pair-count').textContent;
        const price = selectedOption.querySelector('.price').textContent;
        
        console.log(`Added to cart: ${pairCount} for ${price}`);
    });

    bundleOptions[0].click();
});
