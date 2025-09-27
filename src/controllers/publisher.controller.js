
const { Publisher, Book } = require('../models');
async function list(req, res, next){ try{ const rows = await Publisher.findAll({ include: [{ model: Book, as: 'books' }] }); res.json(rows); } catch(e){ next(e); } }
async function create(req, res, next){ try{ const row = await Publisher.create(req.body); res.status(201).json(row);} catch(e){ next(e);} }
async function getById(req, res, next){ try{ const row = await Publisher.findByPk(req.params.id, { include: [{ model: Book, as: 'books' }] }); if(!row) return res.status(404).json({error:'Not found'}); res.json(row);} catch(e){ next(e);} }
async function update(req, res, next){ try{ const row = await Publisher.findByPk(req.params.id); if(!row) return res.status(404).json({error:'Not found'}); await row.update(req.body); res.json(row);} catch(e){ next(e);} }
async function remove(req, res, next){ try{ const row = await Publisher.findByPk(req.params.id); if(!row) return res.status(404).json({error:'Not found'}); await row.destroy(); res.status(204).end();} catch(e){ next(e);} }
module.exports = { list, create, getById, update, remove };
