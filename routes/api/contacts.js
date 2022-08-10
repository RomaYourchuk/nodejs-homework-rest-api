const express = require('express')

const router = express.Router()

const contactsOperations = require("../../models/contacts")

router.get("/", async (req, res, next) => {
  try { 
      const contacts = await contactsOperations.listContacts();
      res.json(contacts)
  } 
  catch(error) {
      next(error);
    }
})



router.get('/:contactId', async (req, res, next) => {
    try {
      const {contactId: id} = req.params
      const getById = await contactsOperations.getContactById(id);
      
      if (!getById) {
        res.json({message: "Not found"})
      }
        res.json(getById);
    }
    catch(error) {
    next(error)
  }
});

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router
