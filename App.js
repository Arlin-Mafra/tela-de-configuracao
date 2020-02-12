import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Slider, Switch, ScrollView, 
  TouchableHighlight, Image, TouchableOpacity} from 'react-native'
  import DatePicker from 'react-native-datepicker'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
       nome:'',
       sexo:['Masculino'],
       altura:1.5 ,
       peso:100.0,
       doador:false,
       salario:15.000,
       banco:[],
       quantidade:0,
       date:''
      
    }

   this.aumentar = this.aumentar.bind(this)
   this.diminuir = this.diminuir.bind(this)
   this.salvar = this.salvar.bind(this)


  }


  diminuir(){
    let s = this.state
    if(s.quantidade > 0)
    s.quantidade --
    this.setState(s)

  }

  aumentar(){
    let s = this.state
    s.quantidade ++
    this.setState(s)
  }

  salvar(){
    let s = this.state
    alert(
    'Dados Pessoais'+'\n'+
    'Nome: '+ s.nome+'\n' + 'Data de Nascimento: '+ s.date+ '\n'+
    'Altura: '+s.altura.toFixed(2)+'\n'+ 'Sexo: '+ s.sexo+'\n'+
    'Peso: '+s.peso.toFixed(1)+'\n'+ 'Doador: '+s.doador+'\n'+
    'Dados Profissionais'+'\n'+ 'Salário: '+ s.salario.toFixed(3)+'\n'+
    'Banco:  '+s.banco+'\n'+ 'Quantidade de cartões: '+ s.quantidade

    )
    this.setState(s)

  }

render(){
  
  return (
    
    <View style={styles.container}>
       <ScrollView>
          
        <Text style={styles.title}>Tela de configuração</Text>

        <Text style={styles.subTitle}>Dados Pessoais</Text>

        <View style={styles.areaNome}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.inputNome} placeholder='Seu nome...' 
         value={this.state.nome} onChangeText={(v)=>this.setState({nome: v}) } />

        <Text style={styles.label}>Data de nascimento:</Text>
        <DatePicker style={{width: 200}}date={this.state.date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-1985" 
            customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />    

        <Text style={styles.label}>Sexo:</Text>
        <Picker selectedValue={this.state.sexo}
          style={{ height: 50, width: 170 }}
          onValueChange={(itemValue, itemIndex) => this.setState({sexo:itemValue})}>
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>

        <Text style={styles.label}>Altura:</Text>
        <Slider style={styles.slider} minimumValue={0}  maximumValue={3} value={this.state.altura} 
        onValueChange={(v) =>this.setState({altura:v})}/> 
        <Text style={styles.textoSlider}>{this.state.altura.toFixed(2)} metros</Text> 

        <Text style={styles.label}>Peso:</Text>
        <Slider style={styles.slider} minimumValue={0}  maximumValue={200} value={this.state.peso} 
        onValueChange={(v) =>this.setState({peso:v})}/> 
        <Text style={styles.textoSlider}>{this.state.peso.toFixed(1)} kilos</Text>

        <Text style={styles.label}>Doador de Orgãos</Text>
        <View style={styles.sw}>
        <Switch  value={this.state.doador} 
        onValueChange={() =>{ this.setState({ doador: !this.state.doador })  } } />
        </View>
        </View>

        <View style={styles.areaNome}>
            <Text style={styles.subTitle}>Dados Financeiros</Text>

            <Text style={styles.label}>Salario</Text>
            <Slider style={styles.slider} minimumValue={0}  maximumValue={30.000} value={this.state.salario} 
              onValueChange={(v) =>this.setState({salario:v})}/> 
            <Text style={styles.textoSlider}>R$ {this.state.salario.toFixed(3)}</Text>

            <Text style={styles.label}>Banco</Text> 
        <Picker selectedValue={this.state.banco} style={{ height: 50, width: 170 }}
          onValueChange={(itemValue, itemIndex) => this.setState({banco: itemValue})}>
          <Picker.Item label="Brasil" value="brasil" />
          <Picker.Item label="Bradesco" value="bradesco" />
          <Picker.Item label="Itaú" value="itaú" />
          <Picker.Item label="Caixa" value="caixa" />
        </Picker>

        <Text style={styles.label}>Quantidade de Cartões</Text>
        </View>

        <View style={styles.areaCartao}>
        <TouchableHighlight onPress={this.diminuir}>
          <Image source={require('./assets/minus.png')}style={styles.btn}/>
        </TouchableHighlight> 
          <Text style={styles.numero}>{this.state.quantidade}</Text>
        <TouchableHighlight onPress={this.aumentar}>
          <Image source={require('./assets/plus.png')}   style={styles.btn}/>
        </TouchableHighlight> 
        </View>
        
        <TouchableOpacity style={styles.areaSend} onPress={this.salvar}>
          <Text style={styles.send}>Enviar</Text>
        </TouchableOpacity>
        
        
        </ScrollView>
    </View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:10,
    backgroundColor: '#ddd',
    alignItems:"center",
    justifyContent: 'center',
    borderWidth:1
  },
  title:{
    fontSize:30,
    fontWeight:"bold",
    margin:10
    
  },

  subTitle:{
    fontSize:25,
    textAlign:"center",
    margin:10

  },

  inputNome:{
    height:40,
    width:350,
    borderWidth:1,
    borderRadius:20,
    fontSize:20,
    marginBottom:10
    
  },
  label:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"left",
    margin:5
  },
  dtNasc:{
    height:40,
    width:200
  },
  slider:{
    alignSelf:"stretch"
  },
  textoSlider:{
    fontSize:20,
    justifyContent:"center",
    textAlign:"center"
  },
  sw:{
    alignItems:"flex-start"
  },
  btn:{
    height:30,
    width:30
  },

  numero:{
    fontSize:30
  },
  areaCartao:{
    flexDirection:"row",
    margin:5
  },

  send:{
    fontSize:20,
    borderWidth:1,
    borderRadius:20,
    textAlign:"center",
    width:100
  },
  areaSend:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
    marginBottom:20
  }
});
