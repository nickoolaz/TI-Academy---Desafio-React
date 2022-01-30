import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Home } from './views/Home';
import {Listar} from './views/Cliente/Listar';
import {ListarPedido} from './views/Pedido/ListarPedido';
import { ListarServico } from './views/Servico/ListarServico';
import {Menu} from './components/Menu';
import {Item} from './views/Servico/Item'
import { Cadastrar } from './views/Servico/Cadastrar';
import { Compra } from './views/Compra';
import { ListarProduto } from './views/Produto/ListarProduto';
import {ItemP} from './views/Produto/ItemP'
import { CadastrarP } from './views/Produto/CadastrarP';


function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/listar-cliente" component={Listar}/>
          <Route path="/listar-pedido" component={ListarPedido}/>
          <Route path="/listar-servico" component={ListarServico}/>
          <Route path="/listar-pedido/:id" component={Item}/>
          <Route path="/cadastrarservico" component={Cadastrar}/>
          <Route path="/listar-compra" component={Compra}/>
          <Route path="/listar-produto" component={ListarProduto}/>
          <Route path="/cadastrarproduto" component={CadastrarP}/>
          <Route path="/listar-produto/:id" component={ItemP}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
