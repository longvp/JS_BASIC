function logger(message, type = 'log') {
    console[type](message);
}

export default logger;