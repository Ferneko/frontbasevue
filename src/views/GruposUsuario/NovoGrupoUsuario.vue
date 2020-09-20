<template>
  <div>
    <h1>Cadastro</h1>
    <label v-if="!this.isOk">{{this.mensagem}} a</label>
    <p>
      <label>Nome</label>
      <input type="text" name="nome" v-model="dados.nome" />
    </p>
    <p>
      <label>Login</label>
      <input type="text" name="login" v-model="dados.login" />
    </p>
    <p>
      <label>Senha</label>
      <input type="password" name="senha" v-model="dados.senha" />
    </p>
    <p>
      <label>Email</label>
      <input type="email" name="nome" v-model="dados.email" />
      <input type="hidden" name="ativo" v-model="dados.ativo" value="true" />
      <input type="hidden" name="trocarSenha" v-model="dados.trocarSenha" value="true" />
    </p>
    <button @click="this.enviarParaBack">Salvar</button>
  </div>
</template>

<script>
import conexao from "../../components/Conexao";
export default {
  data() {
    return {
      dados: {
        nome: "",
        login: "",
        senha: "",
        email: "",
        ativo: true,
        trocarSenha: true,
      },
      mensagem: null,
      isOk: true,
    };
  },
  created: function () {
    
  },
  methods: {
    enviarParaBack() {
      conexao
        .post("/GruposUsuarios", this.dados)
        .then((response) => {
          
          this.mensagem = response.data.mensagem;
          this.isOk = response.data.isOk;
        })
        .catch((e) => {
             this.isOk = false;
          this.mensagem = "Catch: "+e;
        });
    },
  },
};
</script>

<style>
</style>