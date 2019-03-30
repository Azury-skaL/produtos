import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-produtos-lista',
  templateUrl: 'produtos-lista.html',
})
export class ProdutosListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosListaPage');
  }

  newItemProdutos(){
    this.navCtrl.push('ProdutosEditaPage');
  }

  editItemProdutos(produto:any){
    this.navCtrl.push('ProdutosEditaPage', { produtokey: produto.key} );
  }

  removeItemProdutos(produtoKey: string, hasImg: boolean){
    this.produtosProvider.remove(produtoKey, hasImg);
    this.toast.show('Produto removido com sucesso.');
  }
}
