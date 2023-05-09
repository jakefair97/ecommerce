const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const catData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const catData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!catData) {
      res.status(404).json({ message: 'No category found with that id'});
      return;
    }

    res.status(200).json(catData);

  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // create a new category
  const catData = await Category.create(req.body);

  return res.json(catData);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const catData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      }
    }
  );
  return res.json(catData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const catData = await Category.destroy({
    where: {
      id: req.params.id,
    }
  });
  return res.json(catData);
});

module.exports = router;
