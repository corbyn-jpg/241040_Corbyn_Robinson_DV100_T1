

//Plus/minus button code
document.addEventListener("DOMContentLoaded", function() {
    const numberContainers = document.querySelectorAll('.number');
    
    numberContainers.forEach(container => {
        const numberInput = container.querySelector('input[type="text"]');
        const minusBtn = container.querySelector('.btn.minus');
        const plusBtn = container.querySelector('.btn.plus');
        
        minusBtn.addEventListener("click", function() {
            let currentValue = parseInt(numberInput.value);
            if (currentValue > 0) {
                numberInput.value = currentValue - 1;
                plusBtn.removeAttribute("disabled");
            }
            if (currentValue === 1) {
                this.setAttribute("disabled", "disabled");
            }
        });
        
        plusBtn.addEventListener("click", function() {
            let currentValue = parseInt(numberInput.value);
            if (currentValue < parseInt(numberInput.max)) {
                numberInput.value = currentValue + 1;
                minusBtn.removeAttribute("disabled");
            }
            if (currentValue === parseInt(numberInput.max) - 1) {
                this.setAttribute("disabled", "disabled");
            }
        });
    });
});

