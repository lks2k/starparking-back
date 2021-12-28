const Veiculos_DAO = require('../models/veiculos_dao');
var db = require('../../config/bd');

const VeiculosDAO = new Veiculos_DAO(db);

class veiculos_controller{
    getVeiculos(id){
      return new Promise((resolve, reject) => {
        VeiculosDAO.getVeiculos(id).then((resolved) => {
          resolve(resolved);
        }, (rejected) => {
          reject(rejected);
        })
      })
    }

    getTicket(){
      return new Promise((resolve, reject) => {
        VeiculosDAO
        .getTicket().then((resolved) => { 
          resolve(resolved);
        }, (rejected) => {
          reject(rejected);
        })
      })
    }

    getGerenciamento(){ 
      return new Promise((resolve, reject) => {
        VeiculosDAO
        .getGerenciamento().then((resolved) => { 
          resolve(resolved);
        }, (rejected) => {
          reject(rejected);
        })
      })
    }

    getSearch(ticket_id){ 
      return new Promise((resolve, reject) => {
        VeiculosDAO
        .getSearch(ticket_id).then((resolved) => { 
          resolve(resolved);
        }, (rejected) => {
          reject(rejected);
        })
      })
    }

    getSaida(ticket_id){ 
      return new Promise((resolve, reject) => {
        VeiculosDAO
        .getSaida(ticket_id).then((resolved) => { 
          resolve(resolved);
        }, (rejected) => {
          reject(rejected);
        })
      })
    }

    getQuantidade(){ 
      return new Promise((resolve, reject) => {
        VeiculosDAO
        .getQuantidade().then((resolved) => { 
          resolve(resolved);
        }, (rejected) => {
          reject(rejected);
        })
      })
    }

    setPlaca(placa){ 
      return new Promise((resolve, reject) => {
        VeiculosDAO
        .setPlaca(placa).then((resolved) => { 
          resolve(resolved);
        }, (rejected) => {
          reject(rejected);
        })
      })
    }

    setPagar(id){ 
      return new Promise((resolve, reject) => {
        VeiculosDAO
        .setPagar(id).then((resolved) => { 
          resolve(resolved);
        }, (rejected) => {
          reject(rejected);
        })
      })
    }
}

module.exports = veiculos_controller;