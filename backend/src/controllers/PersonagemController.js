const PersonagemModel = require('../models/Personagens');

module.exports = {
    async store(req,res){
        const {nome,descricao_curta,descricao_completa,url_imagem}= req.body;

        const personagem = await PersonagemModel.create({
            nome:nome,
            descricao_curta:descricao_curta,
            descricao_completa:descricao_completa,
            url_imagem:url_imagem
        })
        if(!personagem)
            return res.json({error:'erro ao tentar criar novo personagem'});
        
        return res.json(personagem);
    },
    async index(req,res){
        const {page,limit} = req.query;
        const allPersonagens =await PersonagemModel.findAll();
        if(!allPersonagens)
            return res.json({error:'Erro ao tentar retornar personagens'});
        const total_count = allPersonagens.length;
        const start = (page-1)*limit;
        const end = start+limit;
        const personagens = allPersonagens.slice(start,end);
        return res.json({personagens,total_count:total_count});
        
    },
    async show(req,res){
        const {id} = req.query;

        const personagem = await PersonagemModel.findOne({where:{id:id}});
        if(!personagem)
            return res.json({error:'Personagem não encontrado'});
        
        return res.json(personagem);
    },
    async update(req,res){
        const {id,descricao_curta,descricao_completa,url_imagem}= req.body;

        const personagem = await PersonagemModel.update({
            descricao_curta:descricao_curta,
            descricao_completa:descricao_completa,
            url_imagem:url_imagem
        },{where:{id:id}})
        if(!personagem)
            return res.json({error:'Erro ao tentar atualizar o personagem'});
        
        return res.json(personagem);
    },
    async delete(req,res){
        const {id} = req.params;

        console.log(id);

        const personagem = await PersonagemModel.findOne({where:{id:id}});
        if(!personagem)
            return res.json({error:'Erro ao tentar deletar personagem'});
        personagem.destroy();

        return res.send('Personagem deletado com sucesso');
    }
}