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

export const findAll = async (req, res) => {
  try {
    const pictures = await Picture.find();
    res.json(pictures);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar imagens." });
  }
};

export const remove = async () => {
  try {
    const picture = await Picture.findById(req.params.id);

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar imagens." });
  }
};
