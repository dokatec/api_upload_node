import Picture from "../models/picture.js";

export const create = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file;

    const picture = new Picture({
      name,
      src: file.path,
    });

    await picture.save();

    res.json({ picture, msg: "Imagem salva com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar imagem." });
  }
};

export const findPicture = async (req, res) => {
  const picture = await Picture.find({});
  return res.json(picture);
};
