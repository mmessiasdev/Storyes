import 'package:fluttercode/model/products.dart';
import 'package:fluttercode/repository/repositories.dart';

class ProductsController {
  ProductsController(this._repositories);
  final Repositories _repositories;

  //get
  Future<List<Attributes>> fetchProductsList() async {
    return _repositories.getProductsList();
  }
}
