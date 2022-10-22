/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

import { DataTypes, Sequelize } from 'sequelize';

const { Model } = require('sequelize');

export interface Product {
  id: number;
  name: string;
  slug: string;
  process: string;
  weight: number;
  available: 'get inquity' | 'out of stock';
  taste: string;
  score: number;
  variety: string;
  description: string;
  type: string;
  beans: string;
  elevation: string;
  image: string;
}

export class ProductModel extends Model implements Product {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

export default function (sequelize: Sequelize): typeof ProductModel {
  ProductModel.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      process: DataTypes.STRING,
      weight: DataTypes.DECIMAL(10, 2),
      available: DataTypes.ENUM('get inquity', 'out of stock'),
      taste: DataTypes.STRING,
      score: DataTypes.DECIMAL(10, 1),
      variety: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      beans: DataTypes.STRING,
      elevation: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'products',
      underscored: true,
    },
  );
  return ProductModel;
}
