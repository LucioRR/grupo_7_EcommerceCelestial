const path = require('path');
const {Router} = require('express');
const router = Router();
const multer = require('multer');
const {productDetail, productCreate, productAll, productStorage, update, modify, trash, search} = require('../controllers/productController');
const folder = require('../middlewares/storage');
const upload = multer({storage: folder('product')});
const productCreateValidation = require('../middlewares/productCreateValidation');
const productEditValidation = require('../middlewares/productEditValidation');



// Muestra todos los productos
router.get('/', productAll)

// Crea un nuevo producto
router.get('/crear', productCreate);
router.post('/crear', [upload.array('imagen')], productCreateValidation ,productStorage);

//Edita un producto
router.get('/editar/:id', update);
router.put('/update',upload.array('imagen'), productEditValidation, modify);

//Elimina un producto
router.delete('/borrar',trash);

// Busca un producto
router.get('/buscar', search);

// Muestra un producto por id
router.get('/:id', productDetail);



module.exports = router;