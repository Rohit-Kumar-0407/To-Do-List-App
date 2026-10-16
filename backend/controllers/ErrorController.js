const getPage404 = (req, res, next) => {
    res.status(404).json({message: 'Page Not Found'});
}

exports.getPage404 = getPage404;