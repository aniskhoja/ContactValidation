function getBodyFilter(body, columns) { 
        try {
            const check = {
                valid: true,
                message: "success"
            }

            for (const item of columns) {
                if (body.hasOwnProperty(item)) {
                    if(body[item] === "") {
                        check.valid = false;
                        check.message = `${item} cannot be empty`;
                        return check;
                    }
                }
            }
            return check;
        } catch (e) {
            //log error in logger
            logger.error(`Get Body Filter Exception thrown: ${e.message}`);
            return undefined;
        }
};

module.exports = getBodyFilter