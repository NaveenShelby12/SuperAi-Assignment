const multer = require('multer');
const supabase = require('../utils/supabaseClient');

// Multer setup for file upload
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['audio/mpeg', 'audio/wav'];
    if (allowedTypes.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Unsupported file format. Please upload MP3 or WAV.'));
  },
});

// Upload file to Supabase
const uploadFile = async (req, res) => {
  try {
    const { buffer, originalname, mimetype } = req.file;

    const { data, error } = await supabase.storage
      .from('voices')
      .upload(`uploads/${Date.now()}_${originalname}`, buffer, { contentType: mimetype });

    if (error) throw error;

    const { publicUrl } = supabase.storage.from('voices').getPublicUrl(data.path);
    res.status(200).json({ message: 'File uploaded successfully', url: publicUrl });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { upload, uploadFile };
