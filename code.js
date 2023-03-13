
        // Task1

        function getItemsMaxNumber(items) {
            let maxNumber = 0;
            for (let item of items) {
                const matches = item.name.match(/\d+/g);
                if (matches) {
                    for (let match of matches) {
                        const number = parseInt(match);
                        if (number > maxNumber) {
                            maxNumber = number;
                        }
                    }
                }
            }
            return maxNumber;


        // Task1 - optymalizacja 1

        function getItemsMaxNumber(items) {
            return items.reduce((maxNumber, item) => {
                const matches = item.name.match(/\d+/g);
                if (matches) {
                    for (let match of matches) {
                        const number = parseInt(match);
                        if (number > maxNumber) {
                            maxNumber = number;
                        }
                    }
                }
                return maxNumber;
            }, 0);
        }
        // Task1 - optymalizacja 2

        function getItemsMaxNumber(items) {
            return items.reduce((maxNumber, item) => {
                const matches = item.name.match(/\d+/g);
                if (matches) {
                    const numbers = matches.map(match => parseInt(match));
                    return Math.max(maxNumber, ...numbers);
                }
                return maxNumber;
            }, 0);
        }
