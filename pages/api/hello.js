export default function handler(req, res) {
    res.status(200).json({ method: req.method, text: 'Hello this is a api response' });
}