import DB from '@/databases';
import { CreateProductDto } from '@/dtos/products.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Product } from '@/models/products.model';
import { isEmpty } from '@/utils/util';

class ProductService {
  public products = DB.Products;

  public async findAllProduct(): Promise<Product[]> {
    const allProduct: Product[] = await this.products.findAll({
      order: [
        ['id', 'DESC'],
        ['created_at', 'DESC'],
      ],
    });
    return allProduct;
  }

  public async findProductById(productId: number): Promise<Product> {
    if (isEmpty(productId)) throw new HttpException(400, 'ProductId is empty');

    const findProduct: Product = await this.products.findByPk(productId);
    if (!findProduct) throw new HttpException(409, "Product doesn't exist");

    return findProduct;
  }

  public async createProduct(productData: CreateProductDto): Promise<Product> {
    if (isEmpty(productData)) throw new HttpException(400, 'productData is empty');

    const findProduct: Product = await this.products.findOne({
      where: { name: productData.name },
    });
    if (findProduct)
      throw new HttpException(409, `This product name ${productData.name} is already exists`);

    const createProductData: Product = await this.products.create({
      ...productData,
    });
    return createProductData;
  }

  public async updateProduct(productId: number, productData: CreateProductDto): Promise<Product> {
    if (isEmpty(productData)) throw new HttpException(400, 'productData is empty');

    const findProduct: Product = await this.products.findByPk(productId);
    if (!findProduct) throw new HttpException(409, "Product doesn't exist");

    await this.products.update({ ...productData }, { where: { id: productId } });

    const updateProduct: Product = await this.products.findByPk(productId);
    return updateProduct;
  }

  public async deleteProduct(productId: number): Promise<Product> {
    if (isEmpty(productId)) throw new HttpException(400, "Product doesn't existId");

    const findProduct: Product = await this.products.findByPk(productId);
    if (!findProduct) throw new HttpException(409, "Product doesn't exist");

    await this.products.destroy({ where: { id: productId } });

    return findProduct;
  }
}

export default ProductService;
