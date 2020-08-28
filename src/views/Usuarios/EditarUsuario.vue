<template>
 <div>
<p>{{this.dados.id}}</p>
<p>{{this.dados.nome}}</p>
<p>{{this.dados.login}}</p>
<p>{{this.dados.email}}</p>
<p>{{this.dados.ativo}}</p>
<p>{{this.dados.trocarSenha}}</p>
     </div>
</template>

<script>
import conexao from '../../components/Conexao'
export default {
    data(){
        return{
            dados:{
                id:0,
                nome :"",      
                login :"",
                email :"",
                ativo :null,
                trocarSenha:null
            }
        }
    },
    created:function(){
       
        conexao.get("/Usuarios/"+this.$route.params.id)
        .then(res =>( this.dados = res.data.dados  ))
    }
    
}
</script>

<style>

</style>