const express = require('express');
const router = express.Router();
const Veiculos_Controller = require('../controllers/veiculos_controller');
const VeiculosController = new Veiculos_Controller();

router.get('/', (req, res) => {
  VeiculosController.getVeiculos(req.query.ticket_id).then((resolved) => {
    res.send(resolved);
  }, (rejected) => {
    res.send(rejected);
  })
});


router.get('/ticket', (req, res) => {
  VeiculosController.getTicket().then((resolved) => {
    res.send(resolved);
  }, (rejected) => {
    res.send(rejected);
  })
});

router.get('/gerenciamento', (req, res) => {
  VeiculosController.getGerenciamento().then((resolved) => {
    res.send(resolved);
  }, (rejected) => {
    res.send(rejected);
  })
});

router.get('/saida', (req, res) => {
  VeiculosController.getSaida(req.query.ticket_id).then((resolved) => {
    res.status(200).send(resolved);
  }, (rejected) => {
    res.status(401).send(rejected);
  })
});

router.get('/quantidade', (req, res) => {
  VeiculosController.getQuantidade().then((resolved) => {
    res.status(200).send(resolved);
  }, (rejected) => {
    res.status(401).send(rejected);
  })
});

router.post('/placa', (req, res) => {

  if(!req.body.placa) res.status(400).send();

  VeiculosController.setPlaca(req.body.placa).then((resolved) => {
    res.send(resolved); 
  }, (rejected) => {
    res.send(rejected);
  })
});

router.post('/pagar', (req, res) => {

  if(!req.query.ticket_id) res.status(400).send();

  VeiculosController.setPagar(req.query.ticket_id).then((resolved) => {
    res.send(resolved); 
  }, (rejected) => {
    res.send(rejected);
  })
});


module.exports = router;