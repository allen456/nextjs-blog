export default function handler(req, res) {
    res.status(200).json({ method: req.method, path: req.path, host: req.host, protocol: req.protocol, text: 'Hello' });
}