import { NextFunction, Request, Response } from 'express';
import ProductService from '@/services/products.service';
import { Product } from '@/models/products.model';
import { CreateProductDto } from '@/dtos/products.dto';
import { base64toImg } from '@/utils/util';
import fs from 'fs';

class ProductsController {
  public productService = new ProductService();

  public getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllProductsData: Product[] = await this.productService.findAllProduct();

      res.status(200).json({ data: findAllProductsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = Number(req.params.id);
      const findOneProductData: Product = await this.productService.findProductById(productId);

      res.status(200).json({ data: findOneProductData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productData: CreateProductDto = req.body;
      const productImage = productData.image;
      const { image, imageName, extension } = base64toImg(productImage);
      if (!image) throw Error('image is must base64 string!');

      const filePath = `public/images/${imageName}.${extension}`;
      fs.writeFileSync(filePath, image);

      const createProductData: Product = await this.productService.createProduct({
        ...productData,
        image: `${imageName}.${extension}`,
      });

      res.status(201).json({ data: createProductData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = Number(req.params.id);
      const productData: CreateProductDto = req.body;

      const payload = { ...productData };

      const productImage = productData.image;
      const { image, imageName, extension } = base64toImg(productImage);
      if (image) {
        const filePath = `public/images/${imageName}.${extension}`;
        fs.writeFileSync(filePath, image);
        payload.image = `${imageName}.${extension}`;
      }

      const updateProductData: Product = await this.productService.updateProduct(
        productId,
        payload,
      );

      res.status(200).json({ data: updateProductData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = Number(req.params.id);
      const deleteProductData: Product = await this.productService.deleteProduct(productId);

      res.status(200).json({ data: deleteProductData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;
