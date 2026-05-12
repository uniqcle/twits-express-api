

export const authMiddleware = async (req, res, next) => {
	const authHeaders = req.headers.authorization; 

	if (!authHeaders) {
        return res.status(401).json({ message: "Unauthorized" });
    }

	next(); 
}