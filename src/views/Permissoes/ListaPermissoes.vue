<template>
   <ul v-if="dados && dados.length">
       <li v-for="(linha, i) in dados" v-bind:key="i">
           {{linha.nome}}  <router-link :to="{ path: '/Permissao/'+linha.id}">Editar</router-link> 
       </li>
   </ul>
</template>

<script>
import conexao from '../../components/Conexao'
export default {
    data(){
        return {
            dados:[]
        }
    },
    created:function(){
        conexao.get('/Permissoes')
        .then(res =>{ this.dados = res.data.dados })
    }
}
</script>

<style>

</style>