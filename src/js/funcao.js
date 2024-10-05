function Botao(props){
    this.label = props?.label ?? 'OK'
}

const botao = new Botao({label: 'Cancelar'})
console.log(botao.label)